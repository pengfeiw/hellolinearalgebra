import {extendTheme, ThemeConfig} from "@chakra-ui/react"
import components from "./components";
import customize from "./customize";

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const theme = extendTheme({config, components, ...customize});

export default theme;
