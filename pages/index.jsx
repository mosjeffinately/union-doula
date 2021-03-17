import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import Head from 'next/head';

import { About } from '../components/molecules/About';
import { Contact } from '../components/molecules/Contact';
import { Intro } from '../components/molecules/Intro';
import { Pricing } from '../components/molecules/Pricing';
import { Resources } from '../components/molecules/Resources';
import { Services } from '../components/molecules/Services';
import { Testimonials} from '../components/molecules/Testimonials';
import { Footer } from '../components/organisms/Footer';
import { Header } from '../components/organisms/Header';
import { Layout } from '../components/templates/Layout';

const Index = () => (
    <Box>
        <Head>
            <title>Union Doula</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout footer={<Footer />} header={<Header />}>
            <Box id="home">
                <Intro />
            </Box>
            <Box id="about">
                <About />
            </Box>
            <Box id="services">
                <Services />
            </Box>
            <Box id="pricing">
                <Pricing />
            </Box>
            <Box id="resources">
                <Resources />
            </Box>
            <Box id="testimonials">
                <Testimonials />
            </Box>
            <Box id="contact">
                <Contact />
            </Box>
        </Layout>
    </Box>
);

export default Index;
