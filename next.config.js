const readingTime = require('reading-time')
const withMdxEnhanced = require('next-mdx-enhanced');
const nodePath = require('path')
const withPlugins = require('next-compose-plugins')

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
const nextConfig = {
    webpack5: process.env.NODE_ENV === "development",
    pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"]
}

module.exports = withPlugins([
    withMdxEnhanced({
        layoutPath: 'src/layouts',
        defaultLayout: true,
        fileExtensions: ['mdx'],
        extendFrontMatter: {
            process: (mdxContent, frontMatter) => {
                const pagesDir = nodePath.resolve(__dirname, 'src/pages')
                const path = ('/' + frontMatter.__resourcePath)
                    .replace(pagesDir, '')
                    .replace('.mdx', '')
                    .replace('.tsx', '')
                    .replace(/^\/index$/, '/')
                    .replace(/\/index$/, '')
                return {
                    path,
                    readingTime: readingTime(mdxContent),
                    ...frontMatter
                }
            }
        }
    })
], nextConfig);
