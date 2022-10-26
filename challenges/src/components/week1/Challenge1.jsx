import React from 'react';

const Challenge1 = (props) => {
    function setQuestionMark(inputString) {
        let ans = '';
        if (inputString !== null || inputString !== '') {
            if (inputString.indexOf('?') === inputString.length - 1) {
                return inputString;
            } else {
                ans = inputString.trim()+"?";
            }
        }
        return ans;
    }

    return (
        <React.Fragment>
            <div>{`Original string: ${props.strInput}`}</div>
            <div>{`Modified string: ${setQuestionMark(props.strInput)}`}</div>
        </React.Fragment>
    );
};

export default Challenge1;
