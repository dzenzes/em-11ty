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

  eleventyConfig.addShortcode("readingTime", function (text) {
    let words = `${text}`.match(/\b[-?(\w+)?]+\b/gi).length;
    let timeInMinutes = words / 200;

    let output;
    if (timeInMinutes <= 0.5) {
      output = 1;
    } else {
      output = Math.round(timeInMinutes);
    }

    return output > 1
      ? `${output} Minuten Lesezeit.`
      : `${output} Minute Lesezeit.`;
  });

  return {
    dir: {
      input: "src",
    },
  };
};
