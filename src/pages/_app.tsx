import React, {useState, useEffect} from "react";
import type {AppProps} from "next/app"
import {MDXProvider} from "@mdx-js/react";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {ColorModeScript} from "@chakra-ui/react";
import {theme as defaultTheme} from "src/ui/theme";
import "polyfill-object.fromentries";
import mdxComponents from "src/components/mdx";
import {AccentGlobal} from "src/components/accent";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider theme={defaultTheme}>
            <AccentGlobal />
            <MDXProvider components={mdxComponents}>
                <Component {...pageProps} />
            </MDXProvider>
        </ChakraProvider>
    );
}

export default MyApp
