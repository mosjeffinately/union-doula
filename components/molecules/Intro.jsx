import React, { useRef, useState } from 'react';
import {
    Box,
    Flex,
    Center,
    IconButton,
    Image,
    Text,
    useBreakpointValue
} from '@chakra-ui/react';
import {
    FaFacebookSquare,
    FaInstagram,
    FaLinkedin
} from 'react-icons/fa';

import bannerImage from '../../public/images/adult-baby-bed-225744-with-logo.jpg';

export const Intro = () => {
    const fontSize = useBreakpointValue({ base: '1rem', md: '1.625rem' });
    const top = useBreakpointValue({ base: '80%', md: '77.5%' })
    const buttonDisplay = useBreakpointValue({ base: 'none', md: 'flex' });

    return (
        <Box position="relative" width="100%">
            <Image
                src={bannerImage}
                alt="Union Doula"
                objectFit="cover"
                opacity="0.7"
            />
            <Center whitespace="nowrap">
                <Text
                    color="white"
                    fontSize={fontSize}
                    fontWeight="medium"
                    position="absolute"
                    top={top}
                    // left="50%"
                    // transform="translate(-50%, -50%)"
                >
                    Helping new parents focus on what's important.
                </Text>
            </Center>
            <Flex
                alignItems="baseline"
                color="white"
                direction="row"
                display={buttonDisplay}
                justifyContent="center"
                my={6}
                position="absolute"
                top="85%"
                left="50%"
                transform="translate(-50%, -50%)"
            >
                <IconButton
                    bg="green.500"
                    fontSize="3xl"
                    height="4rem"
                    icon={<FaFacebookSquare />}
                    mx={4}
                    rounded="full"
                    width="4rem"
                    _hover={{
                        bg: 'green.300'
                    }}
                />
                <IconButton
                    bg="green.500"
                    fontSize="3xl"
                    height="4rem"
                    icon={<FaInstagram />}
                    mx={4}
                    rounded="full"
                    width="4rem"
                    _hover={{
                        bg: 'green.300'
                    }}
                />
                <IconButton
                    bg="green.500"
                    fontSize="3xl"
                    height="4rem"
                    icon={<FaLinkedin />}
                    mx={4}
                    rounded="full"
                    width="4rem"
                    _hover={{
                        bg: 'green.300'
                    }}
                />
            </Flex>
        </Box>
    );
};
