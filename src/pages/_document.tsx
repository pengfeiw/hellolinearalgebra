/* eslint-disable @next/next/no-sync-scripts */
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html lang="zh-CN">
                <Head>
                    <link rel="icon" href="/avatar.svg" />
                    <link rel="stylesheet"
                        type="text/css"
                        href={process.env.NEXT_PUBLIC_ASSESTS_PREFIX ? process.env.NEXT_PUBLIC_ASSESTS_PREFIX + "/mathml.css" : "/mathml.css"}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
