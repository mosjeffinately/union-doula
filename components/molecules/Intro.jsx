import React from 'react';
import { Box, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react';
import {
    FaFacebookSquare,
    FaInstagram,
    FaLinkedin
} from 'react-icons/fa';

import bannerImage from '../../public/images/adult-baby-bed-225744-with-logo.jpg';

export const Intro = () => {
    return (
        <Box position="relative" width="100%">
            <Image
                src={bannerImage}
                alt="Union Doula"
                objectFit="cover"
                opacity="0.7"
            />
            <Text
                color="white"
                fontSize="1.625rem"
                fontWeight="medium"
                position="absolute"
                top="77.5%"
                left="50%"
                transform="translate(-50%, -50%)"
            >
                Helping new parents focus on what's important.
            </Text>
            <Flex
                alignItems="baseline"
                color="white"
                direction="row"
                justifyContent="center"
                my={6}
                position="absolute"
                top="82.5%"
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
