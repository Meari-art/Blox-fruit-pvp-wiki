import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function TierListPage() {
  return (
    <PageShell title="Tier List Dynamique" description="Vote pondéré par réputation, META actuelle, variation temporelle.">
      <div className="rounded border border-zinc-800 bg-zinc-900 p-4">Tableau S/A/B/C/D (placeholder visuel).</div>
      <div className="mt-4 flex gap-3">
        <Link href="/methodologie-tier-list" className="rounded border border-zinc-700 px-4 py-2">Méthodologie</Link>
        <Link href="/admin/meta-history" className="rounded border border-zinc-700 px-4 py-2">Historique META</Link>
      </div>
    </PageShell>
  );
}
