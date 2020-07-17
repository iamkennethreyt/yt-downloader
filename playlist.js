const fs = require("fs");
const PlaylistSummary = require("youtube-playlist-summary");
const config = {
  GOOGLE_API_KEY: "AIzaSyAm_eTtdCzlMq0ymf0I-4IFtCy1gsj8PQs", // require
  PLAYLIST_ITEM_KEY: ["title", "videoUrl"], // option
};

const ps = new PlaylistSummary(config);
const PLAY_LIST_ID = "PLEiEAq2VkUUJS6zkGgXeWw9l32EwRoYdR";

//get the item playlist
ps.getPlaylistItems(PLAY_LIST_ID)
  .then((result) => {
    const { items } = result;
    fs.writeFile(`playlist.json`, JSON.stringify(items, null, 4), function (
      err
    ) {
      if (err) throw err;
      console.log("Saved!");
    });
  })
  .catch((error) => {
    console.error(error);
  });
