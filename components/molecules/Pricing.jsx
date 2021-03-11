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

const daytimeDesc = (
    <List color="white" spacing={4}>
        <ListItem whiteSpace="nowrap">
            <ListIcon
                as={FaCircle}
                color="white"
                fontSize="0.375rem"
                mt="-0.1875rem"
                verticalAlign="middle"
            />
            Support between 8AM and 8PM
        </ListItem>
        <ListItem whiteSpace="nowrap">
            <ListIcon
                as={FaCircle}
                color="white"
                fontSize="0.375rem"
                mt="-0.1875rem"
                verticalAlign="middle"
            />
            Must schedule a minimum of 4 hours
        </ListItem>
    </List>
);

export const Pricing = () => (
    <Box backgroundColor="teal.500" width="full">
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
                description={daytimeDesc}
                mx={6}
                price="$25 / hour"
                title="Daytime"
            />
            <PriceBox
                description=""
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
                description=""
                mx={6}
                price="$550"
                title="24 Hour Bundle"
            />
            <PriceBox
                description=""
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
                description=""
                mx={6}
                price="$1,250"
                title="5 Overnights Bundle"
            />
            <PriceBox
                description=""
                mx={6}
                price="$2,500"
                title="10 Overnights Bundle"
            />
        </Flex>
    </Box>
);
