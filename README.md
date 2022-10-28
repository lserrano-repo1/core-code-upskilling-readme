# Core-Code-Upskilling-Readme
This is Core-Code bootcamp study repository.
__Author: Luis Serrano__

**Assignments / Table of contents**
1. [Week 1](#week1)
    1. [Challenge 1: Ensure question](#week1challenge1)
    2. [Challenge 2: Reverse sentence](#week1challenge2)
    3. [Challenge 3: Smallest number in array](#week1challenge3)






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
