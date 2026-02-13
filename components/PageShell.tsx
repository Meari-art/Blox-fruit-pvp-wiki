export function PageShell({ title, description, children }: { title: string; description?: string; children?: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      {description ? <p className="mt-2 max-w-3xl text-zinc-300">{description}</p> : null}
      {children ? <section className="mt-8">{children}</section> : null}
    </main>
  );
}
