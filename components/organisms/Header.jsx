import React from 'react';
import { Flex, Image, Link, Text, useBreakpointValue } from '@chakra-ui/react';

import LinkSmoothScroll from '../molecules/LinkSmoothScroll';

import logo from '../../public/images/Logo_White_Horizontal_PNG-cropped.png';

export const Header = () => {
    const displayLinks = useBreakpointValue({
        base: 'none',
        md: 'flex'
    });

    return (
        <Flex
            as="nav"
            align="center"
            bg="green.500"
            color="white"
            direction="row"
            flexShrink="0"
            justify="space-between"
            pl="1.5rem"
            pr="0.75rem"
            py="0.75rem"
            width="100%"
            wrap="nowrap"
        >
            <Link flexShrink="0" href="/">
                <Image
                    alt="Union Doula"
                    objectFit="cover"
                    width="10rem"
                    src={logo}
                />
            </Link>
            <Flex
                align="baseline"
                direction="row"
                display={displayLinks}
                justify="center"
                ml="auto"
            >
                <Link>
                    <LinkSmoothScroll href="/#about">
                        <Text fontSize="lg" mr={4}>
                            About
                        </Text>
                    </LinkSmoothScroll>
                </Link>
                <Link>
                    <LinkSmoothScroll href="/#services">
                        <Text fontSize="lg" mr={4}>
                            Services
                        </Text>
                    </LinkSmoothScroll>
                </Link>
                <Link>
                    <LinkSmoothScroll href="/#pricing">
                        <Text fontSize="lg" mr={4}>
                            Pricing
                        </Text>
                    </LinkSmoothScroll>
                </Link>
                <Link>
                    <LinkSmoothScroll href="/#resources">
                        <Text fontSize="lg" mr={4}>
                            Resources
                        </Text>
                    </LinkSmoothScroll>
                </Link>
                <Link>
                    <LinkSmoothScroll href="/#testimonials">
                        <Text fontSize="lg" mr={4}>
                            Testimonials
                        </Text>
                    </LinkSmoothScroll>
                </Link>
                <Link>
                    <LinkSmoothScroll href="/#contact">
                        <Text fontSize="lg" mr={4}>
                            Contact
                        </Text>
                    </LinkSmoothScroll>
                </Link>
            </Flex>
        </Flex>
    );
};
