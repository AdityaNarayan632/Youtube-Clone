import axios from "axios";
import { parsedVideoDuration } from "./parsedVideoDuration";
import { convertRawToString } from "./convertRawToStrings";
import { timeSince } from "./timeSince";

const API_KEY = import.meta.env.VITE_REACT_API_KEY;

const parsedData = async (items) => {
  try {
    if (!items) {
      console.warn("❌ parsedData received empty items");
      return [];
    }

    // ✅ Ensure items is always an array
    if (!Array.isArray(items)) {
      console.warn(
        "⚠️ parsedData received a single object, wrapping into array"
      );
      items = [items];
    }

    const videoIds = [];
    const channelIds = [];

    items.forEach((item) => {
      if (item?.snippet?.channelId) channelIds.push(item.snippet.channelId);

      // videoId can come differently depending on API (search vs videos)
      if (typeof item.id === "object" && item.id?.videoId) {
        videoIds.push(item.id.videoId);
      } else if (typeof item.id === "string") {
        videoIds.push(item.id);
      }
    });

    // fetch channel info
    const {
      data: { items: channelsData = [] },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds.join(
        ","
      )}&key=${API_KEY}`
    );

    const parsedChannelsData = channelsData.map((channel) => ({
      id: channel.id,
      image: channel.snippet.thumbnails.default.url,
    }));

    // fetch video stats/details
    const {
      data: { items: videosData = [] },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(
        ","
      )}&key=${API_KEY}`
    );

    const parseData = items.map((item, index) => {
      const channel = parsedChannelsData.find(
        (c) => c.id === item.snippet.channelId
      );

      const videoId = typeof item.id === "object" ? item.id.videoId : item.id;

      return {
        videoId,
        videoTitle: item.snippet?.title || "",
        videoDescription: item.snippet?.description || "",
        videoThumbnail: item.snippet?.thumbnails?.medium?.url || "",
        videoLink: `https://www.youtube.com/watch?v=${videoId}`,
        videoDuration: parsedVideoDuration(
          videosData[index]?.contentDetails?.duration
        ),
        videoViews: convertRawToString(
          videosData[index]?.statistics?.viewCount
        ),
        videoAge: timeSince(new Date(item.snippet?.publishedAt)),
        channelInfo: {
          id: item.snippet?.channelId,
          image: channel?.image || "",
          name: item.snippet?.channelTitle || "",
        },
      };
    });

    return parseData;
  } catch (err) {
    console.error("❌ Error in parsedData:", err);
    return [];
  }
};

export default parsedData;
