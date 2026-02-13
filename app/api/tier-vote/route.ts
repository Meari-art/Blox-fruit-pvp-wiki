import { prisma } from "@/lib/prisma";
import { calculateTierScore } from "@/lib/tier";
import { computeWeightedVote } from "@/lib/reputation";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";

const voteSchema = z.object({
  fruitId: z.string(),
  score: z.number().int().min(1).max(5)
});

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

  const body = await request.json();
  const parsed = voteSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { fruitId, score } = parsed.data;
  const weightedScore = computeWeightedVote(score, session.user.reputationPoints);

  await prisma.tierVote.upsert({
    where: {
      userId_entityType_entityId: {
        userId: session.user.id,
        entityType: "FRUIT",
        entityId: fruitId
      }
    },
    update: { score, weightedScore, fruitId },
    create: { userId: session.user.id, entityType: "FRUIT", entityId: fruitId, score, weightedScore, fruitId }
  });

  const votes = await prisma.tierVote.findMany({
    where: { entityType: "FRUIT", entityId: fruitId },
    include: { user: { select: { reputationPoints: true } } }
  });

  const rating = calculateTierScore(votes.map((vote) => ({ score: vote.score, reputationPoints: vote.user.reputationPoints })));

  await prisma.fruit.update({
    where: { id: fruitId },
    data: { metaScore: rating.weightedAverage, currentTier: rating.tier, isMetaCurrent: rating.isMetaCurrent }
  });

  return NextResponse.json({ ok: true, rating });
}
