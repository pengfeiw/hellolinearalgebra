import React, {useState, useEffect} from "react";
import type {AppProps} from "next/app"
import {MDXProvider} from "@mdx-js/react";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {ColorModeScript} from "@chakra-ui/react";
import theme from "src/theme";
import "polyfill-object.fromentries";
import mdxComponents from "src/components/mdx";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <MDXProvider components={mdxComponents}>
                <Component {...pageProps} />
            </MDXProvider>
        </ChakraProvider>
    );
}

export default MyApp
