import React from 'react';
import './Book.css';

const Book = ({ book }) => {
    return (
        <div className='border-2 rounded-lg border-blue-900'>
            <div className='flex justify-center my-4'>
                <img className='w-2/5 ' src={book.picture} alt="" />
            </div>
            <h4 className='text-lg md:text-xl font-bold'>{book.name}</h4>
            <h6 className='text-lg font-medium mt-2'>Price: ${book.price}</h6>
        </div>
    );
};

export default Book;