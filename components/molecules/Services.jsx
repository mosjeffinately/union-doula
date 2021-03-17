import React from 'react';
import {
    Box,
    Flex,
    Heading,
    HStack,
    List,
    ListIcon,
    ListItem,
    Text
} from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';

export const Services = () => {
    const items = [
        [
            'Breastfeeding support and instruction',
            'Maternal postnatal care',
            'Baby soothing skills, including swaddling',
            'Newborn care including bathing, diapering and umbilical cord care',
            'Meal preparation',
            'Light housekeeping and errands'
        ],
        [
            'Baby-wearing education and assistance',
            'Baby equipment expertise',
            'Referrals to local resources',
            'Sibling and pet care',
            'Preparation for the transition back to the workplace',
            'Breast pump instruction, cleaning and tips'
        ]
    ];
    return (
        <Box backgroundColor="gray.200" width="full">
            <Flex
                alignItems="center"
                direction="column"
                justifyContent="center"
                pt={20}
                pb={8}
            >
                <Heading as="h2" color="gray.800" size="xl">
                    Services
                </Heading>
                <Text color="gray.800" fontSize="1.25rem" px="24rem" py={6}>
                    My services include, but are not limited to the items listed
                    below. I am happy to work with you to address any unique
                    concern your family might have.
                </Text>
            </Flex>
            <Flex
                alignItems="flex-start"
                direction="row"
                justifyContent="center"
                px={20}
                pb={20}
                width="full"
            >
                <HStack isInline spacing={12} align="center" width="2/3">
                    {items.map(item => (
                        <Box
                            p={3}
                            // shadow="lg"
                            // borderWidth="2px"
                            flex="1"
                            // rounded="lg"
                            width="100%"
                        >
                            <List fontSize="1.125rem" spacing={5}>
                                {item.map(desc => (
                                    <ListItem
                                        color="gray.700"
                                        whiteSpace="nowrap"
                                    >
                                        <ListIcon
                                            as={FaCircle}
                                            color="gray.700"
                                            fontSize="0.5rem"
                                            mt="-0.125rem"
                                            verticalAlign="middle"
                                        />
                                        {desc}
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    ))}
                </HStack>
            </Flex>
        </Box>
    );
};
