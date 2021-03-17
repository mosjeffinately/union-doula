import React, { useState } from 'react';
import {
    Box,
    Button,
    Checkbox,
    CheckboxGroup,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Stack,
    StackDivider,
    Text,
    Textarea,
    VStack
} from '@chakra-ui/react';
import { FaEnvelope, FaMobileAlt, FaPhoneAlt } from 'react-icons/fa';
import PhoneInput from 'react-phone-number-input/input';

export const Contact = () => {
    const [contactMethod, setContactMethod] = useState([]);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <Flex
            as="form"
            alignItems="center"
            justifyContent="center"
            my={20}
            width="100%"
        >
            <Flex
                alignItems="center"
                direction="column"
                justifyContent="center"
                width="100%"
            >
                <VStack
                    divider={<StackDivider borderColor="gray.200" />}
                    width="50%"
                >
                    <FormControl>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input name="name" placeholder="Enter name..." />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                            name="email"
                            placeholder="Enter email address..."
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="phone">
                            Phone{' '}
                            <Text as="span" color="red.500">
                                (optional)
                            </Text>
                        </FormLabel>
                        <Input
                            as={PhoneInput}
                            country="US"
                            name="phone"
                            onChange={setPhone}
                            value={phone}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="contactMethod">
                            How would you like me to contact you?
                        </FormLabel>
                        <CheckboxGroup colorScheme="gray" name="contactMethod">
                            <HStack spacing={10}>
                                <Checkbox borderColor="gray.700" value="email">
                                    Email
                                </Checkbox>
                                <Checkbox borderColor="gray.700" value="phone">
                                    Phone
                                </Checkbox>
                                <Checkbox borderColor="gray.700" value="text">
                                    Text
                                </Checkbox>
                            </HStack>
                        </CheckboxGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <Textarea name="message" size="lg" />
                    </FormControl>
                    <Button alignSelf="flex-end">Send</Button>
                </VStack>
            </Flex>
        </Flex>
    );
};
