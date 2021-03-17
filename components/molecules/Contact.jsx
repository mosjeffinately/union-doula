import React, { useState } from 'react';
import {
    Box,
    Button,
    Checkbox,
    CheckboxGroup,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Link,
    StackDivider,
    Text,
    Textarea,
    VStack
} from '@chakra-ui/react';
import { FaEnvelope, FaMobileAlt, FaPhone } from 'react-icons/fa';
import PhoneInput from 'react-phone-number-input/input';

export const Contact = () => {
    const [contactMethod, setContactMethod] = useState([]);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const onChangeCheckbox = ({ target: { checked, value } }) => {
        const checkedBoxes = contactMethod.filter(item => item !== value);

        if (checked) {
            checkedBoxes.push(value);
        }
        console.log(checkedBoxes);
        setContactMethod(checkedBoxes);
    };

    const onChangeInput = name => ({ currentTarget: { value } }) => {
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'name') {
            setName(value);
        } else if (name === 'message') {
            setMessage(value);
            Î;
        }
    };

    return (
        <Box backgroundColor="gray.200">
            <Flex
                as="form"
                alignItems="center"
                justifyContent="center"
                py={20}
                width="100%"
            >
                <Flex
                    alignItems="center"
                    direction="column"
                    justifyContent="center"
                    width="100%"
                >
                    <HStack align="flex-start" spacing={20} width="75%">
                        <VStack
                            divider={<StackDivider borderColor="gray.200" />}
                            width="50%"
                        >
                            <FormControl>
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <Input
                                    name="name"
                                    onChange={onChangeInput('name')}
                                    placeholder="Enter name..."
                                    value={name}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                    name="email"
                                    onChange={onChangeInput('email')}
                                    placeholder="Enter email address..."
                                    value={email}
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
                                <CheckboxGroup
                                    colorScheme="gray"
                                    name="contactMethod"
                                    value={contactMethod}
                                >
                                    <HStack spacing={10}>
                                        <Checkbox
                                            borderColor="gray.700"
                                            onChange={onChangeCheckbox}
                                            value="email"
                                        >
                                            Email
                                        </Checkbox>
                                        <Checkbox
                                            borderColor="gray.700"
                                            onChange={onChangeCheckbox}
                                            value="phone"
                                        >
                                            Phone
                                        </Checkbox>
                                        <Checkbox
                                            borderColor="gray.700"
                                            onChange={onChangeCheckbox}
                                            value="text"
                                        >
                                            Text
                                        </Checkbox>
                                    </HStack>
                                </CheckboxGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="message">Message</FormLabel>
                                <Textarea
                                    name="message"
                                    onChange={onChangeInput('message')}
                                    rows={10}
                                    size="lg"
                                    value={message}
                                />
                            </FormControl>
                            <Button
                                alignSelf="flex-end"
                                backgroundColor="green.500"
                                color="white"
                                _hover={{
                                    backgroundColor: 'green.300'
                                }}
                            >
                                Send
                            </Button>
                        </VStack>
                        <VStack spacing={5}>
                            <Heading as="h3" size="lg">
                                Union Doula
                            </Heading>
                            <Box as="span" fontSize="1.25rem">
                                <Box
                                    as={FaEnvelope}
                                    display="inline-block"
                                    ml={10}
                                />
                                <Box as="span" ml={4}>
                                    <Link
                                        isExternal
                                        href="mailto:rina@uniondoula.com"
                                    >
                                        rina@uniondoula.com
                                    </Link>
                                </Box>
                            </Box>
                            <Box as="span" fontSize="1.25rem">
                                <Box
                                    as={FaPhone}
                                    display="inline-block"
                                />
                                <Box as="span" ml={4}>
                                    (503) 701-0493
                                </Box>
                            </Box>
                        </VStack>
                    </HStack>
                </Flex>
            </Flex>
        </Box>
    );
};
