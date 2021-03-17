import React from 'react';
import {
    Box,
    Flex,
    Heading,
    HStack,
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
            backgroundColor="gray.200"
            color="gray.700"
            direction="column"
            justifyContent="center"
            py={20}
        >
            <Heading as="h2" size="xl">
                Resources
            </Heading>
            <HStack align="flex-start" m={10} spacing={20}>
                <Box>
                    <Heading as="h4" mb={5} size="lg">
                        Recommended Links
                    </Heading>
                    <List fontSize="1.125rem" spacing={3}>
                        <ListItem>
                            <Text>
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
                            <Text>
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
                            <Text>
                                <ListIcon
                                    as={FaCircle}
                                    color="gray.700"
                                    fontSize="0.5rem"
                                    mt="-0.125rem"
                                    verticalAlign="middle"
                                />
                                <Link
                                    isExternal
                                    href="https://motherbirth.co/podcast/"
                                >
                                    Motherbirth Podcast
                                </Link>
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text>
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
                            <Text>
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
                                    In the absence of “the village,” mothers
                                    struggle most
                                </Link>
                            </Text>
                        </ListItem>
                    </List>
                </Box>
                <Box>
                    <Heading as="h4" mb={5} size="lg">
                        Recommended Providers
                    </Heading>
                    <List fontSize="1.125rem" spacing={3}>
                        <ListItem>
                            <Text>
                                <ListIcon
                                    as={FaCircle}
                                    color="gray.700"
                                    fontSize="0.5rem"
                                    mt="-0.125rem"
                                    verticalAlign="middle"
                                />
                                <Link
                                    isExternal
                                    href="https://www.drkristindc.com/"
                                >
                                    Kukenberger Chiropractic
                                </Link>
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text>
                                <ListIcon
                                    as={FaCircle}
                                    color="gray.700"
                                    fontSize="0.5rem"
                                    mt="-0.125rem"
                                    verticalAlign="middle"
                                />
                                <Link
                                    isExternal
                                    href="https://syracuselactation.com/"
                                >
                                    Syracuse Lactation
                                </Link>
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text>
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
                </Box>
            </HStack>
        </Flex>
    </Box>
);
