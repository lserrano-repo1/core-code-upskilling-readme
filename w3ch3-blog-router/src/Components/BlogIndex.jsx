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
