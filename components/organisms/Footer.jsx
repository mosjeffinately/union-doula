import React from 'react';
import { Box, Flex, Image, Link, useBreakpointValue } from '@chakra-ui/react';
import {
    faFacebookSquare,
    faInstagram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../public/images/Logo_White_PNG-cropped.png';
import prideFlag from '../../public/images/64px-Gay_Pride_Flag.png';

export const Footer = () => {
    const imageDisplay = useBreakpointValue({ base: 'none', md: 'block' });

    return (
        <Flex
            align="center"
            bg="green.500"
            direction="row"
            justify={['center', null, 'space-between']}
            width="100%"
        >
            <Image
                alt="Union Doula"
                display={imageDisplay}
                ml={4}
                p={6}
                height="8rem"
                src={logo}
            />
            <Flex
                align="flex-start"
                color="white"
                direction="row"
                justify="center"
                mr={[0, null, 20]}
                py={[4, null, 0]}
            >
                <Box mx={2} width="1.75rem">
                    <Link
                        href="https://www.facebook.com/uniondoula/"
                        isExternal
                    >
                        <FontAwesomeIcon size="2x" icon={faFacebookSquare} />
                    </Link>
                </Box>
                <Box mx={2} width="1.75rem">
                    <Link
                        href="https://www.instagram.com/uniondoula"
                        isExternal
                    >
                        <FontAwesomeIcon size="2x" icon={faInstagram} />
                    </Link>
                </Box>
                <Box mx={2} width="1.75rem">
                    <Link
                        href="https://www.linkedin.com/in/rina-brule-366632a"
                        isExternal
                    >
                        <FontAwesomeIcon size="2x" icon={faLinkedin} />
                    </Link>
                </Box>
                <Box mx={2} width="3.125rem">
                    <Image alt="Pride Flag" src={prideFlag} />
                </Box>
            </Flex>
        </Flex>
    );
};
