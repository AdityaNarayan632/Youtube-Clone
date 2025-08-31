import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Cards from "../components/Cards";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getHomePage } from "../store/reducer/getHomePage";
import Spinner from "../components/spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtube.videos);

  useEffect(() => {
    dispatch(getHomePage(false));
  }, [dispatch]);

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
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getHomePage(true))}
              hasMore={videos.length < 500}
              loader={
                <div className="flex justify-center items-center w-full py-4">
                  <Spinner />
                </div>
              }
              height={650}
              pullDownToRefresh={false}
            >
              <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
                {Array.from(new Map(videos.map(v => [v.videoId, v])).values()).map(item => (
                  <Cards data={item} key={item.videoId} />
                ))}
              </div>
            </InfiniteScroll>
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
