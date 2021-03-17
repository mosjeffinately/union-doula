import React from 'react';
import { Box, Center, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export const Testimonials = () => (
    <Box backgroundColor="green.500" p={20} width="full">
        <Center mb={8}>
            <Heading as="h2" color="white" size="lg">
                Testimonials
            </Heading>
        </Center>
        <HStack spacing={40}>
            <Box
                borderColor="white"
                borderWidth="0.0625rem"
                color="white"
                fontSize="1.25rem"
                p={5}
                rounded="sm"
                width="50%"
            >
                <FaQuoteLeft />
                <Text ml={6}>
                    Relieving stress during my postpartum experience was
                    essential for me as a mom of 3. Having a few hours of
                    support during the day allowed me to pay more attention to
                    my newborn and helped me have time for myself to heal after
                    my c-section. Rina was so positive, caring, helpful and
                    supportive during my last pregnancy. I highly recommend
                    treating yourself and your family to the benefits of a doula
                    &rdquo;
                </Text>
                <Flex align="center" direction="row" justify="flex-end" mr={5}>
                    <Text ml={6}>- Harmony</Text>
                </Flex>
            </Box>
            <Box
                borderColor="white"
                borderWidth="0.0625rem"
                color="white"
                fontSize="1.25rem"
                p={5}
                rounded="sm"
                width="50%"
            >
                <FaQuoteLeft />
                <Text ml={6}>
                    Rina had a wonderfully holistic approach for helping me
                    recover from birth and sleep deprivation with my little one
                    and she helped support our whole family during the process.
                    Highly recommend! &rdquo;
                </Text>
                <Flex align="center" direction="row" justify="flex-end" mr={5}>
                    <Text ml={6}>- Lexi</Text>
                </Flex>
            </Box>
        </HStack>
    </Box>
);
