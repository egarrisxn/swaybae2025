import { client } from "./client";
import { postRssQuery } from "./queries";

export async function rssData() {
  try {
    const posts = await client.fetch(postRssQuery);
    return { data: posts };
  } catch (error) {
    console.error("Error fetching RSS feed data:", error);
    return { data: [] };
  }
}
