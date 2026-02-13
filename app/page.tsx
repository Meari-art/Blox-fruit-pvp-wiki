import { PageShell } from "@/components/PageShell";
import { SectionCards } from "@/components/SectionCards";

export default function HomePage() {
  return (
    <PageShell
      title="Blox Fruit PVP Wiki"
      description="Structure complète des pages : wiki, data PVP, contribution, admin, SEO, monétisation légère."
    >
      <SectionCards
        items={[
          { title: "Fruits", description: "Fiches détaillées par fruit, tiers dynamiques, builds recommandés.", href: "/fruits" },
          { title: "Combos", description: "Routes listing + détail avec scène 3D et séquences d'inputs.", href: "/combos" },
          { title: "Builds", description: "Builds META et communautaires avec notation.", href: "/builds" },
          { title: "Tier List", description: "META actuelle, historique des changements et méthodologie.", href: "/tier-list" },
          { title: "Contribuer", description: "Soumission de combos, éditions wiki et workflow modération.", href: "/contribuer" },
          { title: "Admin", description: "Modération, utilisateurs, historique META et gouvernance.", href: "/admin" }
        ]}
      />
    </PageShell>
  );
}
