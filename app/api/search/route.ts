import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim() ?? "";
  if (query.length < 2) return NextResponse.json({ results: [] });

  const fruits = await prisma.$queryRaw<Array<{ id: string; slug: string; name: string; score: number }>>`
    SELECT id, slug, name,
      ts_rank_cd(to_tsvector('simple', coalesce(name, '') || ' ' || coalesce(description, '')), plainto_tsquery('simple', ${query})) AS score
    FROM "Fruit"
    WHERE to_tsvector('simple', coalesce(name, '') || ' ' || coalesce(description, '')) @@ plainto_tsquery('simple', ${query})
    ORDER BY score DESC
    LIMIT 8;
  `;

  const combos = await prisma.combo.findMany({
    where: { title: { contains: query, mode: "insensitive" } },
    take: 8,
    select: { id: true, slug: true, title: true }
  });

  return NextResponse.json({
    results: [
      ...fruits.map((fruit) => ({ type: "fruit", slug: fruit.slug, label: fruit.name })),
      ...combos.map((combo) => ({ type: "combo", slug: combo.slug, label: combo.title }))
    ]
  });
}
