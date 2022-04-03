import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const AddedProduct = ({ addedProduct, handleProductDelete }) => {
    return (
        <div className='flex justify-between items-center border-2 rounded-md border-slate-400 p-3 my-3 mx-4 md:mx-0'>
            <h6 className='text-sm font-semibold text-left w-4/5'>{addedProduct.name}</h6>
            <button onClick={() => handleProductDelete(addedProduct)}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    );
};

export default AddedProduct;