import {BLOG_DIR, TUTORIAL_DIR} from "../dir";
import classificationInfo, {ClassificationInfo} from "src/docs/blogs/classification.info";
import fs, {readdirSync} from "fs";
import path from "path";
import matter from "gray-matter";
import {serialize} from "next-mdx-remote/serialize";

/**
 * 获得博客分类信息
 */
export const fetchClassifications = () => {
    const clsKeys = Object.keys(classificationInfo);

    const classifications: ClassificationInfo[] = [];
    clsKeys.forEach((clsKey) => {
        const classification = classificationInfo[clsKey];
        const clsDir = path.resolve(BLOG_DIR, classification.name);
        const files = readdirSync(clsDir, {withFileTypes: true}).filter((dirent) => dirent.isFile());

        classifications.push({
            ...classification,
            files
        });
    });

    return classifications;
};

export const fetchBlog = async (path: string) => {
    const markdownWithMeta = fs.readFileSync(path, 'utf-8');
    const {data: frontMatter, content} = matter(markdownWithMeta);
    const mdxSource = await serialize(content);

    return {
        url: frontMatter.url as string,
        date: frontMatter.date as string,
        description: frontMatter.description as string,
        mdxSource
    };
};

// export const fetchBlogByUrlPaht = (clsPath: string, BlogPath: string) => {
//     const clsKeys = Object.keys(classificationInfo);
//     const clsKey = clsKeys.find((clsKey) => classificationInfo[clsKey].urlPath === clsPath);
//     if (clsKey) {
//         const blogPath = path.resolve(BLOG_DIR, clsKey, )
//     }
// }
