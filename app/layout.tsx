import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blox Fruit PVP Wiki",
  description: "Wiki communautaire de référence pour le PVP Blox Fruits.",
  openGraph: {
    title: "Blox Fruit PVP Wiki",
    description: "Tier lists dynamiques, combos, builds et communauté PVP.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}
