import React from "react";
import Header from "../components/header";
import {Box, Text} from "@chakra-ui/react";
import {H1} from "src/components/primitives/typography";
import {RouteLink} from "src/components/link";
import {useLinkColor} from "src/ui/theme";
import {useRouter} from "next/router";
import {Frontmatter} from "src/components/types";
import {NextSeo} from "next-seo";

const Layout = ({children, frontMatter}: React.PropsWithChildren<{frontMatter: Frontmatter}>) => {
    const linkColor = useLinkColor();
    const router = useRouter();
    const prePath = router.asPath[router.asPath.length - 1] === "/" ? 
        router.asPath.slice(0, router.asPath.length - 1) : router.asPath;

    console.log(router.asPath);
    console.log(prePath);

    return (
        <>
            <NextSeo
                title={frontMatter.title}
                titleTemplate="%s"
            />
            <Box>
                <Header />
                <H1>{frontMatter.title}</H1>
                <Text mb="15px">
                    这是一本关于入门计算机图形学的线性代数基础教程。主要介绍向量、行列式和矩阵的几何意义，如果你对图形学感兴趣，却缺乏一些数学知识，
                    又没有时间去学习其他复杂的线性代数中繁杂的计算，那么你来对地方了，这本书应该非常适合你，本教程包含以下章节内容。
                </Text>
                {
                    frontMatter.allPosts.map((post: {path: string; title: string;}) => (
                        <Box key={post.path} mt="10px">
                            <RouteLink to={`${prePath}/chapters/${post.path}`} color={linkColor}>
                                {post.title}
                            </RouteLink>
                        </Box>
                    ))
                }
                {children}
            </Box>
        </>
    );
};

export default Layout;
