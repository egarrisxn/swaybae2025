import "server-only";
import * as queryStore from "@sanity/react-loader";
import { client } from "./client";
import { token } from "./token";
import {
  singlePostQuery,
  allPostsQuery,
  singleTagQuery,
  allTagsQuery,
} from "./queries";

const serverClient = client.withConfig({
  token,
});

// Sets the server client for the query store, ensuring all
// data fetching in production happens on the server, not the client.
queryStore.setServerClient(serverClient);

const usingCdn = serverClient.config().useCdn;

export const loadQuery = async (query, params = {}, options = {}) => {
  // Don't cache by default
  let revalidate = 0;
  // If `next.tags` is set and we're not using the CDN, then it's safe to cache
  if (!usingCdn && Array.isArray(options.next?.tags)) {
    revalidate = false;
  } else if (usingCdn) {
    revalidate = 60;
  }

  return queryStore.loadQuery(query, params, {
    ...options,
    next: {
      revalidate,
      ...(options.next || {}),
    },
  });
};

// Loaders used in multiple places
export async function loadBlog() {
  return loadQuery(
    allPostsQuery,
    allTagsQuery,
    {},
    { next: { tags: ["post", "tag"] } }
  );
}

export async function loadPosts() {
  return loadQuery(allPostsQuery, {}, { next: { tags: ["post"] } });
}

export async function loadPost(slug) {
  return loadQuery(
    singlePostQuery,
    { slug },
    { next: { tags: [`post:${slug}`] } }
  );
}

export async function loadTag(slug) {
  return loadQuery(
    singleTagQuery,
    { slug },
    { next: { tags: [`tag:${slug}`] } }
  );
}
