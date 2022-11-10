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
