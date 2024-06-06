import fs from "fs";
import { globby } from "globby";

(async () => {
  const pages = await globby([
    "app/**/*{.js,.jsx,.ts,.tsx}",
    "!app/_*.js",
    "!app/api",
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        const route = page
          .replace("pages", "")
          .replace(".js", "")
          .replace(".jsx", "")
          .replace(".ts", "")
          .replace(".tsx", "");

        return `
          <url>
            <loc>${`https://codencreativity-o4ek.vercel.app${route}`}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        `;
      })
      .join("")}
  </urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
})();
