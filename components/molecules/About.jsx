import React from 'react';
import {
    Box,
    Center,
    Flex,
    Image,
    Heading,
    Link,
    List,
    ListIcon,
    ListItem,
    Text,
    useBreakpointValue
} from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';
import headshot from '../../public/images/rina-louise-bw.jpg';

export const About = () => {
    const px = useBreakpointValue({
        base: '2rem',
        md: '8rem',
        lg: '12rem',
        xl: '16rem'
    });

    return (
        <Box width="full">
            <Flex
                alignItems="center"
                direction="column"
                height="100%"
                justifyContent="flex-start"
                width="100%"
            >
                <Flex
                    backgroundColor="gray.200"
                    alignItems="center"
                    color="gray.700"
                    direction="column"
                    justifyContent="center"
                    py={20}
                >
                    <Flex
                        alignItems="center"
                        direction="column"
                        justifyContent="center"
                        pb={10}
                        width="100%"
                    >
                        <Image
                            name="Rina Brulé"
                            width="16rem"
                            rounded="md"
                            src={headshot}
                        />
                        <Heading as="h4" mb={2} mt={6} size="lg">
                            {`Rina Brulé`}
                        </Heading>
                        <Heading
                            as="h5"
                            fontSize="1.5rem"
                            fontWeight="medium"
                            mb={3}
                        >
                            Certified Postpartum Doula
                        </Heading>
                    </Flex>
                    <Heading as="h2" size="xl">
                        About Me
                    </Heading>
                    <Text fontSize="1.25rem" px={px} py={6}>
                        Babies and kids have always been a big part of my life -
                        I started “babysitting” at age 10, worked at sleep-away
                        camps through college, and my husband and I were very
                        emotionally ready to start a family. Despite all of the
                        preparation - birth classes, parenting classes, books -
                        becoming parents was a huge transition for us.
                        Breastfeeding was challenging and it took my daughter a
                        month to get back to birth weight.
                    </Text>
                    <Text fontSize="1.25rem" px={px} py={6}>
                        During that time, I felt like an octopus and a turtle at
                        the same time. Reaching out for resources wherever I
                        could find them, while simultaneously wanting to crawl
                        back in my shell and get a good solid break from
                        reality. Once the fog lifted later, it was clear to me
                        that I wanted to help new families during that
                        incredible, terrifying, wonderful, overwhelming,
                        beautiful “fourth trimester.”
                    </Text>
                    <Text fontSize="1.25rem" px={px} py={6}>
                        Through Union Doula, I will support your family as you
                        transition into your new reality, whether you’re
                        first-time parents or expanding your existing family. I
                        will be the octopus when you need more hands, resources,
                        referrals, and tips. I will protect your space when you
                        need to retreat to your shell, and make sure things keep
                        running while you do.
                    </Text>
                    <Text
                        alignSelf="flex-start"
                        fontSize="1.25rem"
                        px={px}
                        py={6}
                    >
                        I am a Certified Postpartum Doula through{' '}
                        <Link href="https://www.dona.org/" isExternal>
                            DONA International
                        </Link>
                        .
                    </Text>
                </Flex>
                <Flex
                    alignItems="center"
                    backgroundColor="green.500"
                    direction="column"
                    justifyContent="center"
                    py={20}
                >
                    <Center px={px}>
                        <Heading as="h2" color="white" size="xl">
                            What does a Postpartum Doula do?
                        </Heading>
                    </Center>
                    <Text color="white" fontSize="1.25rem" px={px} py={6}>
                        A postpartum doula is a non-medical professional who
                        provides support to your entire family during the first
                        few months after the arrival of your baby. Families
                        enjoy support as they transition into parenthood with
                        the gentle guidance of a doula who has experience with
                        newborn care, maternal recovery, the development of
                        family systems, and breastfeeding, to name a few.
                        Whether it be cooking a meal, doing some light
                        housework, or taking care of baby so that parents can
                        grab a nap, a postpartum doula helps you and your family
                        settle into your new life with ease. For more
                        information on the role and benefits of a postpartum
                        doula, see the resources below.
                    </Text>
                    <List fontSize="1.125rem" px={px} spacing={3}>
                        <ListItem>
                            <Text color="white">
                                <ListIcon
                                    as={FaCircle}
                                    fontSize="0.5rem"
                                    mt="-0.125rem"
                                    verticalAlign="middle"
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
                            <Text color="white">
                                <ListIcon
                                    as={FaCircle}
                                    fontSize="0.5rem"
                                    mt="-0.125rem"
                                    verticalAlign="middle"
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
                            <Text color="white">
                                <ListIcon
                                    as={FaCircle}
                                    fontSize="0.5rem"
                                    mt="-0.125rem"
                                    verticalAlign="middle"
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
