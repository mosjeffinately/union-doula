import React from 'react';
import { Box } from '@chakra-ui/react';

import { About } from '../components/molecules/About';
import { Pricing } from '../components/molecules/Pricing';
import { Services } from '../components/molecules/Services';
import { Layout } from '../components/templates/Layout';
import { Footer } from '../components/organisms/Footer';
import { Header } from '../components/organisms/Header';

export const Home = () => {
    let parallax;
    return (
        <Layout footer={<Footer />} header={<Header />}>
            <Box id="about">
                <About />
            </Box>
            <Box id="services">
                <Services />
            </Box>
            <Box id="pricing">
                <Pricing />
            </Box>
        </Layout>
    );
};

export default Home;
