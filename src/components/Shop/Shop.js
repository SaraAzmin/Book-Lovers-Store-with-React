import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import './Shop.css';
import Book from '../Book/Book';

const Shop = () => {

    const [books, setBooks] = useState([]);

    //fetching the fake data
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    return (
        <div id='shop-container' className='grid md:flex px-10'>
            <div id='product-container' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 md:w-3/4 px-5 md:pr-0'>
                {
                    books.map(book => <Book book={book} key={book.id}></Book>)
                }

            </div>
            <div id='cart-container' className='md:w-1/4 order-first md:order-last'>
                <h1>cart</h1>
            </div>
        </div>
    );
};

export default Shop;