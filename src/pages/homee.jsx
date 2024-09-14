import React from 'react';
import Navbar from '../layouts/navbar';
import Carousel1 from './carousel/carousel1';
import Section3 from './secondsection/section3';
import Carousel2 from './carousel/carousel2';
import Section4 from './secondsection/section4';
import Blogs from './blog/blogs';
import Footer from '../layouts/footer';

const Homee = () => {
    return (
        <>
            <Navbar />
            <Carousel1 />
            <Section3 />
            <Carousel2 />
            <Section4 />
            <Blogs />
            <Footer />
        </>
    );
}

export default Homee;
