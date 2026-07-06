import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { APP_URL, ROUTES } from "@/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, categories] = await Promise.all([
    prisma.product.findMany({
      where: { isActive: true },
      select: { slug: true, updatedAt: true },
    }),
    prisma.category.findMany({
      where: { isActive: true },
      select: { slug: true, updatedAt: true },
    }),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${APP_URL}${ROUTES.HOME}`,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${APP_URL}${ROUTES.SHOP}`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${APP_URL}${ROUTES.CATEGORIES}`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${APP_URL}${ROUTES.ABOUT}`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${APP_URL}${ROUTES.CATEGORY(category.slug)}`,
    lastModified: category.updatedAt,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${APP_URL}${ROUTES.PRODUCT(product.slug)}`,
    lastModified: product.updatedAt,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}