const readingTime = require("reading-time")
const withMdxEnhanced = require("next-mdx-enhanced");
const nodePath = require("path");
const nodeFs = require("fs");
const yaml = require("gray-matter");
const withPlugins = require("next-compose-plugins")
const withTM = require("next-transpile-modules")(["three"]);
const {createSitemap} = require("./sitemap");

const IsDevelopment = process.env.NODE_ENV === "development";
const nextConfig = {
    webpack5: !IsDevelopment,
    pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"],
    assetPrefix: IsDevelopment ? "" : "/hellolinearalgebra",
    // webpack: (config) => {
    //     config.output.publicPath = IsDevelopment ? "/" : "/hellolinearalgebra";
    //     return config;
    // }
}

createSitemap();

const getAllPosts = () => {
    const postsDir = nodePath.resolve(__dirname, "src/pages/chapters");
    const files = nodeFs.readdirSync(postsDir);
    const posts = [];
    for (let i = 0; i < files.length; i++) {
        const file = nodeFs.readFileSync(nodePath.resolve(postsDir, files[i]), "utf-8");
        const frontMatter = yaml(file);
        posts.push({
            path: files[i].slice(0, files[i].lastIndexOf(".")),
            title: frontMatter.data.title,
            hide: frontMatter.data.hide ? true : false
        });
        posts.sort((post1, post2) => {
            const post1Index = post1.path.slice(0, post1.path.indexOf("-"));
            const post2Index = post2.path.slice(0, post2.path.indexOf("-"));

            return parseInt(post1Index) - parseInt(post2Index);
        })
    }
    return posts;
};

module.exports = withPlugins([
    withTM,
    withMdxEnhanced({
        layoutPath: "src/layouts",
        defaultLayout: true,
        fileExtensions: ["mdx", "md"],
        remarkPlugins: [
            require("remark-slug"),
        ],
        rehypePlugins: [require("mdx-prism")],
        extendFrontMatter: {
            process: (mdxContent, frontMatter) => {
                const pagesDir = nodePath.resolve(__dirname, "src/pages")
                const path = ("/" + frontMatter.__resourcePath)
                    .replace(pagesDir, "")
                    .replace(/\.mdx?/, "")
                    .replace(".tsx", "")
                    .replace(/^\/index$/, "/")
                    .replace(/\/index$/, "");
                const keywords = frontMatter.keywords?.split(",") || [];
                const res = {
                    ...frontMatter,
                    keywords,
                    path,
                    readingTime: readingTime(mdxContent),
                    allPosts: getAllPosts(),
                };
                return res;
            }
        }
    })
], nextConfig);
