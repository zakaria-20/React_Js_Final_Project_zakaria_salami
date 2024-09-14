import React from 'react';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import Signup from "../pages/auth/Signup"
const Authh = () => {
    return (
        <>
            <Navbar />
            {/* <Register /> */}
            <Signup/>
            <Footer />   
        </>
    );
}

export default Authh;
