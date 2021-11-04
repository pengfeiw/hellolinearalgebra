import React, {FC, useState} from "react";
import {useRouter} from "next/router";
import {
    useColorMode,
    Box,
    HStack,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
} from "@chakra-ui/react";
import {RouteLink} from "src/components/link";
import {useLinkColor} from "src/ui/theme";
import {HamburgerIcon} from "@chakra-ui/icons";

interface Catalog {
    path: string;
    title: string;
}

interface Props {
    catalogs: Catalog[];
}

const CatalogNav: FC<Props> = (props) => {
    const {catalogs} = props;
    const router = useRouter();
    const path = router.asPath.slice(router.asPath.lastIndexOf("/") + 1);
    const activeColor = useLinkColor();
    const {colorMode} = useColorMode();
    const [catalogOpen, setCatalogOpen] = useState<boolean>(false);
    const openCatalog = () => {
        setCatalogOpen(true);
    };

    const currentIndex = catalogs.findIndex((item) => item.path === path);
    return (
        <>
            <HStack position="sticky" top="0" bg={colorMode === "light" ? "white" : "var(--chakra-colors-gray-800)"}>
                <HamburgerIcon onClick={openCatalog} h="25" w="25" cursor="pointer" _hover={{color: useLinkColor()}} />
                <HStack justifyContent="space-between" flexGrow={2}>
                    {
                        currentIndex > 0 ? <RouteLink to={`${process.env.NEXT_PUBLIC_BASE_URL}chapters/${catalogs[currentIndex - 1].path}`}>上一节</RouteLink> : <></>
                    }
                    {
                        currentIndex < catalogs.length - 1 ? <RouteLink to={`${process.env.NEXT_PUBLIC_BASE_URL}chapters/${catalogs[currentIndex + 1].path}`}>下一节</RouteLink> : <></>
                    }
                </HStack>
            </HStack>
            <Drawer
                isOpen={catalogOpen}
                placement="right"
                onClose={() => setCatalogOpen(false)}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>目录</DrawerHeader>
                    <DrawerBody>
                        {
                            catalogs.map((item) => (
                                <Box key={item.path} mb="10px">
                                    <RouteLink
                                        to={`${process.env.NEXT_PUBLIC_BASE_URL}chapters/${item.path}`}
                                        color={path === item.path ? activeColor : ""}
                                    >
                                        {item.title}
                                    </RouteLink>
                                </Box>
                            ))
                        }
                    </DrawerBody>
                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default CatalogNav;
