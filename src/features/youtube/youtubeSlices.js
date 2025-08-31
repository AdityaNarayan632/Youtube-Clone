// src/features/youtube/youtubeSlices.js
import { createSlice } from "@reduxjs/toolkit";
import { getHomePage } from "../../store/reducer/getHomePage";
import { getSearch } from "../../store/reducer/getSearch";
import { getRecommendedVideos } from "../../store/reducer/getRecommendedVideos";
import { getVideoDetails } from "../../store/reducer/getVideoDetails";

const initialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideo: [],
};

const youtubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = [];
      state.nextPageToken = null;
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePage.fulfilled, (state, action) => {
      if (action.payload && action.payload.parsedData) {
        state.videos = action.payload.parsedData;
        state.nextPageToken = action.payload.nextPageToken;
      }
    });
    builder.addCase(getSearch.fulfilled, (state, action) => {
      if (action.payload && action.payload.parsedData) {
        state.videos = action.payload.parsedData;
        state.nextPageToken = action.payload.nextPageToken;
      }
    });
    builder.addCase(getRecommendedVideos.fulfilled, (state, action) => {
      if (action.payload && action.payload.parsedData) {
        state.recommendedVideo = action.payload.parsedData;
      }
    });
    builder.addCase(getVideoDetails.fulfilled, (state, action) => {
      if (action.payload) {
        state.currentPlaying = action.payload;
      }
    });
  },
});

export const { clearVideos, changeSearchTerm, clearSearchTerm } =
  youtubeSlice.actions;
export default youtubeSlice.reducer;
