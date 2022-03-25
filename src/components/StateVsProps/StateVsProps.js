import React from 'react';

const StateVsProps = () => {
    return (
        <div className='mb-10'>
            <h3 className='text-3xl font-bold mb-3'>State VS Props</h3>
            <p className='mx-20 text-justify'>States are mutable and can be changes by any activity within the component it is created on. Whereas, Props is a read-only element. Props are immutable and cannot be changed. Props is like an argument to send data from component to component. State stores the changes of a component. State is a stateful component, on the other hand props is a stateless component. </p>
        </div>
    );
};

export default StateVsProps;