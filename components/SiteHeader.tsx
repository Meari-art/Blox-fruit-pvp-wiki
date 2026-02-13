import Link from "next/link";

const links = [
  ["/fruits", "Fruits"],
  ["/combos", "Combos"],
  ["/builds", "Builds"],
  ["/tier-list", "Tier List"],
  ["/recherche", "Recherche"],
  ["/contribuer", "Contribuer"]
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-indigo-300">Blox Fruit PVP Wiki</Link>
        <nav className="flex flex-wrap gap-3 text-sm text-zinc-300">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="rounded px-2 py-1 hover:bg-zinc-800">{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
