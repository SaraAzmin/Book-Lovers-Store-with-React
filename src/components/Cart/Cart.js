import React from 'react';
import AddedProduct from '../AddedProduct/AddedProduct';

const Cart = ({ cart }) => {



    return (
        <div>
            <h2 className='text-2xl font-bold font-sans py-2 text-white text-center bg-black mt-10'>Book Basket</h2>
            <h4 className='texl-xl font-bold my-5'>Choose {cart.length} Books</h4>
            <div className='px-3'>
                {
                    cart.map(addedProduct => <AddedProduct addedProduct={addedProduct}></AddedProduct>)
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default Cart;