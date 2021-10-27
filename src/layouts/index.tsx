import React, {FC} from "react";
import Header from "../components/header";
import {H1} from "src/components/primitives/typography";
import {Box} from "@chakra-ui/react";

const Layout = ({children, frontMatter}: React.PropsWithChildren<{frontMatter: any}>) => {
    console.log("frontMatter", frontMatter);
    return (
        <Box pt="30px" pb="40px" m="0 auto" maxW="900px" minH="100vh">
            <Header />
            <H1>{frontMatter.title}</H1>
            {children}
        </Box>
    );
};

export default Layout;
