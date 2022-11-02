import React from 'react';
import ReactDOM from 'react-dom/client';
import W1Challenge1 from './components/week1/W1Challenge1';
import W1Challenge2 from './components/week1/W1Challenge2';
import W1Challenge3 from './components/week1/W1Challenge3';
import W1Challenge4 from './components/week1/W1Challenge4';
import W2Challenge1 from './components/week2/W2Challenge1';
import W2Challenge2 from './components/week2/W2Challenge2';
import W2Challenge3 from './components/week2/W2Challenge3';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className="code">
            <W1Challenge1 strInput="valor sin signo" />
            <W1Challenge2 strInput="The greatest victory is which requires no battle" />
            <W1Challenge3 inputArray={[34, -345, -1, 100]} />
            <W1Challenge4 inputArray={[0, -1, -5]} />

            <W2Challenge1 strInput="APOPA"/>
            <W2Challenge2 inputArray={["good","bad","good","bad","good","bad","bad"]}/>
            <W2Challenge3 />
        </div>
    </React.StrictMode>
);
