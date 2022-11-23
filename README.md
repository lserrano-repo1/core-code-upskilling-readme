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
    3. [Challenge 3: React useState](#week2challenge3)
    4. [Challenge 4: Santa's wish list](#week2challenge4)
3. [Week 3](#week3)
    1. [Challenge 1: Build Search Filter In React](#week3challenge1)
    2. [Challenge 2: Fetch Random User Data](#week3challenge2)
    3. [Challenge 3: React Router Blog ](#week3challenge3)
4. [Week 4](#week4)
    1. [Challenge 1: Two to one](#week4challenge1)





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

### Challenge 3: ___React manage events___ <a name="week2challenge3"></a>
We want to be able to see the value of the counter - so it should be rendered! And for your buttons to work they will need an onClick prop.  

_In your render you should return:_  
1. The counter display element with an id of 'counter', containing the counter value.
2. An increment button with an id of 'increment'
3. A decrement button with an id of 'decrement'

#### My solution approach:
```js
import React, { useState } from 'react';
import '../../index.css';

const W2Challenge3 = () => {
    const [counter, setCounter] = useState(0);

    /**
     * Function to increment counter value
     */
    function increment() {
        setCounter(counter + 1);
    }

    /**
     * Function to substract from counter value
     */
    function decrement() {
        setCounter(counter - 1);
    }

    return (
        <div className="challengeDisplayBox">
            <h3>Week 2 - Challenge 3</h3>

            <p>{`Result: ${counter}`}</p>

            <button onClick={() => increment()}>Add [+]</button>&nbsp;
            <button onClick={() => decrement()}>Substract [-]</button>

        </div>
    );
};

export default W2Challenge3;
```



### Challenge 4: ___Santa's wish list___ <a name="week2challenge4"></a>
Santa wants to simplify his life and offer children the possiblity to enter their wishlist via an online form.
The form should be a React component and should contain:

1. an input field for the child's name (with id 'name')
2. a text area to describe the wish (id: 'wish')
3. a drop-down indicating the priority of the wish, from 1 to 5 - default is 1 (id: 'priority')
4. the keys in the state to store the corresponding values should be named the same as the element's id
5. an onSubmit action calling the function handleSubmit
6. a function called handleSubmit, which
- calls send (a function that is already provided as part of the injected properties props)
- passes the current state as a parameter to send
- calls event.preventDefault

_it should be a controlled component (i.e. using onChange to bind input to the component's state)_

#### My solution approach:
```js
import React,{useState} from 'react';

const W2Challenge4 = (props) => {
    let priorityVal = [
        { label: 'P-1', value: 1 },
        { label: 'P-2', value: 2 },
        { label: 'P-3', value: 3 },
        { label: 'P-4', value: 4 },
        { label: 'P-5', value: 5 },
    ];

    const [data, setData] = useState({
            name:'',
            wish:'',
            priority:0
        });

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.send(data);
    };

    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value});
    };

    return (
        <React.Fragment>
            <div className="challengeDisplayBox">
                <h3>Week 1 - Challenge 4</h3>
                <form onSubmit={handleSubmit}>
                    <div style={{padding:'5px'}}>
                        <label for="name">Child's Name:&nbsp;</label>
                        <input id="name" name="name" onChange={handleChange} value={data.name} />
                    </div>
                    <div style={{padding:'5px'}}>
                        <label for="wish">Child's Name:&nbsp;</label>
                        <textarea id="wish" name="wish" rows="4" cols="21" onChange={handleChange} value={data.wish}/>
                    </div>
                    <div style={{padding:'5px'}}>
                        <label for="priority">Priority:&nbsp;</label>
                        <select id="priority" name="priority" onChange={handleChange}  value={data.priority}>
                            <option value="0">Select priority</option>
                            {priorityVal.map((prty) => (
                                <option value={prty.value}>{prty.label}</option>
                            ))}
                        </select>
                    </div>
                    <div style={{padding:'5px'}}>
                        <button type="submit" >Enviar a la lista</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

export default W2Challenge4;
```

---
### Week 3 <a name="week3"></a>
---
### Challenge 1: ___Build search filter in React___ <a name="week3challenge1"></a>
React code to build a simple search filter functionality to display a filtered list based on the search query entered by the user. 

#### My solution approach:
```js
import React, { useState } from 'react';
import '../../index.css';

const W3Challenge1 = () => {
    let fruitsList = ['Apple','Orange','Berries','Banana',
        'Watermelon','Pineapple','Apricot','Nectarine',
        'Papaya','Peach','Strawberries','Lemon',
        'Lime','Mango','Mangosteen','Dragonfruit',
        'Cherry','Coconut','Grapefuit','Pomegranate',
        'Rambutan','Tangelo','Kiwi'];

    const [listOfFruits, setListOfFruits] = useState(fruitsList);

    const searchHelper = (e) => {
        setListOfFruits(fruitsList.filter(
            (fruit) =>
                fruit.toLowerCase()
                    .indexOf(e.target.value.toLowerCase()) !== -1));
    };

    return (
        <>
            <div className="challengeDisplayBox">
                <h3>Week 3 - Challenge 1</h3>
                <form>
                    <label for="search">Enter a fruit name: </label>
                    <input name="search" id="search" onChange={searchHelper} />
                    <div style={{ color: 'blue' }}>
                        {listOfFruits.map((elem, index) => (
                            <div
                                style={{ marginLeft: '20px' }}
                                id={`fId-${index}`}
                                key={`fId-${index}`}>
                                {elem}
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        </>
    );
};

export default W3Challenge1;
```


### Challenge 2: ___Fetch Random User Data___ <a name="week3challenge2"></a>
React code to fetch from this API random users. You should display the Name, website, email and phone of a random user. Also there should be a Reset button to fetch a new user (For this you need to generate a random number from 1 to 10).

#### My solution approach:
```js
import React, { useEffect, useState } from 'react';
import '../../index.css';

const W3Challenge2 = () => {
    const [usrData, setUsrData] = useState({
        name: '',
        website: '',
        email: '',
        phone: '',
    });

    function getRandomNum(lowerLim, upperLim) {
        return Math.floor(Math.random() * (upperLim - lowerLim + 1)) + lowerLim;
    }

    const getUsersData = async () => {
        const usrDataResponse = await fetch(
            `https://jsonplaceholder.typicode.com/users/${getRandomNum(1, 10)}`
        );

        const usrJsonData = await usrDataResponse.json();
        setUsrData({
            name: usrJsonData.name,
            website: usrJsonData.website,
            email: usrJsonData.email,
            phone: usrJsonData.phone,
        });
    };

    useEffect(() => {
        getUsersData();
    }, []);

    return (
        <div className="challengeDisplayBox">
            <h3>Week 3 - Challenge 2</h3>
            <button id="resetBtn" onClick={getUsersData}>
                Reset
            </button>
            <div>
                <div id="name">Name:&nbsp;{usrData.name}</div>
                <div id="website">Website:&nbsp;{usrData.website}</div>
                <div id="email">Email:&nbsp;{usrData.email}</div>
                <div id="phone">Phone:&nbsp;{usrData.phone}</div>
            </div>
        </div>
    );
};

export default W3Challenge2;
```


### Challenge 3: ___React Router Blog___ <a name="week3challenge3"></a>
Create a blog with React Router and get info from posts from a json file.

#### My solution approach:
***App.js***
```js
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogHome from './Components/BlogHome';
import BlogContent from './Components/BlogContent';

function App() {

    const [blogEntries, setBlogEntries] = useState([]);

    const getBlogData = async () => {
        const blogDataFromFile = await fetch('blogContent.json');
        const blogDataJSON = await blogDataFromFile.json();
        console.log(blogDataJSON);
        setBlogEntries(blogDataJSON);
        console.log(blogEntries);
    };

    useEffect(() => {
        getBlogData();
    }, []);

    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BlogHome blogData={blogEntries}/>} />
                    {blogEntries.map(
                        (entry,index)=>{
                            return <Route key={index} path={entry.url} 
                                element={<BlogContent data={entry}/>}/>
                        }
                    )}

                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}
export default App;
```

***BlogHome.jsx***
```js
import React from 'react';
import BlogIndex from './BlogIndex';
import '../index.css';

const BlogHome = (props) => {
 
    return (
        <React.Fragment>
            <div style={{ margin: '20px' }}>
                <h2>Luis' Technical BLOG</h2>
                <div>
                    {props.blogData.map((post, index) => (
                        <BlogIndex data={post} idk={index}/>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};
export default BlogHome;
```

***BlogIndex.jsx***
```js
import React from 'react';
import '../index.css';

const BlogIndex = (props) => {
    return (
        <React.Fragment>
            <div id={`bEntry-${props.idk}`}>
                <li className='topicTitle'>
                    <a href={props.data.url}>{props.data.topic}</a> &nbsp;
                    <span className='topicPublished'>
                        {props.data.publisher} - {props.data.publishDate}
                    </span>
                </li>
            </div>
        </React.Fragment>
    );
};
export default BlogIndex;
```

***BlogContent.jsx***
```js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const BlogContent = (props) => {
    const navigate = useNavigate();

    console.log(props);

    return (
        <React.Fragment>
            <h1>{props.data.topic}</h1>
            <h3>
                {props.data.publisher} -
                <span style={{ fontSize: '12px' }}>
                    Publish date: {props.data.publishDate}
                </span>
            </h3>
            <hr />
            <div>{props.data.content}</div>
            <hr />

            <button
                onClick={() => {
                    navigate('/');
                }}>
                Return Home
            </button>
        </React.Fragment>
    );
};

export default BlogContent;
```


---
### Week 4 <a name="week4"></a>
---
### Challenge 1: ___Two to One___ <a name="week4challenge1"></a>
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

#### My solution approach:
```js
import React from 'react';
import '../../index.css';

/**
 * TwoToOne
 * @param {*} props 
 * @returns 
 */
const W4Challenge1 = (props)=> {

    function TwoToOne(stringA, stringB) {
        var stringC = stringA.trim() + stringB.trim();
        var arrC = stringC.split('').sort();
        var uniques = arrC.filter(
            (elem, index) => arrC.indexOf(elem) === index
        );

        return uniques;
    }

    return (
        <>
            <div className="challengeDisplayBox">
                <h3>Week 4 - Challenge 1</h3>
                <div>{`String 1: ${props.stringA}`}</div>
                <div>{`String 3: ${props.stringB}`}</div>
                <div>{`Longest unique string: ${TwoToOne(props.stringA, props.stringB)}`}</div>
            </div>
        </>
    );

};


export default W4Challenge1;
```
