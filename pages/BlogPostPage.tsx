import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPost } from '../components/blog/BlogPost';
import { getPostBySlug, BlogPost as BlogPostType } from '../utils/blogLoader';
import { useSEO } from '../utils/useSEO';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  // SEO dinámico basado en el post
  useSEO({
    title: post ? `${post.title} - IAFCJ App Blog` : 'Cargando... - IAFCJ App Blog',
    description: post?.excerpt || 'Artículo del blog de IAFCJ App',
    canonical: `/blog/${slug}`,
  });

  useEffect(() => {
    if (slug) {
      getPostBySlug(slug).then((loadedPost) => {
        setPost(loadedPost);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post no encontrado</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  return <BlogPost post={post} />;
};
