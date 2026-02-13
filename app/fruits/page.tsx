import { PageShell } from "@/components/PageShell";
import { SectionCards } from "@/components/SectionCards";

export default function FruitsPage() {
  return (
    <PageShell title="Fruits" description="Index des fruits PVP avec filtres (structure UI prête).">
      <SectionCards items={[
        { title: "Dough", description: "Burst, stun chains, pression constante.", href: "/fruits/dough" },
        { title: "Kitsune", description: "Mobilité extrême et domination en duel.", href: "/fruits/kitsune" },
        { title: "Leopard", description: "Aggression high tempo et confirms rapides.", href: "/fruits/leopard" }
      ]} />
    </PageShell>
  );
}
