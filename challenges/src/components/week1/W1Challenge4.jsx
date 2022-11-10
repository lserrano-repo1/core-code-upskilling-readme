import React from 'react';
import '../../index.css';

const W1Challenge4 = (props) => {

    /**
     * This function will sum all elements in any given array
     * then will determine if the result is an odd or even number
     * @param {integers} inputArray 
     * @returns 
     */
    function findOddOrEven(inputArray) {
        let ans = '';
        if (Array.isArray(inputArray) && inputArray.length > 0) {
            let sumTmp = 0;
            sumTmp = inputArray.reduce((accum, num) => {
                return accum + num;
            }, 0);

            if (sumTmp % 2 === 0) {
                ans = 'even';
            } else {
                ans = 'odd';
            }
        }
        return ans;
    }

    return (
        <>
            <div className='challengeDisplayBox'>
                <h3>Week 1 - Challenge 4</h3>
                <div>{`Original array: ${props.inputArray}`}</div>
                <div>{`It's Even or Odd?: ${findOddOrEven(
                    props.inputArray
                )}`}</div>
            </div>
        </>
    );
};

export default W1Challenge4;
