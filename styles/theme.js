import { theme } from '@chakra-ui/react';

export default {
    ...theme,
    colors: {
        ...theme.colors,
        green: {
            [50]: '#f6fafa',
            [100]: '#d6eae7',
            [200]: '#b5d9d4',
            [300]: '#95c9c1',
            [400]: '#75b8ae',
            [500]: '#768c4f', //'#55a79a',
            [600]: '#44877c',
            [700]: '#34665e',
            [800]: '#234640',
            [900]: '#132522'
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
