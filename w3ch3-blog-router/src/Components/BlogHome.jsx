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
