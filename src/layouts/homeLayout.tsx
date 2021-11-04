import React from "react";
import Header from "../components/header";
import {Box} from "@chakra-ui/react";

const Layout = ({children, frontMatter}: React.PropsWithChildren<{frontMatter: any}>) => {
    return (
        <Box pt="30px" pb="40px" m="0 auto" maxW="900px" minH="100vh">
            <Header />
            {children}
        </Box>
    );
};

export default Layout;
