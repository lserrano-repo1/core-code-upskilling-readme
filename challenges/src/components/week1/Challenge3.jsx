


const Challenge3 = (props) => {

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