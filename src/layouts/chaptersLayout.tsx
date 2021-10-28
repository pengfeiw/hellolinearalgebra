import React, {FC} from "react";
import Header from "../components/header";
import {Box, Heading} from "@chakra-ui/react";
import {H1} from "src/components/primitives/typography";

const Layout = ({children, frontMatter}: React.PropsWithChildren<{frontMatter: any}>) => {
    console.log("frontMatter", frontMatter);
    return (
        <>
            <Header />
            <H1>{frontMatter.title}</H1>
            {children}
        </>
    );
};

export default Layout;
