import React from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarFooter/Navbar";
import {ExploreTopBooks} from "./layouts/HomePage/ExploreTopBooks";
import {Carousel} from "./layouts/HomePage/Carousel";
import {BottomLayout} from "./layouts/HomePage/BottomLayout";
import {LibraryServices} from "./layouts/HomePage/LibraryServices";

function App() {
    return (
        <>
            <Navbar/>
            <ExploreTopBooks/>
            <Carousel/>
            <BottomLayout/>
            <LibraryServices/>
        </>
    );
}

export default App;
