import { PageShell } from "@/components/PageShell";

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  return <PageShell title={`Article: ${params.slug}`} description="Template article SEO: Hn structurés, FAQ, sources et blocs data." />;
}
