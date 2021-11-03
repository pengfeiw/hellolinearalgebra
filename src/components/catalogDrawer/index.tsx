import React, {FC} from "react";
import {Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton} from "@chakra-ui/react";

interface Props {
    open: boolean;
    catalogs: string[];
    close: () => void;
}

const CatalogDrawer: FC<Props> = (props) => {
    const {open, catalogs, close} = props;

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
                </DrawerBody>
                <DrawerFooter>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default CatalogDrawer;
