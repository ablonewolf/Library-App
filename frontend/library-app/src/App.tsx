import React from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarFooter/Navbar";
import {Footer} from "./layouts/NavbarFooter/Footer";
import {HomePage} from "./layouts/HomePage/HomePage";

export const App = () => {
    return (
        <>
            <Navbar/>
            <HomePage/>
            <Footer/>
        </>
    );
}

