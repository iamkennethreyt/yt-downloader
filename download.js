const fs = require("fs");
const ytdl = require("ytdl-core");
const playlist = require("./playlist.json");

const length = playlist.length;

playlist.forEach((pl, i) => {
  const { videoUrl, title } = pl;
  const vtitle = title.replace(/\||:|\*|\/|\?/gi, "");
  const item = i + 1;

  ytdl(pl.videoUrl, {
    format: "mp4",
  }).pipe(fs.createWriteStream(`${vtitle}.mp4`));
  console.log(`${item}/${length} - ${title} downloaded successfully`);
});
