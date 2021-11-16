const {SitemapStream, XMLToSitemapItemStream} = require("sitemap");
const nodeFs = require("fs");
const path = require("path");

/**
 * generate sitemap.xml
 */
const createSitemap = () => {
    const sitemap = new SitemapStream({hostname: "https://pengfeiw.github.io"});
    const writeStream = nodeFs.createWriteStream(path.join(__dirname, "./public/sitemap.xml"));
    sitemap.pipe(writeStream);

    // home
    sitemap.write({url: "/", changefreq: "monthly", priority: 1});
    // hellolinearalgebra home
    sitemap.write({url: "/hellolinearalgebra", changefreq: "monthly", priority: 0.9});

    const postsDir = path.join(__dirname, "./src/pages/chapters");
    const files = nodeFs.readdirSync(postsDir);

    for (let i = 0; i < files.length; i++) {
        // chapters
        sitemap.write({url: `/hellolinearalgebra/${files[i].slice(0, files[i].lastIndexOf("."))}`, changefreq: "weekly", priority: 0.8});
    }

    sitemap.end();
};

module.exports = {createSitemap};
