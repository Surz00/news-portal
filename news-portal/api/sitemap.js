import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "yer1iozn",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export default async function handler(req, res) {
  try {
    const baseUrl = "https://news-portal-three-blue.vercel.app";

    // Fetch all posts
    const posts = await client.fetch(`
      *[_type=="post" && defined(slug.current)]{
        "slug": slug.current,
        publishedAt
      }
    `);

    // Fetch all categories
    const categories = await client.fetch(`
      *[_type=="category" && defined(slug.current)]{
        "slug": slug.current
      }
    `);

    const urls = [];

    // Homepage
    urls.push(`
      <url>
        <loc>${baseUrl}/</loc>
        <changefreq>hourly</changefreq>
        <priority>1.0</priority>
      </url>
    `);

    // Category pages
    categories.forEach((cat) => {
      urls.push(`
        <url>
          <loc>${baseUrl}/category/${cat.slug}</loc>
          <changefreq>hourly</changefreq>
          <priority>0.9</priority>
        </url>
      `);
    });

    // News pages
    posts.forEach((post) => {
      urls.push(`
        <url>
          <loc>${baseUrl}/news/${post.slug}</loc>
          <lastmod>${new Date(post.publishedAt).toISOString()}</lastmod>
          <changefreq>hourly</changefreq>
          <priority>0.8</priority>
        </url>
      `);
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls.join("")}
      </urlset>
    `;

    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(sitemap);
  } catch (err) {
    res.status(500).send("Error generating sitemap");
  }
}
