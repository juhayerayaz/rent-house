import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingModal = ({ bookings, setBookings }) => {
    const { name, id } = bookings;
    const navigate = useNavigate();

    const navigateToBooking = id => {
        navigate(`/property/${id}`);
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are You Sure?</h3>
                    <p className="py-4">If you want to book this property please click on "confirm"</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" onClick={() => navigateToBooking(id)} className="btn btn-xs btn-accent">Confirm</label>
                        <label htmlFor="my-modal-6" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;