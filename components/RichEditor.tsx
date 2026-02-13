"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

type Props = {
  initialContent?: string;
  onChange: (content: string) => void;
};

export function RichEditor({ initialContent = "", onChange }: Props) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "min-h-[320px] rounded border border-zinc-700 bg-zinc-900 p-3 outline-none"
      }
    },
    onUpdate({ editor }) {
      onChange(editor.getJSON() ? JSON.stringify(editor.getJSON()) : "");
    }
  });

  useEffect(() => {
    if (!editor) return;
    onChange(editor.getJSON() ? JSON.stringify(editor.getJSON()) : "");
  }, [editor, onChange]);

  if (!editor) return null;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className="rounded border border-zinc-700 px-2 py-1 text-sm">Bold</button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className="rounded border border-zinc-700 px-2 py-1 text-sm">Italic</button>
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className="rounded border border-zinc-700 px-2 py-1 text-sm">List</button>
        <button type="button" onClick={() => editor.chain().focus().toggleCodeBlock().run()} className="rounded border border-zinc-700 px-2 py-1 text-sm">Code</button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
