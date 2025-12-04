import { LucideIcon } from 'lucide-react';

export interface Tool {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  isExternal: boolean;
  status: 'active' | 'coming_soon';
}