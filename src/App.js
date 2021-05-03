import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import Me from './components/Me';
import './index.css';

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Main} />
            <Route exact path="/me" component={Me} />
        </BrowserRouter>
    );
}

export default App;
