const readingTime = require("reading-time")
const withMdxEnhanced = require("next-mdx-enhanced");
const nodePath = require("path");
const nodeFs = require("fs");
const yaml = require("js-yaml");
const withPlugins = require("next-compose-plugins")

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

const getAllPosts = () => {
    const postsDir = nodePath.resolve(__dirname, "src/pages/chapters");
    const files = nodeFs.readdirSync(postsDir);
    const posts = [];
    for (let i = 0; i < files.length; i++) {
        const frontMatter = yaml.loadAll(nodeFs.readFileSync(nodePath.resolve(postsDir, files[i])))[0];
        posts.push({
            path: files[i].slice(0, files[i].lastIndexOf(".")),
            title: frontMatter.title
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
                
                const res = {
                    path,
                    readingTime: readingTime(mdxContent),
                    allPosts: getAllPosts(),
                    ...frontMatter
                }
                return res;
            }
        }
    })
], nextConfig);
