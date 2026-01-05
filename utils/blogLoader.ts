import matter from 'gray-matter';
import type { BlogPost, BlogPostMetadata } from '../types';

// Import posts metadata
import postsMetadata from '../posts/posts.json';

// For now, we'll load markdown files dynamically
// In production, you might want to use a build-time plugin
const loadMarkdownContent = async (slug: string): Promise<string | null> => {
  try {
    // Try to fetch from public folder first (for production)
    const response = await fetch(`/posts/${slug}.md`);
    if (response.ok) {
      return await response.text();
    }
    
    // Fallback: try to import directly (for development with Vite)
    // This requires the markdown files to be in public/posts/ or handled by a plugin
    return null;
  } catch (error) {
    console.error(`Error loading markdown for ${slug}:`, error);
    return null;
  }
};

export const getAllPosts = (): BlogPostMetadata[] => {
  return [...postsMetadata].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const metadata = postsMetadata.find(p => p.slug === slug);
  if (!metadata) {
    return null;
  }

  // Try to load markdown content
  const markdown = await loadMarkdownContent(slug);
  
  if (!markdown) {
    // Fallback: return metadata only (content will be empty)
    // In a real implementation, you'd want to handle this better
    return {
      ...metadata,
      content: `# ${metadata.title}\n\n${metadata.excerpt}`,
    };
  }

  const { data, content } = matter(markdown);
  
  return {
    slug: data.slug || slug,
    title: data.title || metadata.title,
    date: data.date || metadata.date,
    category: data.category || metadata.category,
    excerpt: data.excerpt || metadata.excerpt,
    content,
  };
};

// Synchronous version for initial load (returns metadata only)
export const getPostMetadataBySlug = (slug: string): BlogPostMetadata | null => {
  return postsMetadata.find(p => p.slug === slug) || null;
};
