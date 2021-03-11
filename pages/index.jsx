import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Head from 'next/head';

import { Footer } from '../components/organisms/Footer';
import { Header } from '../components/organisms/Header';
import { Layout } from '../components/templates/Layout';

import bannerImage from '../public/images/adult-baby-bed-225744-with-logo.jpg';

const Index = () => (
    <Box>
        <Head>
            <title>Union Doula</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout footer={<Footer />} header={<Header />}>
            <Box>
                <Image
                    src={bannerImage}
                    alt="Union Doula"
                    objectFit="cover"
                    opacity="0.7"
                />
            </Box>
        </Layout>
    </Box>
);

export default Index;
