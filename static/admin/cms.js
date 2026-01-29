CMS.registerEventListener({
  name: "preSave",
  handler: ({ entry }) => {
    // The 'slug' property here refers to the auto-generated filename slug
    const generatedSlug = entry.get("slug");

    // 'data' refers to the front matter fields
    // We set the 'slug' field in the front matter to the generated filename slug
    return entry.get("data").set("slug", generatedSlug);
  },
});
