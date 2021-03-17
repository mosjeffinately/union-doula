import React from 'react';
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';

export const PriceBox = ({ description, price, title, ...rest }) => {
    return (
        <Box
            borderColor="gray.200"
            borderWidth="0.125rem"
            rounded="lg"
            shadow="lg"
            width="25rem"
            {...rest}
        >
            <Box backgroundColor="green.600" height="10rem" borderTopRadius="lg" width="full">
                <Flex
                    alignItems="center"
                    direction="column"
                    height="full"
                    justifyContent="center"
                >
                    <Heading as="h2" color="white" mb={3} size="lg">
                        {title}
                    </Heading>
                    <Divider borderColor="white" mb={3} width={2 / 3} />
                    <Heading as="h3" color="white" size="xl">
                        {price}
                    </Heading>
                </Flex>
            </Box>
            <Box backgroundColor="white" minHeight="10rem" px={10} py={4}>
                {description}
            </Box>
        </Box>
    );
};
