import { PageShell } from "@/components/PageShell";

export default function FightingStyleDetailPage({ params }: { params: { slug: string } }) {
  return <PageShell title={`Fighting Style: ${params.slug}`} description="Cadres d'analyse 1v1 / teamfight et routes de combo." />;
}
