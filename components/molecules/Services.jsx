import React from 'react';
import {
    Box,
    Center,
    Flex,
    Heading,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    useBreakpointValue
} from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';

export const Services = () => {
    const px = useBreakpointValue({
        base: '2rem',
        md: '8rem',
        lg: '12rem',
        xl: '16rem'
    });
    const stackDirection = useBreakpointValue({ base: 'column', md: 'row' });

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
        <Box backgroundColor="gray.200" pt={20} pb={20} width="full">
            <Flex
                alignItems="center"
                direction="column"
                justifyContent="center"
                pb={8}
            >
                <Heading as="h2" color="gray.700" size="xl">
                    Services
                </Heading>
                <Text
                    color="gray.700"
                    fontSize="1.25rem"
                    px={['2rem', null, '8rem', '24rem']}
                    py={6}
                >
                    My services include, but are not limited to the items listed
                    below. I am happy to work with you to address any unique
                    concern your family might have.
                </Text>
            </Flex>
            {/* <Flex
                alignItems="flex-start"
                direction="row"
                justifyContent="center"
                px={20}
                pb={20}
                width="full"
            > */}
            <Center>
                <Stack
                    direction={stackDirection}
                    px={px}
                    spacing={[2, null, 12]}
                    align="center"
                    width="2/3"
                >
                    {items.map(item => (
                        <Box
                            px={5}
                            py={[0, null, 3]}
                            // shadow="lg"
                            // borderWidth="2px"
                            flex="1"
                            // rounded="lg"
                            width="100%"
                        >
                            <List fontSize="1.125rem" spacing={[2, null, 5]}>
                                {item.map(desc => (
                                    <ListItem
                                        color="gray.700"
                                        whiteSpace={['wrap', null, 'nowrap']}
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
                </Stack>
            </Center>
            {/* </Flex> */}
        </Box>
    );
};
