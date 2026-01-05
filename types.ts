import { BookOpen, Hammer, Globe, Music, Users, HeartHandshake } from 'lucide-react';

export interface Tool {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: typeof BookOpen;
  isExternal: boolean;
  status: 'active' | 'coming_soon';
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

export interface BlogPost extends BlogPostMetadata {
  content: string;
}
