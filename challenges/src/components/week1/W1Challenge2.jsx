import React from 'react';
import '../../index.css';


const W1Challenge2 = (props) => {
    function getReverseString(inputStr) {
        let ans = '';
        if (inputStr !== null || inputStr !== '') {
            let reverseArray = inputStr.trim().split(' ');
            if (reverseArray.length > 1) {
                ans = reverseArray.reverse().join(' ');
            }
        }
        return ans;
    }

    return (
        <React.Fragment>
             <div className='challengeDisplayBox'>
                <h3>Week 1 - Challenge 2</h3>
                <div>{`Original string: ${props.strInput}`}</div>
                <div>{`Reversed string: ${getReverseString(props.strInput)}`}</div>
            </div>
        </React.Fragment>
    );
};

export default W1Challenge2;
