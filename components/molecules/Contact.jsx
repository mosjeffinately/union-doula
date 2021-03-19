import React, { useState } from 'react';
import {
    Box,
    Button,
    Center,
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
    VStack,
    useBreakpointValue
} from '@chakra-ui/react';
import { send } from 'emailjs-com';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import PhoneInput from 'react-phone-number-input/input';

export const Contact = ({ emailjsConfig }) => {
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

        setContactMethod(checkedBoxes);
    };

    const onChangeInput = name => ({ currentTarget: { value } }) => {
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'name') {
            setName(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    const onSubmit = e => {
        e.preventDefault();

        const templateParams = {
            contactMethod: contactMethod.join(', '),
            email,
            message,
            name,
            phone
        };

        send(
            emailjsConfig.serviceId,
            emailjsConfig.templateId,
            templateParams,
            emailjsConfig.userId
        )
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <Box backgroundColor="gray.200" color="gray.700">
            <Box px={[4, 8, 12]}>
                <Center pt={[12, null, 20]}>
                    <Heading as="h2" size="xl">
                        Contact
                    </Heading>
                </Center>
                <Center pt={4}>
                    <Text fontSize="1.25rem">
                        Let's talk about how I can help you relax into
                        parenthood.
                    </Text>
                </Center>
                <Center pt={4}>
                    <Heading as="h4" size="md">
                        Union Doula
                    </Heading>
                </Center>
                <Center>
                    <Box as="span" fontSize="1.25rem">
                        <Box as={FaEnvelope} display="inline-block" />
                        <Box as="span" ml={4}>
                            <Link isExternal href="mailto:rina@uniondoula.com">
                                rina@uniondoula.com
                            </Link>
                        </Box>
                    </Box>
                </Center>
                <Center>
                    <Box as="span" fontSize="1.25rem">
                        <Box as={FaPhone} display="inline-block" />
                        <Box as="span" ml={4}>
                            (503) 701-0493
                        </Box>
                    </Box>
                </Center>
                <Flex
                    as="form"
                    alignItems="center"
                    justifyContent="center"
                    onSubmit={onSubmit}
                    py={12}
                    width="100%"
                >
                    <Flex
                        alignItems="center"
                        direction="column"
                        justifyContent="center"
                        width="100%"
                    >
                        {/* <HStack align="flex-start" spacing={20} width="75%"> */}
                        <VStack
                            divider={<StackDivider borderColor="gray.200" />}
                            width={['100%', null, '50%']}
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
                                            value="Email"
                                        >
                                            Email
                                        </Checkbox>
                                        <Checkbox
                                            borderColor="gray.700"
                                            onChange={onChangeCheckbox}
                                            value="Phone"
                                        >
                                            Phone
                                        </Checkbox>
                                        <Checkbox
                                            borderColor="gray.700"
                                            onChange={onChangeCheckbox}
                                            value="Text"
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
                                type="submit"
                                _hover={{
                                    backgroundColor: 'green.300'
                                }}
                            >
                                Send
                            </Button>
                        </VStack>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};
