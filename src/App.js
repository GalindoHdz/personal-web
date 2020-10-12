import React from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Routes } from './routes';

export const App = () => {
    return (
        <>
            <Header />
            <Routes />
            <Footer />
        </>
    );
};
