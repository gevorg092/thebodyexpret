/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Document, {
    Head, Html, Main, NextScript,
} from 'next/document';

import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Pacifico%7CMontserrat%7CLancelot%7CMulish%7CRaleway:100,400,400i,700%7CRoboto:300,400,500,700&display=swap"
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};