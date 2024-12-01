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
    
    const post: BlogPost = {
      slug,
      title: "Sample Title",
      excerpt: "Sample excerpt",
      description: "Sample description",
      content,
      publishedAt: new Date().toISOString(),
      featureImage: "https://img.freepik.com/free-photo/videographer-uses-software-create-visual-effects-video-projects-while-relaxing-with-music_482257-91925.jpg?t=st=1733051728~exp=1733055328~hmac=e6d3ff5d488c2a2acc2eac8c1a63d565bfe480b4c15490567159695511291c96&w=1060",
      author: {
        name: "Abraham Dahunsi",
        image: "https://i.postimg.cc/L593G1z9/Profile-pic.jpg",
        profession: "Technical Writer",
        bio: "Full-stack developer",
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