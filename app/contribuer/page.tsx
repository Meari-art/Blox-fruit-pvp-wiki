export default function ContribuerPage() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-bold">Contribuer</h1>
      <p className="mt-2 text-zinc-300">Propose des combos, builds et éditions de pages wiki.</p>
      <ul className="mt-6 list-disc space-y-2 pl-6 text-zinc-200">
        <li>Les contributions passent en revue modérateur.</li>
        <li>Les contributions approuvées rapportent de la réputation.</li>
        <li>Les comptes confirmés accèdent aux votes pondérés META.</li>
      </ul>
    </main>
  );
}
