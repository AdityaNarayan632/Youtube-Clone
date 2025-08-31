import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getVideoDetails } from "../store/reducer/getVideoDetails";
import { getRecommendedVideos } from "../store/reducer/getRecommendedVideos";

export default function Watch() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentPlaying = useSelector((state) => state.youtube.currentPlaying);
  const recommendedVideo = useSelector(
    (state) => state.youtube.recommendedVideo
  );

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) dispatch(getRecommendedVideos(id));
  }, [currentPlaying, dispatch, id]);

  return (
    <>
      {currentPlaying && currentPlaying?.videoId === id && (
        <div className="max-h-screen overflow-hidden">
          <div>
            <Navbar />
          </div>
          <div>
            <div>
              <div>
                <div>
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    frameBorder="0"
                    width="800"
                    height="502"
                    allowFullScreen
                    title="Youtube Player"
                    className="my-5 mx-5 rounded-2xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
