import '../styles/globals.css';
import { CSSReset, ThemeProvider } from '@chakra-ui/react';

import { Layout } from '../components/templates/Layout';
import theme from '../styles/theme';

const App = ({ Component, pageProps }) => (
    <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
    </ThemeProvider>
);

export default App;
