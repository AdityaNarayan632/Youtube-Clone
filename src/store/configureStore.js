// store.js
import { configureStore } from "@reduxjs/toolkit";
import youtube from "../features/youtube/youtubeSlices"; // ✅ keep filename singular

const store = configureStore({
  reducer: {
    youtube: youtube, // ✅ matches slice name & makes selectors simpler
  },
});

export default store;
