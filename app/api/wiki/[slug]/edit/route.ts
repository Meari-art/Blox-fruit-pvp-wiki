import { containsSpam, guardRateLimit } from "@/lib/antiSpam";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, { params }: { params: { slug: string } }) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  const rateLimit = guardRateLimit(`wiki-edit:${ip}`);

  if (!rateLimit.allowed) {
    return NextResponse.json({ error: "Trop de requêtes" }, { status: 429 });
  }

  const formData = await request.formData();
  const content = String(formData.get("content") ?? "").trim();
  const summary = String(formData.get("summary") ?? "").trim();

  if (content.length < 80 || summary.length < 10 || containsSpam(content)) {
    return NextResponse.json({ error: "Contenu invalide ou spam détecté" }, { status: 400 });
  }

  const stubUserId = "seed-user-id";

  await prisma.editHistory.create({
    data: {
      entityType: "WIKI_PAGE",
      entityId: params.slug,
      oldContent: {},
      newContent: { content },
      changeSummary: summary,
      editorId: stubUserId,
      status: "PENDING_REVIEW"
    }
  });

  return NextResponse.redirect(new URL(`/wiki/${params.slug}`, request.url));
}
