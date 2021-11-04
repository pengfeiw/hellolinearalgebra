import React from "react";
import type {AppProps} from "next/app"
import {MDXProvider} from "@mdx-js/react";
import {ChakraProvider} from "@chakra-ui/react";
import {theme as defaultTheme} from "src/ui/theme";
import "polyfill-object.fromentries";
import {mdxComponents} from "src/components/article/mdx";
import {AccentGlobal} from "src/components/accent";
import {PrismGlobal} from "src/ui/prism";
import {DefaultSeo} from "next-seo";
import defaultSeoConfig from "../next-seo.json";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <DefaultSeo {...defaultSeoConfig} />
            <ChakraProvider theme={defaultTheme}>
                <AccentGlobal />
                <PrismGlobal />
                <MDXProvider components={mdxComponents}>
                    <Component {...pageProps} />
                </MDXProvider>
            </ChakraProvider>
        </>
    );
}

export default MyApp
