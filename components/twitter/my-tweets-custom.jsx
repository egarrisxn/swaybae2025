import { Suspense } from "react";
import {
  TweetCard,
  TweetNotFound,
  TweetSkeleton,
} from "@/components/twitter/my-tweet-card";
import { unstable_cache } from "next/cache";
import { getTweet as _getTweet } from "react-tweet/api";

// Cache the `getTweet` function for performance
const getTweet = unstable_cache(async (id) => _getTweet(id), ["tweet"], {
  revalidate: 3600 * 24,
});

// Component for fetching and rendering a single tweet
const TweetItem = async ({ id }) => {
  try {
    const tweet = await getTweet(id);
    return tweet ? (
      <TweetCard tweet={tweet} />
    ) : (
      <TweetNotFound error="Not found" />
    );
  } catch (error) {
    console.error(`Error fetching tweet with ID ${id}:`, error);
    return <TweetNotFound error={error} />;
  }
};

// Component for rendering an array of tweets
const TweetArray = () => {
  const tweetIds = [
    "1845907938369511535",
    "1843019037678440841",
    "1837740206122061936",
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 py-2 lg:flex-row lg:items-start lg:gap-3 lg:px-2 xl:gap-4">
      {tweetIds.map((id) => (
        <Suspense key={id} fallback={<TweetSkeleton />}>
          {/* @ts-ignore Async components */}
          <TweetItem id={id} />
        </Suspense>
      ))}
    </div>
  );
};

export default function MyCustomTweets() {
  return <TweetArray />;
}
