import React from 'react';
import { Flex, Stack } from '@chakra-ui/react';

import { PriceBox } from '../components/atoms/PriceBox';

export const Pricing = ({}) => (
    <Flex alignContent="center" direction="row" justifyContent="center">
        <Stack align="center" isInline py={8} spacing={8}>
            <PriceBox
                description="This is the description of the services"
                price="$500"
                title="6 4-hour Day Sessions"
            />
            <PriceBox
                description="This is the description of the services"
                price="$1,000"
                title="50 hours of Day Support"
            />
            <PriceBox
                description=""
                price="$1,350"
                title="5 9-hour Night Sessions"
            />
            <PriceBox description="" price="" title="Create Your Own" />
        </Stack>
    </Flex>
);

export default Pricing;
