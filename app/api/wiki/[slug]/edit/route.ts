import { auth, canCreateContribution } from "@/lib/auth";
import { containsSpam, guardRateLimit } from "@/lib/antiSpam";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, { params }: { params: { slug: string } }) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  const rateLimit = guardRateLimit(`wiki-edit:${session.user.id}:${ip}`);

  if (!rateLimit.allowed) {
    return NextResponse.json({ error: "Trop de requêtes" }, { status: 429 });
  }

  if (!canCreateContribution(session.user.role, session.user.reputationPoints)) {
    return NextResponse.json({ error: "Réputation insuffisante pour contribuer" }, { status: 403 });
  }

  const formData = await request.formData();
  const content = String(formData.get("content") ?? "").trim();
  const summary = String(formData.get("summary") ?? "").trim();

  if (content.length < 80 || summary.length < 10 || containsSpam(content)) {
    return NextResponse.json({ error: "Contenu invalide ou spam détecté" }, { status: 400 });
  }

  await prisma.editHistory.create({
    data: {
      entityType: "WIKI_PAGE",
      entityId: params.slug,
      oldContent: {},
      newContent: { tiptap: JSON.parse(content) },
      changeSummary: summary,
      editorId: session.user.id,
      status: "PENDING_REVIEW"
    }
  });

  return NextResponse.redirect(new URL(`/wiki/${params.slug}`, request.url));
}
