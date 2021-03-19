import React from 'react';
import {
    Box,
    Center,
    Flex,
    Heading,
    Stack,
    Text,
    useBreakpointValue
} from '@chakra-ui/react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export const Testimonials = () => {
    const fontSize = useBreakpointValue({ base: '0.75rem', md: '1.25rem' });
    const stackDirection = useBreakpointValue({ base: 'column', md: 'row' });
    return (
        <Box backgroundColor="green.500" p={[6, null, 20]} width="full">
            <Center mb={8}>
                <Heading as="h2" color="white" size="lg">
                    Testimonials
                </Heading>
            </Center>
            <Stack direction={stackDirection} spacing={[12, null, 40]}>
                <Box
                    borderColor="white"
                    borderWidth="0.0625rem"
                    color="white"
                    fontSize={fontSize}
                    p={5}
                    rounded="sm"
                    width={['100%', null, '50%']}
                >
                    <FaQuoteLeft />
                    <Text ml={6}>
                        Relieving stress during my postpartum experience was
                        essential for me as a mom of 3. Having a few hours of
                        support during the day allowed me to pay more attention
                        to my newborn and helped me have time for myself to heal
                        after my c-section. Rina was so positive, caring,
                        helpful and supportive during my last pregnancy. I
                        highly recommend treating yourself and your family to
                        the benefits of a doula &rdquo;
                    </Text>
                    <Flex
                        align="center"
                        direction="row"
                        justify="flex-end"
                        mr={5}
                    >
                        <Text ml={6}>- Harmony</Text>
                    </Flex>
                </Box>
                <Box
                    borderColor="white"
                    borderWidth="0.0625rem"
                    color="white"
                    fontSize={fontSize}
                    p={5}
                    rounded="sm"
                    width={['100%', null, '50%']}
                >
                    <FaQuoteLeft />
                    <Text ml={6}>
                        Rina was amazing! We were referred via a local provider.
                        Rina was immediately responsive and jumped right in to
                        help new parents of a 6 week old baby. We ended up
                        working with her for about 6 months. Rina was helpful in
                        so many ways. She made us feel less overwhelmed, she was
                        such a good listener, and we felt so much safer with her
                        around. I would totally recommend her to any new
                        parents! &rdquo;
                    </Text>
                    <Flex
                        align="center"
                        direction="row"
                        justify="flex-end"
                        mr={5}
                    >
                        <Text ml={6}>- Allison</Text>
                    </Flex>
                </Box>
            </Stack>
            <Center mt={[12]}>
                <Box
                    borderColor="white"
                    borderWidth="0.0625rem"
                    color="white"
                    fontSize={fontSize}
                    p={5}
                    rounded="sm"
                    width={['100%', null, '50%']}
                >
                    <FaQuoteLeft />
                    <Text ml={6}>
                        Rina had a wonderfully holistic approach for helping me
                        recover from birth and sleep deprivation with my little
                        one and she helped support our whole family during the
                        process. Highly recommend! &rdquo;
                    </Text>
                    <Flex
                        align="center"
                        direction="row"
                        justify="flex-end"
                        mr={5}
                    >
                        <Text ml={6}>- Lexi</Text>
                    </Flex>
                </Box>
            </Center>
        </Box>
    );
};
