import React from "react";
import Header from "../components/header";
import {H1} from "src/components/primitives/typography";
import CatalogNav from "src/components/catalogNav";

const Layout = ({children, frontMatter}: React.PropsWithChildren<{frontMatter: any}>) => {
    return (
        <>
            <Header />
            <CatalogNav catalogs={frontMatter.allPosts} />
            <H1>{frontMatter.title}</H1>
            {children}
        </>
    );
};

export default Layout;
