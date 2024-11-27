import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import BlogContent from "@/components/blog/blog-content";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

async function getBlogContent(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'app/blog/content', `${slug}.md`);
    const content = await fs.readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'app/blog/content');
  const files = await fs.readdir(contentDir);
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      slug: file.replace('.md', ''),
    }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const content = await getBlogContent(params.slug);

  if (!content) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <BlogContent content={content} />
      </div>
    </main>
  );
}