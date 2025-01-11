import { sitemapData } from "@/lib/sanity/sitemap";

export default async function sitemap() {
  const { posts, tags } = await sitemapData();

  const baseUrl = "https://swaybae.net";

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/calendar`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/community`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/media`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/subathon`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date().toISOString(),
    },
  ];

  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/post/${post.postSlug}`,
    lastModified: post._updatedAt,
  }));

  const tagRoutes = tags.map((tag) => ({
    url: `${baseUrl}/blog/tag/${tag.tagSlug}`,
    lastModified: tag._updatedAt,
  }));

  return [...staticRoutes, ...postRoutes, ...tagRoutes];
}
