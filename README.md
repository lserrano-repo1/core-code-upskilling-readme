# Core-Code-Upskilling-Readme
This is Core-Code bootcamp study repository.
__Author: Luis Serrano__

**Assignments / Table of contents**
1. [Week 1](#week1)
    1. [Challenge 1: Ensure question](#week1challenge1)
    2. [Challenge 2: Reverse sentence](#week1challenge2)
    3. [Challenge 3: Smallest number in array](#week1challenge3)
    4. [Challenge 4: Odd or even, sum of array elements](#week1challenge4)
2. [Week 2](#week2)
    1. [Challenge 1: Palindrome string](#week2challenge1)
    2. [Challenge 2: Well of ideas](#week2challenge2)





---
### Week 1 <a name="week1"></a>
---
### Challenge 1: ___Ensure Question___ <a name="week1challenge1"></a>
Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

_For example (Input --> Output)_

1. "Yes" --> "Yes?" 
2. "No?" --> "No?"

#### My solution approach:
```js
 function setQuestionMark(inputString) {
        let ans = '';
        if (inputString !== null || inputString !== '') {
                if (inputString.endsWith('?')) {
                return inputString;
            } else {
                ans = inputString.trim()+"?";
            }
        }
        return ans;
    }
```

### Challenge 2: ___Reverse sentence___ <a name="week1challenge2"></a>
Complete the solution so that it reverses all of the words within the string passed in.

_Example (Input --> Output):_

"The greatest victory is that which requires no battle" => "battle no requires which that is victory greatest The"

#### My solution approach:
```js
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
```

### Challenge 3: ___Smallest integer in an integer array___ <a name="week1challenge3"></a>
Given an array of integers your solution should find the smallest integer.

_For example_:

1. Given [34, 15, 88, 2] your solution will return **2**  
2. Given [34, -345, -1, 100] your solution will return **-345**  
_You can assume, for the purpose of this kata, that the supplied array will not be empty._

#### My solution approach:
```js
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
```

### Challenge 4: ___Array elements sum is either odd or even___ <a name="week1challenge4"></a>
Given a list of integers, determine whether the sum of its elements is odd or even.

_For example_:
1. Input: [0] = Output: "even"
2. Input: [0, 1, 4] = Output: "odd"
3. Input: [0, -1, -5] = Output: "even"  
_If the input array is empty consider it as: [0] (array with a zero)._

#### My solution approach:
```js
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

            if (sumTmp % 2 == 0) {
                ans = 'even';
            } else {
                ans = 'odd';
            }
        }
        return ans;
    }
```

---
### Week 2 <a name="week2"></a>
---
### Challenge 1: ___Palindrome strings___ <a name="week2challenge1"></a>
Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.  
_Examples(Input ==> Output)_
1. "anna"   ==> true
2. "walter" ==> false
3. 12321    ==> true
4. 123456   ==> false

#### My solution approach:
```js
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
```

### Challenge 2: ___Well of ideas___ <a name="week2challenge2"></a>
You need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'. 

#### My solution approach:
```js
  /**
    * This function receive a string array containing
    * series of "good" and "bad" elements. It will analyze 
    * the data and decide an answer to return. 
    * @param {*} inputArray 
    * @returns 
    */
    function well(inputArray) {
        
        let ans = 'unknown';
        let countGood = 0;
        if (inputArray !== undefined && Array.isArray(inputArray)) {
            for (var elem of inputArray) {
                if (elem === 'good') {
                    countGood++;
                } 
            }

            //analyze results
            if (countGood === 0) {
                ans = 'Fail!';
            } else if (countGood === 1 || countGood === 2) {
                ans = 'Publish!';
            } else if (countGood > 2) {
                ans = 'I smell a series!';
            }
        }
        return ans;
    }
```
