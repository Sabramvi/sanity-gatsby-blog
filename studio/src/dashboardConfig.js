export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "633dce9628dff3007eb55f38",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-r3exo1sz",
                  apiId: "3fc36a60-1ac6-40cf-b992-fbccc50bb94e",
                },
                {
                  buildHookId: "633dce978f72b60077065aec",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-kw8df4fb",
                  apiId: "3bc1b847-dd34-4a23-89ef-665a9c3c7074",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Sabramvi/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-kw8df4fb.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
