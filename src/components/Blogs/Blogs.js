import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            {/* <h1> Question And Answers </h1> */}
            <div className='ans-container'>
                <div className='ans-div'>
                    <h2> What is Context API ? </h2>
                    <p> The Context API is a React structure. It enables us to exchange unique details and assists in solving prop-drilling from all levels of our application. It provides a way to pass data through the component tree without having to pass props down manually at every level. It can solve a lot of problems that modern applications face related to state management and how they’re passing state to their components. </p>
                </div>
                <div className='ans-div'>
                    <h2> What is Semantic tag ?  </h2>
                    <p>Semantic tags provide information about the contents of those tags that goes beyond just how they look on a page.A semantic element clearly describes its meaning to both the browser and the developer. Examples of non-semantic elements: div and span - Tells nothing about its content. Examples of semantic elements: form , table , and article - Clearly defines its content.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;