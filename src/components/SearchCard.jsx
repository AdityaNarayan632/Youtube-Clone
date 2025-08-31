import React from "react";
import { Link } from "react-router-dom";

export default function SearchCard({ data }) {
  return (
    <div className="flex gap-3 mb-6">
      <div className="relative gap-3">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 py-0.5 px-2 z-10">
          {data.videoDuration}
        </span>
        {/* Thumbnail Clickable */}
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="thumbnail"
            className="h-44 w-72 rounded-xl"
          />
        </Link>
      </div>

      <div className="flex gap-1 flex-col">
        {/* Title Clickable */}
        <h3 className="max-w-2xl">
          <Link
            to={`/watch/${data.videoId}`}
            className="line-clamp-2 hover:text-blue-400"
          >
            {data.videoTitle}
          </Link>
        </h3>

        <div className="text-xs text-gray-400">
          <div>
            <span>{data.videoViews} views</span>
            <span> • {data.videoAge}</span>
          </div>
        </div>

        <div className="min-w-fit my-2">
          <a href="#" className="flex items-center gap-2 text-xs text-gray-400">
            <img
              src={data.channelInfo.image}
              alt="channel"
              className="h-9 w-9 rounded-full"
            />
            <span>{data.channelInfo.name}</span>
          </a>
        </div>

        <div className="max-w-2xl line-clamp-2 text-sm text-gray-400">
          <p>{data.videoDescription}</p>
        </div>
      </div>
    </div>
  );
}
