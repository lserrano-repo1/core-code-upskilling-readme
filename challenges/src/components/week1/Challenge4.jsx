const Challenge4 = (props) => {
    function findOddOrEven(inputArray) {
        let ans = '';
        if (Array.isArray(inputArray) && inputArray.length > 0) {
            let sumTmp = 0;
            sumTmp = inputArray.reduce((accum, num) => {
                return accum + num;
            }, 0);

            if (sumTmp % 2 == 0) {
                ans = 'even';
            } else {
                ans = 'odd';
            }
        }
        return ans;
    }

    return (
        <>
            <div style={{ backgroundColor: 'yellow' }}>
                <div>{`Original array: ${props.inputArray}`}</div>
                <div>{`It's Even or Odd?: ${findOddOrEven(
                    props.inputArray
                )}`}</div>
            </div>
        </>
    );
};

export default Challenge4;
