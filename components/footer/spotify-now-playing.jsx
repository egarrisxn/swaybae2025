"use client";
import { useEffect, useState } from "react";
import { getNowPlayingItem } from "@/lib/spotify/dataHandler";
import { SpotifyColored } from "@/components/icons";

export function SpotifyNowPlaying() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nowPlayingItem = await getNowPlayingItem();
        setResult(nowPlayingItem);
      } catch (error) {
        console.error("Error fetching now playing item:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <h3 className="flex-grow font-medium tracking-tight">Loading..</h3>
      ) : (
        <section className="flex max-w-[21.5rem] flex-col items-center sm:max-w-[31.5rem] lg:items-start">
          <div className="flex flex-row items-center gap-[1.5px]">
            <SpotifyColored
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
              className="size-[0.8em] pb-[1px] lg:size-[0.9em]"
            />
            <h3 className="tracking-tight">
              {result.isPlaying
                ? "Currently listening to:"
                : "Currently Offline"}
            </h3>
          </div>
          {result.isPlaying && (
            <a
              href={result.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center font-medium lg:items-start">
                <p className="0 max-w-[21.5rem] truncate tracking-tight transition-all duration-300 ease-out group-hover:text-green-500 sm:max-w-[31.5rem] lg:pl-0.5">
                  {`"${result.title}"`}
                </p>
                <p className="max-w-[21.5rem] truncate tracking-tight sm:max-w-[31.5rem] lg:pl-1">
                  <span className="font-normal">by</span> {result.artist}
                </p>
              </div>
            </a>
          )}
        </section>
      )}
    </>
  );
}
