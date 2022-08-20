import React from 'react';
import { Link, useParams } from 'react-router-dom';

const BookProperty = () => {
    const { propertyId } = useParams();
    return (
        <div>
            <h2 className='text-center my-16'>Welcome to detail: {propertyId}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary text-white'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default BookProperty;