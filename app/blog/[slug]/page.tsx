import BlogAuthor from "@/components/blog/blog-author";
import BlogContent from "@/components/blog/blog-content";
import BlogHeader from "@/components/blog/blog-header";
import RelatedPosts from "@/components/blog/related-posts";
import ShareButtons from "@/components/blog/share-buttons";

// List of all possible blog post slugs
const posts = [
  "future-of-ui-ux-design",
  "social-media-security",
  "future-of-interactive-design",
  "perfect-font-introduction",
  "design-systems-evolution",
  "future-of-micro-interactions"
];

// Generate static params for all blog posts
export function generateStaticParams() {
  return posts.map((slug) => ({
    slug: slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <article className="min-h-screen py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <BlogHeader />
        <BlogAuthor />
        <BlogContent />
        <ShareButtons />
        <RelatedPosts />
      </div>
    </article>
  );
}