import Link from "next/link";

export function SectionCards({ items }: { items: Array<{ title: string; description: string; href: string }> }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 hover:border-indigo-400">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}
