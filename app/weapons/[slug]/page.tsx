import { PageShell } from "@/components/PageShell";

export default function WeaponDetailPage({ params }: { params: { slug: string } }) {
  return <PageShell title={`Weapon: ${params.slug}`} description="Détails techniques, moveset, combo extensions et counters." />;
}
