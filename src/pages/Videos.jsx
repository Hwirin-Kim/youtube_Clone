import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import FakeYoutube from "../api/fakeYoutubeClient";
import Youtube, { search } from "../api/youtube";
import VideoCard from "../component/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    return youtube.search(keyword);
  });

  return (
    <>
      <div>Videos : {keyword ? keyword : "🔥"}</div>
      {isLoading && <p>is Loading...</p>}
      {error && <p>something is wrong..</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-4">
          {videos.map((video) => {
            return <VideoCard key={video.id} video={video} />;
          })}
        </ul>
      )}
    </>
  );
}
