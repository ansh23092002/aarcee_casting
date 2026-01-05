import { MetadataRoute } from 'next'
import {
  grayCastIronProducts,
  High_Manganese_Steel,
  Steel_Casting,
  Alloy_Steel,
  Rolling_Mill_Casting,
  Machine_Workshop,
} from '../Data/index'

export const dynamic = 'force-static'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aarceecasting.com'
  const currentDate = new Date()
  
  // Main pages
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]
  
  // Product category pages
  const categories = [
    { id: 'gray-cast-iron', priority: 0.8 },
    { id: 'high-manganese', priority: 0.8 },
    { id: 'steel-casting', priority: 0.8 },
    { id: 'alloy-steel', priority: 0.8 },
    { id: 'rolling-mill', priority: 0.8 },
    { id: 'machine-workshop', priority: 0.8 },
  ]
  
  const categoryRoutes = categories.map(cat => ({
    url: `${baseUrl}/products?category=${cat.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: cat.priority,
  }))
  
  return [...routes, ...categoryRoutes]
}
