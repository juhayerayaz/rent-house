import { useState } from 'react';
import { BiBed } from 'react-icons/bi';
import { FaBath } from 'react-icons/fa';
import { GiGreenhouse } from 'react-icons/gi';
import { MdAddShoppingCart } from 'react-icons/md'
import BookingModal from './BookingModal';


const ShowProperty = ({ property }) => {
    const { name, price, beds, bathrooms, size, photoUrl, address, city } = property;
    const [bookings, setBookings] = useState(null);

    // const navigate = useNavigate();

    // const navigateToRentDetail = id => {
    //     navigate(`/property/${id}`);
    // }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-72' src={photoUrl} alt="House" /></figure>
            <div className="card-body">
                <div className="rounded flex items-center px-3 py-1 bg-primary text-white float-left absolute mt-[-50px] ml-[-35px] text-sm"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>Popular</div>
                <div className='flex items-center'>
                    <div>
                        <h2 className="card-title text-primary font-bold">
                            ${price} <span className='text-gray-400'>/month</span>
                        </h2>
                        <h1 className='text-2xl font-bold'>{name}</h1>
                        <p className='text-gray-400'>{address}, {city}</p>
                    </div>
                    <div>
                        {/* <button onClick={() => navigateToRentDetail(id)} className='btn btn-ghost ml-4'><MdAddShoppingCart className='text-4xl' /></button> */}
                        <label onClick={() => setBookings(property)} htmlFor="my-modal-6" className="btn btn-ghost ml-4 modal-button"><MdAddShoppingCart className='text-4xl' /></label>
                    </div>
                </div>
                <div className='divider'></div>
                <div className="card-actions">
                    <div className="flex items-center text-gray-400 indent-2 mx-1"><BiBed />{beds} Beds</div>
                    <div className="flex items-center text-gray-400 indent-2 mx-1"><FaBath />{bathrooms} Bathrooms</div>
                    <div className="flex items-center text-gray-400 indent-2 mx-1"><GiGreenhouse />{size}m2</div>
                </div>
            </div>
            {bookings && <BookingModal bookings={bookings} setBookings={setBookings}></BookingModal>}
        </div>
    );
};

export default ShowProperty;