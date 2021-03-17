import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Link,
    List,
    ListIcon,
    ListItem,
    Text
} from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';

export const Resources = () => (
    <Box width="full">
        <Flex
            alignItems="center"
            backgroundColor="white"
            color="gray.700"
            direction="column"
            justifyContent="center"
            py={20}
        >
            <Heading as="h2" size="xl">
                Resources
            </Heading>
            <Heading as="h4" mt={6} mb={3} size="lg">
                Recommended Links
            </Heading>
            <List mb={3} spacing={3}>
                <ListItem>
                    <Text fontSize="1.25rem">
                        <ListIcon
                            as={FaCircle}
                            color="gray.700"
                            fontSize="0.5rem"
                            mt="-0.125rem"
                            verticalAlign="middle"
                        />
                        <Link isExternal href="https://kellymom.com">
                            Kelly Mom
                        </Link>
                    </Text>
                </ListItem>
                <ListItem>
                    <Text fontSize="1.25rem">
                        <ListIcon
                            as={FaCircle}
                            color="gray.700"
                            fontSize="0.5rem"
                            mt="-0.125rem"
                            verticalAlign="middle"
                        />
                        <Link
                            isExternal
                            href="https://evidencebasedbirth.com/ "
                        >
                            Evidence Based Birth
                        </Link>
                    </Text>
                </ListItem>
                <ListItem>
                    <Text fontSize="1.25rem">
                        <ListIcon
                            as={FaCircle}
                            color="gray.700"
                            fontSize="0.5rem"
                            mt="-0.125rem"
                            verticalAlign="middle"
                        />
                        <Link isExternal href="https://motherbirth.co/podcast/">
                            Motherbirth Podcast
                        </Link>
                    </Text>
                </ListItem>
                <ListItem>
                    <Text fontSize="1.25rem">
                        <ListIcon
                            as={FaCircle}
                            color="gray.700"
                            fontSize="0.5rem"
                            mt="-0.125rem"
                            verticalAlign="middle"
                        />
                        <Link
                            isExternal
                            href="https://motherbirth.co/fifth-trimester-053/"
                        >
                            The Fifth Trimester
                        </Link>
                    </Text>
                </ListItem>
                <ListItem>
                    <Text fontSize="1.25rem">
                        <ListIcon
                            as={FaCircle}
                            color="gray.700"
                            fontSize="0.5rem"
                            mt="-0.125rem"
                            verticalAlign="middle"
                        />
                        <Link
                            isExternal
                            href="https://www.mother.ly/life/in-the-absence-of-the-village-mothers-struggle-most"
                        >
                            In the absence of “the village,” mothers struggle
                            most
                        </Link>
                    </Text>
                </ListItem>
            </List>
            <Heading as="h4" mt={6} mb={3} size="lg">
                Recommended Providers
            </Heading>
            <List spacing={3}>
                <ListItem>
                    <Text fontSize="1.25rem">
                        <ListIcon
                            as={FaCircle}
                            color="gray.700"
                            fontSize="0.5rem"
                            mt="-0.125rem"
                            verticalAlign="middle"
                        />
                        <Link isExternal href="https://www.drkristindc.com/">
                            Kukenberger Chiropractic
                        </Link>
                    </Text>
                </ListItem>
                <ListItem>
                    <Text fontSize="1.25rem">
                        <ListIcon
                            as={FaCircle}
                            color="gray.700"
                            fontSize="0.5rem"
                            mt="-0.125rem"
                            verticalAlign="middle"
                        />
                        <Link isExternal href="https://syracuselactation.com/">
                            Syracuse Lactation
                        </Link>
                    </Text>
                </ListItem>
                <ListItem>
                    <Text fontSize="1.25rem">
                        <ListIcon
                            as={FaCircle}
                            color="gray.700"
                            fontSize="0.5rem"
                            mt="-0.125rem"
                            verticalAlign="middle"
                        />
                        <Link isExternal href="https://cazdoula.com/">
                            Sarah Kelchner, Full Spectrum Doula
                        </Link>
                    </Text>
                </ListItem>
            </List>
        </Flex>
    </Box>
);
