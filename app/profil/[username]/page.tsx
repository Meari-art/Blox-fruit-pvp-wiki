import { PageShell } from "@/components/PageShell";

export default function ProfilPage({ params }: { params: { username: string } }) {
  return <PageShell title={`Profil: ${params.username}`} description="Profil public: réputation, badges, contributions, votes et historique." />;
}
