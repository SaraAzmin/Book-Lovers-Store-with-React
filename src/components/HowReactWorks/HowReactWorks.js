import React from 'react';

const HowReactWorks = () => {
    return (
        <div className='my-10'>
            <h3 className='text-3xl font-bold mb-3'>How React works?</h3>
            <p className='mx-20 text-justify'>While browser uses DOM tree to integrate a website. Which is both expensive and time consuming. React uses virtual DOM to solve these problem and perform better. It simply checks for the changes made and updates the changed part only. Instead of rerandering the whole page every time. React uses Diff algorithm to compare and find the changes between the previous virtual DOM and new one. This makes it easier to distinguish the changes in a short time without going through the whole application.</p>
        </div>
    );
};

export default HowReactWorks;