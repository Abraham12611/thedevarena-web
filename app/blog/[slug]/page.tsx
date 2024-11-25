import { Metadata } from "next";
import Layout from "@/components/layout";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  // You can fetch blog post data here to generate dynamic metadata
  return {
    title: `Blog Post - ${params.slug}`,
    description: "Blog post description",
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <NeonGradientCard
          borderSize={1.5}
          borderRadius={24}
          neonColors={{
            firstColor: "hsl(var(--primary))",
            secondColor: "hsl(var(--accent))"
          }}
          className="overflow-hidden"
        >
          <article className="prose prose-invert max-w-none p-8">
            <h1>Blog Post Title</h1>
            <p>Blog post content goes here...</p>
          </article>
        </NeonGradientCard>
      </div>
    </Layout>
  );
}