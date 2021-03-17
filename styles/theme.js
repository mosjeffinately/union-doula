import { theme } from '@chakra-ui/react';

export default {
    ...theme,
    colors: {
        ...theme.colors,
        green: {
            ...theme.colors.green,
            [300]: '#addfb3'
        }
    },
    fonts: {
        ...theme.fonts,
        body: '"Cabin","sans-serif"',
        heading: '"Cabin","sans-serif"'
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
