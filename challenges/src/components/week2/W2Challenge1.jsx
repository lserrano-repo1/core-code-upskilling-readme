import React from 'react';
import '../../index.css';

const W2Challenge1 = (props) => {
    /**
     * This function will determine if an input string
     * is palindrome
     * @param {*} inputStr 
     * @returns true or false as string
     */
    function checkPalindrome(inputStr) {
        let ans = 'unknown';
        if(inputStr!==undefined && inputStr!==""){
            let inputArray = Array.from(inputStr);
            let reverseInputArray = inputArray.reverse();

            let stringResult = reverseInputArray.join("").toString();
            if(inputStr.trim()===stringResult.trim()){
                ans= "true";
            } else{
                ans="false";
            }
        }

        return ans;
    }

    return (
        <React.Fragment>
            <div className="challengeDisplayBox">
                <h3>Week 2 - Challenge 1</h3>
                <div>{`Original string: ${props.strInput}`}</div>
                <div>{`Is palindome?: ${checkPalindrome(props.strInput)}`}</div>
            </div>
        </React.Fragment>
    );
};

export default W2Challenge1;
