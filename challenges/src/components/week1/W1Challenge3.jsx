import React from 'react';
import '../../index.css';

const W1Challenge3 = (props) => {
    /**
     * This function will retrieve the smallest integer
     * in a given array
     * @param {integers} inputArray
     * @returns smallest integer
     */
    function findMinorInteger(inputArray) {
        var ans = 0;
        if (Array.isArray(inputArray)) {
            ans = Math.min(...inputArray);
        }
        return ans;
    }

    return (
        <>
            <div className="challengeDisplayBox">
                <h3>Week 1 - Challenge 3</h3>
                <div>{`Original array: ${props.inputArray}`}</div>
                <div>{`minor integer: ${findMinorInteger(
                    props.inputArray
                )}`}</div>
            </div>
        </>
    );
};

export default W1Challenge3;
