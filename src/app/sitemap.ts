import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://amanjaved.dev';
  return [
    {
      url: base,
      lastModified: new Date('2026-07-20'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}