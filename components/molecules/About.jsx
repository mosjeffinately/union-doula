import React from 'react';
import {
    Avatar,
    Box,
    Flex,
    Heading,
    IconButton,
    Link,
    List,
    ListIcon,
    ListItem,
    Text
} from '@chakra-ui/react';
import {
    FaCircle,
    FaFacebookSquare,
    FaInstagram,
    FaLinkedin
} from 'react-icons/fa';
import headshot from '../../public/images/rina-louise-cropped.jpg';

export const About = () => {
    return (
        <Box width="full">
            <Flex
                alignItems="center"
                direction="column"
                height="full"
                justifyContent="flex-start"
                width="full"
            >
                <Box
                    backgroundImage="url('/images/pexels-rene-asmussen-cropped-2505101.jpg')"
                    backgroundSize="cover"
                    height="50rem"
                    transform="translate3d(0px, 0px, 0px)"
                    width="full"
                >
                    <Flex
                        alignItems="center"
                        direction="column"
                        justifyContent="center"
                        py={40}
                        width="full"
                    >
                        <Avatar
                            name="Rina Brule"
                            height="16rem"
                            width="16rem"
                            src={headshot}
                        />
                        <Heading as="h3" color="white" mb={2} mt={6}>
                            Rina Brule
                        </Heading>
                        <Heading
                            as="h5"
                            color="white"
                            fontSize="1.875rem"
                            fontWeight="medium"
                            mb={3}
                        >
                            Postpartum Doula
                        </Heading>
                        <Flex
                            alignItems="baseline"
                            color="white"
                            direction="row"
                            justifyContent="center"
                            my={6}
                        >
                            <IconButton
                                colorScheme="teal"
                                fontSize="3xl"
                                height="4rem"
                                icon={<FaFacebookSquare />}
                                mx={4}
                                rounded="full"
                                width="4rem"
                            />
                            <IconButton
                                colorScheme="teal"
                                fontSize="3xl"
                                height="4rem"
                                icon={<FaInstagram />}
                                mx={4}
                                rounded="full"
                                width="4rem"
                            />
                            <IconButton
                                colorScheme="teal"
                                fontSize="3xl"
                                height="4rem"
                                icon={<FaLinkedin />}
                                mx={4}
                                rounded="full"
                                width="4rem"
                            />
                        </Flex>
                        <Text
                            color="white"
                            fontSize="1.625rem"
                            fontWeight="medium"
                        >
                            Helping new parents focus on what's important.
                        </Text>
                    </Flex>
                </Box>
                <Flex
                    backgroundColor="gray.200"
                    alignItems="center"
                    direction="column"
                    justifyContent="center"
                    py={20}
                >
                    <Heading as="h2" color="gray.800" size="xl">
                        About Me
                    </Heading>
                    <Text color="gray.800" fontSize="1.25rem" px="16rem" py={6}>
                        My husband and I were lucky enough to get pregnant
                        pretty quickly after we got married. I started
                        &quot;babysitting&quot; at age 10, worked at sleep-away
                        camps through college - kids were always a part of my
                        life, and my husband and I were very emotionally ready
                        to start a family. Despite all of the preparation -
                        birth classes, parenting classes, books - becoming
                        parents was a huge transition for us. Breastfeeding was
                        challenging and it took my daughter a month to get back
                        to birth weight.
                    </Text>
                    <Text color="gray.800" fontSize="1.25rem" px="16rem" py={6}>
                        During that time, I felt like an octopus and a turtle at
                        the same time. Reaching out for resources wherever I
                        could find them while simultaneously wanting to crawl
                        back in my shell and get a good solid break from
                        reality. Once the fog lifted later, it was clear to me
                        that I wanted to help new families during that
                        incredible, terrifying, wonderful, overwhelming,
                        beautiful &quot;fourth trimester.&quot;
                    </Text>
                    <Text color="gray.800" fontSize="1.25rem" px="16rem" py={6}>
                        Through Union Doula, I will support your family as you
                        transition into your new reality, whether you’re
                        first-time parents or expanding your existing family. I
                        will be the octopus when you need more hands, resources,
                        referrals, and tips. I will protect your space when you
                        need to retreat to your shell, and make sure the trains
                        keep moving while you do.
                    </Text>
                </Flex>
                <Flex
                    alignItems="center"
                    backgroundColor="teal.500"
                    direction="column"
                    justifyContent="center"
                    py={20}
                >
                    <Heading as="h2" color="white" size="xl">
                        What does a Postpartum Doula do?
                    </Heading>
                    <Text color="white" fontSize="1.25rem" px="16rem" py={6}>
                        A postpartum doula is a non-medical professional who can
                        provide support to your entire family during the first
                        few months after the arrival of your baby. Some families
                        enjoy the benefits of having someone help them
                        transition into parenthood with the gentle guidance from
                        a doula that has information on basic newborn care and
                        breastfeeding. Whether it be cooking a meal, doing some
                        light house work, or taking care of baby so that mom and
                        dad can get comfy for a nap, a postpartum doula is a
                        needed companion that helps you and your family settle
                        into your new life with ease. For more information on
                        the role and benefits of a postpartum doula, see the
                        resources below.
                    </Text>
                    <List spacing={3}>
                        <ListItem>
                            <Text color="white" fontSize="1.25rem">
                                <ListIcon
                                    color="white"
                                    fontSize=".5rem"
                                    icon={FaCircle}
                                />
                                <Link
                                    isExternal
                                    href="http://www.northeastdoulas.com/blog/10-reasons-hire-postpartum-doula"
                                >
                                    10 Reasons to Hire a Postpartum Doula
                                </Link>
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text color="white" fontSize="1.25rem">
                                <ListIcon
                                    color="white"
                                    fontSize=".5rem"
                                    icon={FaCircle}
                                />
                                <Link
                                    isExternal
                                    href="http://americanpregnancy.org/planning/post-partum-doula"
                                >
                                    American Pregnancy Association: Postpartum
                                    Doula
                                </Link>
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text color="white" fontSize="1.25rem">
                                <ListIcon
                                    color="white"
                                    fontSize=".5rem"
                                    icon={FaCircle}
                                />
                                <Link
                                    isExternal
                                    href="https://www.parents.com/pregnancy/giving-birth/doula/should-you-hire-a-postpartum-doula/"
                                >
                                    Parents Magazine: Should you hire a
                                    Postpartum Doula?
                                </Link>
                            </Text>
                        </ListItem>
                    </List>
                </Flex>
            </Flex>
        </Box>
    );
};

export default About;
