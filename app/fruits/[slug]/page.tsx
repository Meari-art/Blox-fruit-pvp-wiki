import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function FruitDetailPage({ params }: { params: { slug: string } }) {
  return (
    <PageShell title={`Fruit: ${params.slug}`} description="Fiche complète: avantages/inconvénients, counters, builds, combos et tier dynamique.">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded border border-zinc-800 bg-zinc-900 p-4">Avantages, inconvénients, matchup chart (placeholder).</div>
        <div className="rounded border border-zinc-800 bg-zinc-900 p-4">Tier actuel + historique META (placeholder).</div>
      </div>
      <Link href={`/wiki/${params.slug}`} className="mt-4 inline-block rounded bg-indigo-500 px-4 py-2">Ouvrir page wiki liée</Link>
    </PageShell>
  );
}
