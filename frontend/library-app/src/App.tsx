import React from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarFooter/Navbar";
import {Footer} from "./layouts/NavbarFooter/Footer";
import {HomePage} from "./layouts/HomePage/HomePage";
import {Redirect, Route, Switch} from "react-router-dom";
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";

export const App = () => {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/home'/>
                </Route>
                <Route path='/home'>
                    <HomePage/>
                </Route>
                <Route path='/search'>
                    <SearchBooksPage/>
                </Route>
            </Switch>
            <Footer/>
        </>
    );
}

