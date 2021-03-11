import { theme } from '@chakra-ui/react';

export default {
    ...theme,
    fonts: {
        ...theme.fonts,
        body: '"Raleway","sans-serif"',
        heading: '"Raleway","sans-serif"'
    },
    styles: {
        global: {
            body: {
                fontFamily: 'body',
                fontSize: '16px'
            }
        }
    }
};
