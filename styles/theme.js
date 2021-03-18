import { theme } from '@chakra-ui/react';

export default {
    ...theme,
    colors: {
        ...theme.colors,
        green: {
            [50]: '#eaeee2',
            [100]: '#d3ddc3',
            [200]: '#bdcba3',
            [300]: '#a6b984',
            [400]: '#8fa865',
            [500]: '#768c4f', //'#55a79a',
            [600]: '#5c6d3d',
            [700]: '#414e2c',
            [800]: '#272e1a',
            [900]: '#0d0f08'
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
