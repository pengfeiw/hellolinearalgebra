import React, {FC} from "react";
import Header from "../components/header";
import {Box, Heading} from "@chakra-ui/react";


const Layout = ({children, frontMatter}: React.PropsWithChildren<{frontMatter: any}>) => {
    console.log("frontMatter", frontMatter);
    return (
        <Box pt="30px" pb="40px" m="0 auto" maxW="900px" minH="100vh">
            <Header />
            <Heading as="h1">{frontMatter.title}</Heading>
            {children}
        </Box>
    );
};

export default Layout;
