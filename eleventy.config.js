export default function (eleventyConfig) {
  // Statične datoteke se kopirajo nespremenjene
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });
  eleventyConfig.addPassthroughCopy({ "src/_headers": "_headers" });

  // Projekti (urejaš na /admin) – razvrščeni po polju »vrstni_red«
  eleventyConfig.addCollection("projekti", (api) =>
    api
      .getFilteredByGlob("src/content/projekti/*.md")
      .filter((p) => p.data.prikazano !== false)
      .sort((a, b) => (Number(a.data.vrstni_red) || 0) - (Number(b.data.vrstni_red) || 0))
  );

  eleventyConfig.addFilter("tel", (s) => String(s || "").replace(/[^\d+]/g, ""));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
