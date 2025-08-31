import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import parsedData from "../../utils/parsedData";

const API_KEY = import.meta.env.VITE_REACT_API_KEY;

export const getHomePage = createAsyncThunk(
  "youtube/App/HomePageVideos",
  async (isNext, { getState }) => {
    const {
      youtube: { nextPageToken: nextPageTokenFromState, videos },
    } = getState();

    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${encodeURIComponent(
        "drop x out"
      )}&type=video&key=${API_KEY}${
        isNext ? `&pageToken=${nextPageTokenFromState}` : ""
      }`
    );

    const items = response.data.items;
    const newVideos = await parsedData(items);

    const merged = [...videos, ...newVideos].filter(
      (v, i, arr) => arr.findIndex((item) => item.videoId === v.videoId) === i
    );

    return {
      parsedData: merged,
      nextPageToken: response.data.nextPageToken,
    };
  }
);
