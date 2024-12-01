import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import BlogContent from "@/components/blog/blog-content";
import { BlogPost } from "@/types/blog";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'app/blog/content', `${slug}.md`);
    const fileContent = await fs.readFile(filePath, 'utf8');
    
    // Parse frontmatter and content
    const { data, content } = matter(fileContent);
    
    const post: BlogPost = {
      slug,
      title: data.title,
      description: data.description,
      content,
      publishedAt: data.publishedAt,
      featureImage: data.featureImage,
      author: data.author,
      tags: data.tags,
      readingTime: `${Math.ceil(content.split(' ').length / 200)} min read`,
    };
    
    return post;
  } catch (error) {
    return null;
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <BlogContent post={post} />
      </div>
    </main>
  );
}