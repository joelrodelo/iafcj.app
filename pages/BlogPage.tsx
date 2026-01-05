import React from 'react';
import { BlogList } from '../components/blog/BlogList';
import { getAllPosts } from '../utils/blogLoader';
import { useSEO } from '../utils/useSEO';

export const BlogPage: React.FC = () => {
  useSEO({
    title: 'Blog - IAFCJ App',
    description: 'Noticias, actualizaciones y artículos sobre las herramientas digitales de IAFCJ App para la iglesia.',
    canonical: '/blog',
  });

  const posts = getAllPosts();
  return <BlogList posts={posts} />;
};
