import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Router from './router'
import Header from './components/Header'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Router />
        </BrowserRouter>
    );
}

export default App;
