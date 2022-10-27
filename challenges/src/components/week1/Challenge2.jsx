import React from 'react';


const Challenge2 = (props) => {
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
            <div style={{backgroundColor:'lime'}}>
                <div>{`Original string: ${props.strInput}`}</div>
                <div>{`Reversed string: ${getReverseString(props.strInput)}`}</div>
            </div>
        </React.Fragment>
    );
};

export default Challenge2;
