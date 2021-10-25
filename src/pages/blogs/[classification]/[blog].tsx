import React, {FC} from "react";
import {GetStaticPaths, GetStaticProps} from "next";
import {BLOG_DIR} from "src/service/dir";
import {fetchBlog, fetchClassifications} from "src/service/blogs";
import path from "path";
import fs from "fs";
import {MDXRemote} from "next-mdx-remote";

interface Props {
    // url: string;
    date: string;
    description: string;
    mdxSource: any;
}

const Blog: FC<Props> = (props) => {
    const {date, description, mdxSource} = props;

    return (
        <div>
            <MDXRemote {...mdxSource} />
        </div>
    );
};

const URL_PATH_FILE_NAME = "url2path.txt";
const URL_PATH_FILE_PATH = path.resolve(__dirname, URL_PATH_FILE_NAME);

export const getStaticProps: GetStaticProps = async (context) => {
    const clsUrl = context.params?.classification as string;
    const blogUrl = context.params?.blog as string;

    const url2PathContent = fs.readFileSync(URL_PATH_FILE_PATH, {
        encoding: "utf-8"
    });

    const url2pathStr = url2PathContent.split(";");
    const url2pathPair = new Map<string, string>();
    url2pathStr.forEach((item) => {
        const mapStr = item.split("|");
        url2pathPair.set(mapStr[0], mapStr[1]);
    })

    const blogPath = url2pathPair.get(`${clsUrl}/${blogUrl}`);

    if (blogPath) {
        const blog = await fetchBlog(blogPath);

        return {
            props: {
                // url: blog.url,
                date: blog.date,
                description: blog.description,
                mdxSource: blog.mdxSource
            }
        };
    }

    return {props: {}};

    // let article: Article = null;
    // let previousBlog = null;
    // let nextBlog = null;
    // let htmlContent = "";
    // try {
    //     article = await getArticleByUrlPath(blogPath);
    //     htmlContent = converter.makeHtml(article.content) as string;
    //     const adjoins = await getAdjoinArticle(article.id);
    //     if (adjoins) {
    //         previousBlog = adjoins.preArticle;
    //         nextBlog = adjoins.nextArticle;
    //     }
    // } catch (error) {
    //     console.log(error);
    // }

    // return {
    //     props: {article, previousBlog, nextBlog, htmlContent},
    //     revalidate: 120, // 每隔一分钟更新一次，使静态页面也会更新
    // }
};

export const getStaticPaths: GetStaticPaths = async () => {
    const classifications = fetchClassifications();

    const paths: {params: any}[] = [];

    for (let i = 0; i < classifications.length; i++) {
        const cls = classifications[i];
        for (let j = 0; j < cls.files.length; j++) {
            const blogPath = path.resolve(BLOG_DIR, cls.name, cls.files[j].name);
            const blog = await fetchBlog(blogPath);
            fs.writeFileSync(URL_PATH_FILE_PATH, `${cls.urlPath}/${blog.url}|${blogPath};`, {flag: "a"});
            paths.push({
                params: {
                    classification: cls.urlPath,
                    blog: blog.url
                }
            })
        }
    }

    return {
        fallback: false,
        paths: paths
    };
};

export default Blog;
