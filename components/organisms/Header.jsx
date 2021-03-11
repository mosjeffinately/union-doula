import React from 'react';
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';

import LinkSmoothScroll from '../molecules/LinkSmoothScroll';

import logo from '../../public/images/Logo_White_Horizontal_PNG-cropped.png';

export const Header = () => {
    return (
        <Flex
            as="nav"
            align="center"
            bg="teal.500"
            color="white"
            direction="row"
            justify="flex-start"
            pl="1.5rem"
            pr="0.75rem"
            py="0.75rem"
            wrap="wrap"
        >
            <Link href="/">
                <Image alt="Union Doula" width="10rem" src={logo} />
            </Link>
            <Flex align="baseline" direction="row" justify="center" ml="auto">
                <Link>
                    <LinkSmoothScroll href="/home/#about">
                        <Text fontSize="lg" mr={4}>
                            About
                        </Text>
                    </LinkSmoothScroll>
                </Link>
                <Link>
                    <LinkSmoothScroll href="/home/#services">
                        <Text fontSize="lg" mr={4}>
                            Services
                        </Text>
                    </LinkSmoothScroll>
                </Link>
                <Link>
                    <LinkSmoothScroll href="/home/#pricing">
                        <Text fontSize="lg" mr={4}>
                            Pricing
                        </Text>
                    </LinkSmoothScroll>
                </Link>
                <Link>
                    <LinkSmoothScroll href="/home/#testimonials">
                        <Text fontSize="lg" mr={4}>
                            Testimonials
                        </Text>
                    </LinkSmoothScroll>
                </Link>
                <Link>
                    <LinkSmoothScroll href="/home/#contact">
                        <Text fontSize="lg" mr={4}>
                            Contact
                        </Text>
                    </LinkSmoothScroll>
                </Link>
            </Flex>
        </Flex>
    );
};
