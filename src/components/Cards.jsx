import React from "react";
import { Link } from "react-router-dom";

function Cards({ data }) {
  return (
    <div className="flex w-72 h-60 flex-col ">
      <div className="relative">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 py-0.5 px-2 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="thumbnail"
            className="h-44 w-72 rounded-xl"
          />
        </Link>
      </div>
      <div className="flex gap-2 py-2">
        <div className="min-w-fit">
          <a href="#">
            <img
              src={data.channelInfo.image}
              alt="channle image"
              className="h-9 w-9 rounded-full"
            />
          </a>
        </div>
        <div>
          <h3>
            <a href="#" className="line-clamp-2">
              {data.videoTitle}
            </a>
          </h3>
          <div className="text-sm text-gray-400">
            <div>
              <a href="#" className="hover:text-white">
                {data.channelInfo.name}
              </a>
            </div>
            <div>
              <span>{data.videoViews} views</span>
              <span>• {data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
