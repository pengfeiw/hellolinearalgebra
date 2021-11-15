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
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="http://fred-wang.github.io/mathml.css/mspace.js"></script>
                    <script src="http://fred-wang.github.io/mathml-warning.js/mpadded-min.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument
