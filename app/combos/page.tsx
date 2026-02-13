import { PageShell } from "@/components/PageShell";
import { SectionCards } from "@/components/SectionCards";

export default function CombosPage() {
  return (
    <PageShell title="Combos" description="Bibliothèque de combos: débutant à expert, avec tags et niveau d'exécution.">
      <SectionCards items={[
        { title: "Dough infinite pressure", description: "Setup + extension + finisher", href: "/combos/dough-pressure" },
        { title: "Kitsune punish route", description: "Whiff punish into carry", href: "/combos/kitsune-punish" },
        { title: "Leopard burst", description: "Fast confirm into high damage", href: "/combos/leopard-burst" }
      ]} />
    </PageShell>
  );
}
