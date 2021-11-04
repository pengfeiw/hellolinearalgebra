import React, {FC} from "react";
import {Box} from "@chakra-ui/react";
import ChaptersLayout from "./chaptersLayout";
import HomeLayout from "./homeLayout";

type LayoutsName = "chaptersLayout" | "homeLayout";

const layouts:{[key in LayoutsName]: any} = {
    chaptersLayout: ChaptersLayout,
    homeLayout: HomeLayout
};

const getLayout = ({layout, path}: {layout: LayoutsName; path: string}) => {
    if (layout in Object.keys(layouts)) {
        return layouts[layout];
    }
    if (path.startsWith("/chapters")) {
        return ChaptersLayout;
    }
    return HomeLayout;
};

const Layout = ({children, frontMatter}: React.PropsWithChildren<{frontMatter: any}>) => {
    const SubLayout = getLayout(frontMatter);

    return (
        <Box pt="30px" p="40px 10px" m="0 auto" maxW="900px" minH="100vh">
            <SubLayout frontMatter={frontMatter}>
                {children}
            </SubLayout>
        </Box>
    );
};

export default Layout;
