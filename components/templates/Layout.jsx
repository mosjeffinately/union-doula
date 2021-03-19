import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

export const Layout = ({ children, footer, header }) => {
    return (
        <Flex
            align="flex-start"
            direction="column"
            fontFamily="body"
            justify="flex-start"
            // width="100%"
        >
            <Box as="header" width="100%">{header}</Box>
            <Box as="main" width="100%">{children}</Box>
            <Box as="footer" width="100%">{footer}</Box>
        </Flex>
    );
};
