import { PageShell } from "@/components/PageShell";
import { SectionCards } from "@/components/SectionCards";

export default function BlogPage() {
  return (
    <PageShell title="Blog META" description="Analyses patch, guides matchup, tendances tournois et data communautaire.">
      <SectionCards items={[
        { title: "META Week 1", description: "Top picks et counters dominants.", href: "/blog/meta-week-1" },
        { title: "Comment lire la tier list", description: "Comprendre la pondération réputation.", href: "/blog/lire-tier-list" },
        { title: "Guide anti-spam contribution", description: "Bonnes pratiques pour publier utilement.", href: "/blog/guide-contribution" }
      ]} />
    </PageShell>
  );
}
