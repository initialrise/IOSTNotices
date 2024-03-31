const fs = require("fs");
const scrapNotices = require("./scrap");
const noticesPath = `${__dirname}/../notices.json`;
scrapNotices().then((notices) => {
  fs.writeFile(noticesPath, notices, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
