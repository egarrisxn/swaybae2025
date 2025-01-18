"use client";
import { useTweet } from "react-tweet";
import {
  TweetClientUI,
  TweetNotFound,
  TweetSkeleton,
} from "@/components/twitter/my-tweet-card";

export const TweetClient = ({
  id,
  apiUrl,
  fallback = <TweetSkeleton />,
  components,
  fetchOptions,
  onError,
  ...props
}) => {
  const { data, error, isLoading } = useTweet(id, apiUrl, fetchOptions);

  if (isLoading) return fallback;
  if (error || !data) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound error={onError ? onError(error) : error} />;
  }

  return <TweetClientUI tweet={data} components={components} {...props} />;
};

//! EXAMPLE
// import { TweetsClient } from "@/components/twitter/tweets-client";
// export default function Twitter() {
//   return (
//     <div className="flex w-full flex-col items-center justify-center gap-4 py-2 lg:flex-row lg:items-start lg:gap-3 lg:px-2 xl:gap-4">
//       <TweetsClient id="1845907938369511535" />
//       <TweetsClient id="1843019037678440841" />
//       <TweetsClient id="1837740206122061936" />
//     </div>
//   );
// }
