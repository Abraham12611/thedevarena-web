import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import BlogContent from "@/components/blog/blog-content";
import { Author, BlogPost } from "@/types/blog";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'app/blog/content', `${slug}.md`);
    const content = await fs.readFile(filePath, 'utf8');
    
    // You'll need to add frontmatter processing here to extract metadata
    // For now, using dummy data
    const post: BlogPost = {
      slug,
      title: "Sample Title",
      description: "Sample description",
      content,
      publishedAt: new Date().toISOString(),
      featureImage: "/images/blog/default-feature.jpg",
      author: {
        name: "Abraham Dahunsi",
        image: "/path/to/image.jpg",
        profession: "Technical Writer",
        bio: "Full-stack developer turned technical writer",
        social: {
          twitter: "https://twitter.com/abrahamdahunsi",
          github: "https://github.com/Abraham12611",
          website: "https://www.abrahamdahunsi.com",
        }
      },
      tags: ["Technical Writing", "Development"],
      readingTime: "5 min read",
      views: 0
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