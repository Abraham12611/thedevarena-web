import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types/blog';
import { incrementViewCount, getViewCount } from '@/lib/view-counter';

const BLOG_DIR = path.join(process.cwd(), 'app/blog/content');

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const action = searchParams.get('action');

    switch (action) {
      case 'getAllPosts':
        const files = await fs.readdir(BLOG_DIR);
        const posts = await Promise.all(
          files
            .filter(file => file.endsWith('.md'))
            .map(async file => {
              const filePath = path.join(BLOG_DIR, file);
              const content = await fs.readFile(filePath, 'utf8');
              const { data, content: markdown } = matter(content);
              const slug = file.replace('.md', '');
              
              return {
                ...data,
                slug,
                content: markdown,
                views: getViewCount(slug),
              } as BlogPost;
            })
        );

        // Sort by date, newest first
        const sortedPosts = posts.sort((a, b) => {
          const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
          const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
          return dateB - dateA;
        });

        return NextResponse.json(sortedPosts);

      case 'getPost':
        if (!slug) {
          return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
        }

        const filePath = path.join(BLOG_DIR, `${slug}.md`);
        const content = await fs.readFile(filePath, 'utf8');
        const { data, content: markdown } = matter(content);
        
        incrementViewCount(slug);

        return NextResponse.json({
          ...data,
          slug,
          content: markdown,
          views: getViewCount(slug),
        } as BlogPost);

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('Blog API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 