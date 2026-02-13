import { ComboScene } from "@/components/ComboScene";

export default function ComboDetailPage({ params }: { params: { slug: string } }) {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-bold">Combo: {params.slug}</h1>
      <p className="mt-2 text-zinc-300">
        Visualisation Three.js de la séquence du combo (timeline animation à brancher sur des données réelles).
      </p>
      <ComboScene />
      <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900 p-4 text-zinc-200">
        Inputs: Z → X → C · Fenêtre de punish: 0.8s · Dégâts estimés: 7,950
      </div>
    </main>
  );
}
