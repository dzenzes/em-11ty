module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("toIsoString", function (date) {
    return date.toISOString();
  });

  eleventyConfig.addFilter("toReadableDate", function (date) {
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    let year = date.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return `${day}.${month}.${year}`;
  });
  return {
    dir: {
      input: "src",
    },
  };
};
