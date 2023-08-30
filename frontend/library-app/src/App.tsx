import React from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarFooter/Navbar";
import {Footer} from "./layouts/NavbarFooter/Footer";
import {HomePage} from "./layouts/HomePage/HomePage";
import {Redirect, Route, Switch} from "react-router-dom";
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";
import {BookCheckoutPage} from "./layouts/BookCheckout/BookCheckoutPage";

export const App = () => {
    return (
        <div className='d-flex flex-column min-vh-100'>
            <Navbar/>
            <div className='flex-grow-1'>
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
                    <Route path='/checkout/:bookId'>
                        <BookCheckoutPage/>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

