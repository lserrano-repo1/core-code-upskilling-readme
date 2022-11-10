import React, { useEffect, useState } from 'react';
import '../../../index.css';

const W3Challenge3 = () => {
    const [blogEntries, setBlogEntries] = useState([]);

    const getBlogData = async() => {
        const blogDataFromFile = await fetch('blogContent.json');
       //const blogDataFromFile = await fetch('https://jsonplaceholder.typicode.com/posts');
        const blogDataJSON = await blogDataFromFile.json();
        console.log(blogDataJSON);
        setBlogEntries(blogDataJSON);

        console.log(blogEntries);
    };

    useEffect(() => {
        getBlogData();
    }, []);

    return (
        <div className="challengeDisplayBox">
            <h3>Week 3 - Challenge 3</h3>
            <div>LUI's programming BLOG</div>
            <div>{blogEntries.map((post,index)=>(
                <div key={index} id="blogentry" 
                    style={{backgroundColor:'bisque', borderStyle:'dotted'
                    , borderWidth:'thin', padding:'4px', margin:'4px', width:'300px'}}>
                    <div style={{fontSize:'18px', fontWeight:'bold'}}>{post.topic}</div>
                    <div style={{fontStyle:'italic', color:'blue'}}>{post.publisher} - {post.publishDate}</div>
                    <p>{post.content}</p>
                    
                </div>
                 
            ))}
               
            </div>
        </div>
    );
};

export default W3Challenge3;
