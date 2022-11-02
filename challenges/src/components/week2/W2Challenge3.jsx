import React, { useState } from 'react';
import '../../index.css';

const W2Challenge3 = () => {
    const [counter, setCounter] = useState(0);

    /**
     * Function to increment counter value
     */
    function increment() {
        setCounter(counter + 1);
    }

    /**
     * Function to substract from counter value
     */
    function decrement() {
        setCounter(counter - 1);
    }

    return (
        <div className="challengeDisplayBox">
            <h3>Week 2 - Challenge 3</h3>

            <p>{`Result: ${counter}`}</p>

            <button onClick={() => increment()}>Add [+]</button>&nbsp;
            <button onClick={() => decrement()}>Substract [-]</button>

        </div>
    );
};

export default W2Challenge3;
