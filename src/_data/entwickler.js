const Parser = require("rss-parser");

module.exports = async function () {
  let parser = new Parser();
  const rssFeed = await parser.parseURL("https://entwickler.de/feed");

  if (rssFeed) {
    return rssFeed.items;
  } else {
    return [];
  }
};
