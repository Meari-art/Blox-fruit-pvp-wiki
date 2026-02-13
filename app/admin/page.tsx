import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const [pendingEdits, topContributors, supporterCount] = await Promise.all([
    prisma.editHistory.count({ where: { status: "PENDING_REVIEW" } }),
    prisma.user.findMany({
      orderBy: { reputationPoints: "desc" },
      take: 10,
      select: { username: true, reputationPoints: true, role: true }
    }),
    prisma.user.count({ where: { isSupporter: true } })
  ]);

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-bold">Dashboard Admin</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded border border-zinc-800 bg-zinc-900 p-4">Éditions en attente: {pendingEdits}</div>
        <div className="rounded border border-zinc-800 bg-zinc-900 p-4">Supporters actifs: {supporterCount}</div>
        <div className="rounded border border-zinc-800 bg-zinc-900 p-4">Santé META: stable</div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/admin/moderation" className="rounded border border-zinc-700 px-4 py-2">Modération</Link>
        <Link href="/admin/users" className="rounded border border-zinc-700 px-4 py-2">Utilisateurs</Link>
        <Link href="/admin/meta-history" className="rounded border border-zinc-700 px-4 py-2">META History</Link>
      </div>

      <h2 className="mt-8 text-xl font-semibold">Top contributeurs</h2>
      <ul className="mt-3 space-y-2">
        {topContributors.map((contributor) => (
          <li key={contributor.username} className="rounded border border-zinc-800 bg-zinc-900 p-3">
            {contributor.username} — {contributor.reputationPoints} XP ({contributor.role})
          </li>
        ))}
      </ul>
    </main>
  );
}
