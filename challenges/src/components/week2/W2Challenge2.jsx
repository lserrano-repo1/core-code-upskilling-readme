import React from 'react';
import '../../index.css';

const W2Challenge2 = (props) => {
   
    /**
    * This function receive a string array containing
    * series of "good" and "bad" elements. It will analyze 
    * the data and decide an answer to return. 
    * @param {*} inputArray 
    * @returns 
    */
    function well(inputArray) {
        
        let ans = 'unknown';
        let countGood = 0;
        if (inputArray !== undefined && Array.isArray(inputArray)) {
            for (var elem of inputArray) {
                if (elem === 'good') {
                    countGood++;
                } 
            }

            //analyze results
            if (countGood === 0) {
                ans = 'Fail!';
            } else if (countGood === 1 || countGood === 2) {
                ans = 'Publish!';
            } else if (countGood > 2) {
                ans = 'I smell a series!';
            }
        }
        return ans;
    }

    return (
        <div className="challengeDisplayBox">
            <h3>Week 2 - Challenge 2</h3>
            <div>{`Original array: ${props.inputArray}`}</div>
            <div>{`Modified string: ${well(props.inputArray)}`}</div>
        </div>
    );
};

export default W2Challenge2;
