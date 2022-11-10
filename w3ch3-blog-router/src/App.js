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
