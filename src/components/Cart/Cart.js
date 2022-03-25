import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h1 className='text-2xl font-bold font-sans py-4 text-center'>Book Basket</h1>
            <p className='texl-lg font-medium'>Choose {cart.length} Books</p>
        </div>
    );
};

export default Cart;