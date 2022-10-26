import React from 'react';
import ReactDOM from 'react-dom/client';
import Challenge1 from './components/week1/Challenge1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Challenge1 strInput="valor?" />
    </React.StrictMode>
);
