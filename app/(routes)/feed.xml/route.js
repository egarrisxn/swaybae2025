import RSS from "rss";
import { rssData } from "@/lib/sanity/rss";

export async function GET() {
  const feed = new RSS({
    title: "Sway Bae 2025",
    description: "The official site for Sway Bae & The Bae Squad!",
    feed_url: "https://www.swaybae.net/feed.xml",
    site_url: "https://www.swaybae.net",
    managingEditor: "sway.bae9000@gmail.com (Sway)",
    webMaster: "egarrisxn@gmail.com (Ethan)",
    copyright: `Copyright ${new Date().getFullYear().toString()}, Sway Bae`,
    language: "en-US",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  const allPosts = await rssData();
  const posts = allPosts.data;

  // console.log("Value of allPosts:", allPosts);

  if (posts && Array.isArray(posts)) {
    posts.map((post) => {
      feed.item({
        title: post.title,
        description: post.excerpt,
        url: `https://www.swaybae.net/blog/post/${post.postSlug}`,
        author: "Sway Bae",
        date: post.publishedAt,
        enclosure: post.coverImage ? { url: post.coverImage } : undefined,
        categories: post.tags ? post.tags.map((tag) => tag.title) : undefined,
      });
    });
  } else {
    console.error("allPosts is not an array in feed.xml route");
    if (allPosts) {
      console.log("Type of allPosts:", typeof allPosts);
      console.log("Stringified allPosts:", JSON.stringify(allPosts, null, 2));
    }
  }
  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
