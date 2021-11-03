import React, {useState} from "react";
import Header from "../components/header";
import {Box, Stack, Text, HStack} from "@chakra-ui/react";
import {H1} from "src/components/primitives/typography";
import {HamburgerIcon} from "@chakra-ui/icons";
import CatalogDrawer from "src/components/catalogDrawer";
import {useLinkColor} from "src/ui/theme";

const Layout = ({children, frontMatter}: React.PropsWithChildren<{frontMatter: any}>) => {
    const [catalogOpen, setCatalogOpen] = useState<boolean>(false);

    const openCatalog = () => {
        setCatalogOpen(true);
    };

    return (
        <>
            <Header />
            <HStack>
                <HamburgerIcon onClick={openCatalog} h="25" w="25" cursor="pointer" _hover={{color: useLinkColor()}} />
            </HStack>
            <H1>{frontMatter.title}</H1>
            {children}
            <CatalogDrawer open={catalogOpen} close={() => setCatalogOpen(false)} catalogs={frontMatter.allPosts} />
        </>
    );
};

export default Layout;
