import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class extends Document {
    render() {
        return (
            <Html
                style={{
                    fontFamily: '"Raleway", "sans-serif"',
                    fontSize: '16px'
                }}
            >
                <Head>
                    <title>Union Doula</title>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
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
