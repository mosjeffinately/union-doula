import { theme } from '@chakra-ui/react';

export default {
    ...theme,
    colors: {
        ...theme.colors,
        green: {
            [50]: '#e0e0df',
            [100]: '#c7c8c6',
            [200]: '#afb0ad',
            [300]: '#969894',
            [400]: '#7e807c',
            [500]: '#686A66',
            [600]: '#4d4f4c',
            [700]: '#4d4f4c',
            [800]: '#353634',
            [900]: '#1c1d1c'
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
                color: 'gray.700',
                fontFamily: 'body',
                fontSize: '16px'
            }
        }
    }
};
