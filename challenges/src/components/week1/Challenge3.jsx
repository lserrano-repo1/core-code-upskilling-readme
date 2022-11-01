


const Challenge3 = (props) => {

    /**
     * This function will retrieve the smallest integer 
     * in a given array
     * @param {integers} inputArray 
     * @returns smallest integer
     */
    function findMinorInteger(inputArray){
        var ans = 0;
        if(Array.isArray(inputArray)){
          ans = Math.min(...inputArray);
        }
        return ans;
    }

return (
    <>
       <div>{`Original array: ${props.inputArray}`}</div>
       <div>{`minor integer: ${findMinorInteger(props.inputArray)}`}</div>
    </>
);

};

export default Challenge3;