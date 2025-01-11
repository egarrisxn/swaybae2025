"use client";
import { useEffect, useState } from "react";
import { getNowPlayingItem } from "@/lib/spotify/dataHandler";
import { SpotifyColored } from "@/components/icons/spotify-colored";

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
        <h3 className="tracking-tightest flex-grow font-medium">Loading..</h3>
      ) : (
        <section className="flex max-w-[21rem] items-center gap-0.5 sm:max-w-[30rem]">
          <div className="flex flex-row items-center gap-0.5">
            <SpotifyColored width={16} height={16} />
            <h3 className="tracking-tightest font-medium">
              {result.isPlaying ? "" : "Currently offline"}
            </h3>
          </div>
          {result.isPlaying && (
            <a href={result.songUrl} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center">
                <p className="tracking-tightest max-w-24 truncate sm:max-w-36">
                  {result.artist}
                </p>
                <span className="pl-0.5 pr-1">:</span>
                <p className="tracking-tightest max-w-48 truncate sm:max-w-52">
                  {result.title}
                </p>
              </div>
            </a>
          )}
        </section>
      )}
    </>
  );
}
