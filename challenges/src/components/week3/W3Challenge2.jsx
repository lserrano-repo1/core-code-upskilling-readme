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
