import React, {FC} from "react";
import {useRouter} from "next/router";
import {Box, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton} from "@chakra-ui/react";
import {RouteLink} from "src/components/link";
import {useLinkColor} from "src/ui/theme";
interface Catalog {
    path: string;
    title: string;
}

interface Props {
    open: boolean;
    catalogs: Catalog[];
    close: () => void;
}

const CatalogDrawer: FC<Props> = (props) => {
    const {open, catalogs, close} = props;
    const router = useRouter();
    const path = router.asPath.slice(router.asPath.lastIndexOf("/") + 1);
    const activeColor = useLinkColor();
    return (
        <Drawer
            isOpen={open}
            placement="right"
            onClose={close}
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
                                    to={item.path}
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
    );
};

export default CatalogDrawer;
