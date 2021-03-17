import React from 'react';
import {
    Box,
    Flex,
    Heading,
    List,
    ListIcon,
    ListItem,
    Text
} from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';

import { PriceBox } from '../atoms/PriceBox';

const generateDesc = items => {
    return (
        <List color="gray.800" spacing={4}>
            {items.map(item => (
                <ListItem whitespace="nowrap">
                    <ListIcon
                        as={FaCircle}
                        fontSize="0.375rem"
                        mt="-0.1875rem"
                        verticalAlign="middle"
                    />
                    {item}
                </ListItem>
            ))}
        </List>
    );
};

const daytimeDesc = [
    'Support between 8 a.m. and 8 p.m.',
    'Must schedule a minimum of 4 hours'
];

const nighttimeDesc = [
    'Support between 8 p.m. and 8 a.m.',
    'Must schedule a minimum of 8 hours'
];

const pkg1Desc = [
    '24 hours of love for your new bundle',
    'Daytime shifts only',
    'Can be scheduled in shifts of 4-8 hours'
];

const pkg2Desc = [
    '48 hours of love for your new bundle',
    'Daytime shifts only',
    'Can be scheduled in shifts of 4-8 hours'
];

const pkg3Desc = [
    'Includes 5 9-hour overnight shifts',
    'Typically scheduled from 10 p.m. - 7 a.m.',
    'Excellent gift of sleep to new parents'
];

const pkg4Desc = [
    'Includes 10 9-hour overnight shifts',
    'Typically scheduled from 10 p.m. - 7 a.m.',
    'Excellent gift of sleep to new parents'
];

export const Pricing = () => (
    <Box backgroundColor="green.500" pb={20} width="full">
        <Flex
            alignItems="center"
            direction="column"
            justifyContent="center"
            pt={20}
            pb={8}
        >
            <Heading as="h2" color="white" size="xl">
                Pricing
            </Heading>
            <Text color="white" fontSize="1.25rem" px="26rem" py={6}>
                My hourly rates are below. You may also consider choosing a
                package for discounted pricing. Please contact me for scheduling
                and purchase.
            </Text>
        </Flex>
        <Flex
            alignItems="center"
            direction="column"
            justifyContent="center"
            pb={3}
        >
            <Heading as="h3" color="white" size="lg">
                Hourly Rates
            </Heading>
        </Flex>
        <Flex
            alignItems="flex-start"
            direction="row"
            justifyContent="center"
            py={6}
        >
            <PriceBox
                description={generateDesc(daytimeDesc)}
                mx={6}
                price="$25 / hour"
                title="Daytime"
            />
            <PriceBox
                description={generateDesc(nighttimeDesc)}
                mx={6}
                price="$30 / hour"
                title="Nighttime"
            />
        </Flex>
        <Flex
            alignItems="center"
            direction="column"
            justifyContent="center"
            pt={8}
            pb={4}
        >
            <Heading as="h3" color="white" size="lg">
                Package Rates
            </Heading>
        </Flex>
        <Flex
            alignItems="flex-start"
            direction="row"
            justifyContent="center"
            py={6}
        >
            <PriceBox
                description={generateDesc(pkg1Desc)}
                mx={6}
                price="$550"
                title="24 Hour Bundle"
            />
            <PriceBox
                description={generateDesc(pkg2Desc)}
                mx={6}
                price="$1,100"
                title="48 Hour Bundle"
            />
        </Flex>
        <Flex
            alignItems="flex-start"
            direction="row"
            justifyContent="center"
            py={6}
        >
            <PriceBox
                description={generateDesc(pkg3Desc)}
                mx={6}
                price="$1,250"
                title="5 Overnights Bundle"
            />
            <PriceBox
                description={generateDesc(pkg4Desc)}
                mx={6}
                price="$2,500"
                title="10 Overnights Bundle"
            />
        </Flex>
    </Box>
);
