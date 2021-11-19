import React from "react";
import Header from "src/components/header";
import {H1} from "src/components/primitives/typography";
import CatalogNav from "src/components/catalogNav";
import {Frontmatter} from "src/components/types";
import {NextSeo} from "next-seo";

const Layout = ({children, frontMatter}: React.PropsWithChildren<{frontMatter: Frontmatter}>) => {
    return (
        <>
            <NextSeo
                title={frontMatter.title}
                description={frontMatter.description}
                canonical={`htts://pengfeiw.github.io/hellolinearalgebra/chapters/${frontMatter.path}`}
                openGraph={{
                    type: "article",
                    url: `htts://pengfeiw.github.io/hellolinearalgebra/chapters/${frontMatter.path}`,
                    title: frontMatter.title,
                    description: frontMatter.description,
                    article: {
                        publishedTime: frontMatter.publishTime,
                        authors: ["https://www.pengfeixc.com/about"],
                        tags: frontMatter.keywords
                    }
                }}
                additionalMetaTags={[
                    {property: "author", content: "王鹏飞"},
                    {property: "keywords", content: frontMatter.keywords.join(",")},
                ]}
            />
            <Header />
            <CatalogNav catalogs={frontMatter.allPosts.filter((post) => !post.hide)} />
            <H1>{frontMatter.title}</H1>
            {children}
        </>
    );
};

export default Layout;
