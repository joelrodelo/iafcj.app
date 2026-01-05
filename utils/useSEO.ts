import { useEffect } from 'react';

interface SEOConfig {
  title: string;
  description?: string;
  canonical: string;
  ogImage?: string;
}

const BASE_URL = 'https://iafcj.app';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og.png`;

/**
 * Hook para actualizar dinámicamente los meta tags SEO
 * Resuelve el problema de canonical tags estáticos en SPAs
 */
export const useSEO = ({ title, description, canonical, ogImage }: SEOConfig) => {
  useEffect(() => {
    // Construir URL canónica completa
    const fullCanonical = canonical.startsWith('http') ? canonical : `${BASE_URL}${canonical}`;
    
    // Actualizar título
    document.title = title;

    // Actualizar canonical
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalTag) {
      canonicalTag.href = fullCanonical;
    } else {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      canonicalTag.href = fullCanonical;
      document.head.appendChild(canonicalTag);
    }

    // Actualizar meta description
    if (description) {
      let descTag = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (descTag) {
        descTag.content = description;
      }
    }

    // Actualizar Open Graph tags
    const updateMetaProperty = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (tag) {
        tag.content = content;
      }
    };

    updateMetaProperty('og:url', fullCanonical);
    updateMetaProperty('og:title', title);
    if (description) {
      updateMetaProperty('og:description', description);
    }
    if (ogImage) {
      updateMetaProperty('og:image', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`);
    }

    // Actualizar Twitter tags
    const updateTwitterMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.querySelector(`meta[property="${name}"]`) as HTMLMetaElement;
      }
      if (tag) {
        tag.content = content;
      }
    };

    updateTwitterMeta('twitter:url', fullCanonical);
    updateTwitterMeta('twitter:title', title);
    if (description) {
      updateTwitterMeta('twitter:description', description);
    }
    if (ogImage) {
      updateTwitterMeta('twitter:image', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`);
    }

    // Cleanup: restaurar valores por defecto al desmontar (opcional)
    return () => {
      // No restauramos para evitar flashes de contenido
    };
  }, [title, description, canonical, ogImage]);
};
