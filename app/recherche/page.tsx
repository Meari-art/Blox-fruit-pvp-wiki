"use client";

import Link from "next/link";
import { useState } from "react";

type SearchResult = { type: "fruit" | "combo"; slug: string; label: string };

export default function SearchPage() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  async function onChange(value: string) {
    setQ(value);
    if (value.length < 2) return setResults([]);
    const res = await fetch(`/api/search?q=${encodeURIComponent(value)}`);
    const data = (await res.json()) as { results: SearchResult[] };
    setResults(data.results);
  }

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold">Recherche instantanée</h1>
      <input
        value={q}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Chercher un fruit, combo, build..."
        className="mt-4 w-full rounded border border-zinc-700 bg-zinc-900 p-3"
      />
      <ul className="mt-4 space-y-2">
        {results.map((result) => (
          <li key={`${result.type}-${result.slug}`} className="rounded border border-zinc-800 bg-zinc-900 p-3">
            <Link href={result.type === "fruit" ? `/fruits/${result.slug}` : `/combos/${result.slug}`}>
              [{result.type}] {result.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
