import React from 'react';
import ReactDOM from 'react-dom/client';
import Challenge1 from './components/week1/Challenge1';
import Challenge2 from './components/week1/Challenge2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Challenge1 strInput="valor?" />
        <Challenge2 strInput="The greatest victory is that which requires no battle" />
    </React.StrictMode>
);
