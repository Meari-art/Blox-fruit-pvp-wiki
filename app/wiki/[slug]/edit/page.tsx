"use client";

import { RichEditor } from "@/components/RichEditor";
import { useState } from "react";

export default function EditWikiPage({ params }: { params: { slug: string } }) {
  const [content, setContent] = useState("");

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold">Éditer {params.slug}</h1>
      <form action={`/api/wiki/${params.slug}/edit`} method="post" className="mt-6 space-y-3">
        <RichEditor onChange={setContent} />
        <input type="hidden" name="content" value={content} />
        <input
          name="summary"
          required
          className="w-full rounded border border-zinc-700 bg-zinc-900 p-3"
          placeholder="Résumé des changements"
        />
        <button className="rounded bg-indigo-500 px-4 py-2">Soumettre à modération</button>
      </form>
    </main>
  );
}
