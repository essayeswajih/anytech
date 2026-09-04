import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: 'https://anytech.tn', lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: 'https://anytech.tn/fr', lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://anytech.tn/ar', lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
