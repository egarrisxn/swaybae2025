import { Suspense } from "react";
import { TweetNotFound, TweetSkeleton } from "react-tweet";
import { TweetServerUI } from "./tweet-server-ui";
import { unstable_cache } from "next/cache";
import { getTweet as _getTweet } from "react-tweet/api";

// Cache the `getTweet` function for performance
const getTweet = unstable_cache(async (id) => _getTweet(id), ["tweet"], {
  revalidate: 3600 * 24,
});

const TweetContent = async ({ id, components, onError }) => {
  const tweet = id
    ? await getTweet(id).catch((err) => {
        if (onError) {
          onError(err);
        } else {
          console.error(err);
        }
      })
    : undefined;

  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound />;
  }

  return <TweetServerUI tweet={tweet} components={components} />;
};

export const TweetsServer = ({ fallback = <TweetSkeleton />, ...props }) => (
  <Suspense fallback={fallback}>
    {/* @ts-ignore: Async components are valid in the app directory */}
    <TweetContent {...props} />
  </Suspense>
);

//! EXAMPLE
// import { TweetsServer } from "@/components/twitter/tweets-server";
// export default function Twitter() {
//   return (
//     <div className="flex w-full flex-col items-center justify-center gap-4 py-2 lg:flex-row lg:items-start lg:gap-3 lg:px-2 xl:gap-4">
//       <TweetsServer id="1845907938369511535" />
//       <TweetsServer id="1843019037678440841" />
//       <TweetsServer id="1837740206122061936" />
//     </div>
//   );
// }
