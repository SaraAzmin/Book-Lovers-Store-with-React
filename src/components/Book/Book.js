import React from 'react';
import './Book.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Book = ({ book, addToCartHandler }) => {
    return (
        <div className='border-2 border-black relative'>
            <div className='flex justify-center my-4'>
                <img className='w-2/5 ' src={book.picture} alt="" />
            </div>
            <h4 className='text-lg md:text-xl font-bold font-sans'>{book.name}</h4>
            <h6 className='text-lg font-medium mt-2 mb-14'>Price: ${book.price}</h6>

            <button onClick={() => addToCartHandler(book)} className='bg-black text-white w-full absolute bottom-0 left-0 border-2 py-3 font-semibold'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Book;