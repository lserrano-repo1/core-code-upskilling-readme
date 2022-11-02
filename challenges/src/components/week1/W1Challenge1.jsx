import React from 'react';
import '../../index.css';

const W1Challenge1 = (props) => {
    function setQuestionMark(inputString) {
        let ans = '';
        if (inputString !== null || inputString !== '') {
            if (inputString.endsWith('?')) {
                return inputString;
            } else {
                ans = inputString.trim() + '?';
            }
        }
        return ans;
    }

    return (
        <React.Fragment>
            <div className='challengeDisplayBox'>
                <h3>Week 1 - Challenge 1</h3>
                <div>{`Original string: ${props.strInput}`}</div>
                <div>{`Modified string: ${setQuestionMark(
                    props.strInput
                )}`}</div>
            </div>
        </React.Fragment>
    );
};

export default W1Challenge1;
