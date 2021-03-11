import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

export const Layout = ({ children, footer, header }) => {
    return (
        <Flex
            align="flex-start"
            direction="column"
            fontFamily="body"
            justify="flex-start"
            height="100vh"
            width="full"
        >
            <Box as="header" width="full">
                {header}
            </Box>
            <Box as="main" width="full">{children}</Box>
            <Box as="footer" width="full">
                {footer}
            </Box>
        </Flex>
    );
};
