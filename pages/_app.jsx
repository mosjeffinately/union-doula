import '../styles/globals.css';
import { CSSReset, ThemeProvider } from '@chakra-ui/react';
import Head from 'next/head';

import theme from '../styles/theme';

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Union Doula - Serving Central New York</title>
            <meta
                name="description"
                content="Providing postpartum doula services to the Central New York region."
            />
            <meta name="robots" content="index, follow" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta charSet="UTF-8" />
        </Head>
        <ThemeProvider theme={theme}>
            <CSSReset />
            <Component {...pageProps} />
        </ThemeProvider>
    </>
);

export default App;
