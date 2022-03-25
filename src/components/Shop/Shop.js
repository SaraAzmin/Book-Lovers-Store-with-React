import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import './Shop.css';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [books, setBooks] = useState([]);

    const [cart, setCart] = useState([]);

    //fetching the fake data
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    //event handler for add to cart button of books
    const addToCartHandler = (book) => {

        const newCart = [...cart, book];
        setCart(newCart);
    }

    return (
        <div id='shop-container' className='grid md:flex'>
            <div id='product-container' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 md:w-4/5 px-12'>
                {
                    books.map(book => <Book book={book} key={book.id} addToCartHandler={addToCartHandler}></Book>)
                }

            </div>
            <div id='cart-container' className='md:w-1/5 order-first md:order-last bg-blue-100'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;