import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function WikiPage({ params }: { params: { slug: string } }) {
  const latestDraft = await prisma.editHistory.findFirst({
    where: { entityType: "WIKI_PAGE", entityId: params.slug },
    orderBy: { createdAt: "desc" },
    include: { editor: true }
  });

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-bold">Page Wiki: {params.slug}</h1>
      <p className="mt-3 text-zinc-300">
        Exemple de page éditable avec workflow de modération et historique versionné.
      </p>
      <pre className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900 p-4 text-sm whitespace-pre-wrap">
        {JSON.stringify(latestDraft?.newContent ?? { content: "Aucun brouillon publié" }, null, 2)}
      </pre>
      <Link href={`/wiki/${params.slug}/edit`} className="mt-6 inline-block rounded bg-indigo-500 px-4 py-2">
        Proposer une modification
      </Link>
    </main>
  );
}
