import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Cards from "../components/Cards";
import { useAppDispatch } from "../hooks/useApp";
import { getHomePage } from "../store/reducer/getHomePage";
import Spinner from "../components/spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSearch } from "../store/reducer/getSearch";
import { clearVideos } from "../features/youtube/youtubeSlices";
import SearchCard from "../components/SearchCard";

const Home = () => {
  const Navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useSelector((state) => state.youtube.videos);
  const searchTerm = useSelector((state) => state.youtube.searchTerm);

  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm === " ") Navigate("/");
    else dispatch(getSearch(false));
  }, [dispatch, Navigate, searchTerm]);

  // useEffect(() => {
  //   console.log(videos);
  // }, [videos]);

  return (
    <div className="max-h-screen overflow-auto">
      {/* Navbar */}
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>

      {/* Sidebar + Content */}
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />

        {/* Content Area */}
        <div className="flex-1 p-4">
          {videos.length ? (
            <div className="py-8 pl-8 flex-col gap-5 w-full">
              <InfiniteScroll
                dataLength={videos.length}
                next={() => dispatch(getSearch(true))}
                hasMore={videos.length < 500}
                loader={
                  <div className="flex justify-center items-center w-full py-4">
                    <Spinner />
                  </div>
                }
                height={650}
                pullDownToRefresh={false}
              >
                <div className="my-5">
                  {videos.map((item) => (
                    <SearchCard data={item} key={item.videoId} />
                  ))}
                </div>
              </InfiniteScroll>
            </div>
          ) : (
            <div className="flex justify-center items-center w-full h-full">
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
