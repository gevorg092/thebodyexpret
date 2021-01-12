import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../components/Header';
import LandingImage from '../components/LandingImage';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';
import MediaCard from '../components/MediaCard';
import ContactForm from '../components/ContactForm';
import React from 'react';
import globalStyles from '../components/GlobalStyles';


export default function Home() {
    const global_classes = globalStyles();
    return (
        <div className={`row ${global_classes.mar_0}`} style={{overflowX: 'hidden'}}>
            <Head>
                <title>The Body Expert</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Header/>

            <LandingImage/>

            <ImageSlider/>

            <MediaCard/>

            <ContactForm/>

            <Footer/>

        </div>
    )
}
