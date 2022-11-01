import React from 'react';
import ReactDOM from 'react-dom/client';
import Challenge1 from './components/week1/Challenge1';
import Challenge2 from './components/week1/Challenge2';
import Challenge3 from './components/week1/Challenge3';
import Challenge4 from './components/week1/Challenge4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Challenge1 strInput="valor?" />
        <Challenge2 strInput="The greatest victory is which requires no battle" />
        <Challenge3 inputArray={[34, -345, -1, 100]} />
        <Challenge4 inputArray={[0, -1, -5]} />
    </React.StrictMode>
);
