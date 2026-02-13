import Link from "next/link";

const pillars = [
  "Base de données PVP complète",
  "Système contributif versionné",
  "Tier list transparente pondérée par réputation",
  "Monétisation discrète et optionnelle"
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-bold">Blox Fruit PVP Wiki</h1>
      <p className="mt-4 text-zinc-300">
        Plateforme communautaire pour documenter le META PVP Roblox avec des contributions vérifiées.
      </p>

      <ul className="mt-8 grid gap-3 md:grid-cols-2">
        {pillars.map((pillar) => (
          <li key={pillar} className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            {pillar}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex gap-4">
        <Link href="/wiki/portal" className="rounded bg-indigo-500 px-4 py-2 font-medium">
          Explorer le Wiki
        </Link>
        <Link href="/contribuer" className="rounded border border-zinc-700 px-4 py-2 font-medium">
          Contribuer
        </Link>
      </div>
    </main>
  );
}
