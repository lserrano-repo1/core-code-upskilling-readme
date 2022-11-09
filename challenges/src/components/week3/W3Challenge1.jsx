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
