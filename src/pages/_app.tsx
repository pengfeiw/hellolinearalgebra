import React, {useState, useEffect} from "react";
import type {AppProps} from "next/app"
import {MDXProvider} from "@mdx-js/react";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {ColorModeScript} from "@chakra-ui/react";
import theme from "src/theme";
import {styles, ColorStyleContext, colors, localStorageColorKey, ColorStyles} from "src/theme/styles";
import "polyfill-object.fromentries";
import mdxComponents from "src/components/mdx";

function MyApp({Component, pageProps}: AppProps) {
    const [colorScheme, setColorScheme] = useState<ColorStyles>("pink");
    const [t, setTheme] = useState(extendTheme({styles: styles("pink")}, theme));

    useEffect(() => {
        if (localStorage !== undefined) {
            const color = localStorage.getItem(localStorageColorKey) as ColorStyles;
            if (colors.indexOf(color) !== -1) {
                setColorScheme(color);
                return;
            }
        }
        setColorScheme("pink");
    }, []);
    useEffect(() => {
        setTheme(extendTheme({styles: styles(colorScheme)}, theme));
    }, [colorScheme]);

    return (
        <ChakraProvider theme={t}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ColorStyleContext.Provider
                value={{
                    color: colorScheme,
                    changeColor: (color) => {
                        localStorage.setItem(localStorageColorKey, color);
                        setColorScheme(color);
                    }
                }}>
                <MDXProvider components={mdxComponents}>
                    <Component {...pageProps} />
                </MDXProvider>
            </ColorStyleContext.Provider>
        </ChakraProvider>
    );
}

export default MyApp
