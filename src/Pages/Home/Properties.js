import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Properties.css'

const Properties = () => {
    const [property, setProperty] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [locations, setLocations] = useState(" ")
    const [price, setPrice] = useState(" ")
    const [rentType, setRentType] = useState(" ")
    useEffect(() => {
        fetch("properties.json")
            .then((res) => res.json())
            .then((data) => setProperty(data));
    }, []);
    const handleLocation = (event) => {
        const location = event.target.value;
        setLocations(location);
    }
    const handlePrice = (event) => {
        const price = event.target.value;
        setPrice(price);
    }
    const handleRentType = (event) => {
        const rentType = event.target.value;
        setRentType(rentType);
    }
    return (
        <div className='mt-24 mx-56'>
            <div className='flex items-center justify-between'>
                <h1 className='text-4xl font-bold'>Search Properties to rent</h1>
                <input type="search" placeholder='Search with Search Bar' className='input placeholder-accent border-info px-8 focus:border-0' onBlur={handleLocation} />
            </div>
            <div className='p-8 rounded-lg shadow flex items-center mt-16 justify-between'>
                <div className=''>
                    <p className='text-gray-400'>Location</p>
                    <div className='text-lg font-bold'>{locations || <h3 className='text-lg font-bold'>New york</h3>}</div>
                </div>
                <div className='divider divider-horizontal'></div>
                <div>
                    <p className='text-gray-400'>When?</p>
                    <DatePicker
                        className='text-lg font-bold w-[110px]'
                        closeOnScroll={(e) => e.target === document}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                </div>
                <div className='divider divider-horizontal'></div>
                <div>
                    <p className='text-gray-400'>Price</p>
                    <ul class="p-0 menu menu-horizontal text-lg font-bold ">
                        <li tabIndex="0">
                            <label className='p-2'>{price}<svg className="fill-current bg-primary rounded-badge bg-opacity-40" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg></label>
                            <ul class="p-2 bg-base-100 shadow">
                                <li><input type="submit" value="$500-$1000" onClick={handlePrice} /></li>
                                <li><input type="submit" value="$1000-$1500" onClick={handlePrice} /></li>
                                <li><input type="submit" value="$1500-$3000" onClick={handlePrice} /></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='divider divider-horizontal'></div>
                <div>
                    <p className='text-gray-400'>Rental Type</p>
                    <ul class="p-0 menu menu-horizontal text-lg font-bold ">
                        <li tabIndex="0">
                            <label className='p-2'>{rentType}<svg className="fill-current bg-primary rounded-badge bg-opacity-40" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg></label>
                            <ul class="p-2 bg-base-100 shadow">
                                <li><input type="submit" value="House" onClick={handleRentType} /></li>
                                <li><input type="submit" value="Aparatment" onClick={handleRentType} /></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='divider divider-horizontal'></div>
                <button className='btn btn-primary btn-lg'><p className='text-white'>Search</p></button>
            </div>
        </div>
    );
};

export default Properties; 