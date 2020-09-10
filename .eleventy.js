module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "dist/*.css": "/" });
  eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });
};
