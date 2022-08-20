import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Properties.css'
import ShowProperty from './ShowProperty';

const Properties = () => {
    const [properties, setProperties] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [locations, setLocations] = useState(" ");
    const [price, setPrice] = useState(" ");
    const [rentType, setRentType] = useState(" ");
    const [search, setSearch] = useState([]);
    useEffect(() => {
        fetch("properties.json")
            .then((res) => res.json())
            .then((data) => setProperties(data));
    }, []);
    const handleLocation = (event) => {
        const location = event.target.value;
        setLocations(location.toLowerCase());
    }
    const handlePrice = (event) => {
        const price = event.target.value;
        setPrice(price);
    }
    const handleRentType = (event) => {
        const rentType = event.target.value;
        setRentType(rentType);
    }
    const handleSearch = (event) => {
        const splitPrice = price.split("-");
        const filter = properties.filter((p) => p.city === locations && parseInt(splitPrice[0]) <= parseInt(p.price) && parseInt(splitPrice[1]) >= parseInt(p.price) && p.propertyType === rentType)
        setSearch(filter)
    }
    return (
        <div>
            <div className='mt-24 mx-12 lg:mx-56'>
                {/* searching bar start */}
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl lg:text-4xl font-bold'>Search Properties to rent</h1>
                    <input type="search" placeholder='Search with Search Bar' className='input placeholder-accent border-info px-4 lg:px-8 focus:border-0 w-36 lg:w-auto' onBlur={handleLocation} />
                </div>
                {/* searching bar end */}
                {/* filtering bar start */}
                <div className='p-4 lg:p-8 rounded-lg shadow grid grid-cols-3 gap-4 lg:flex items-center lg:justify-between mt-16 mb-36'>
                    <div className=''>
                        <p className='text-gray-400'>Location</p>
                        <div className='text-sm lg:text-lg font-bold'>{locations || <h3 className='text-sm lg:text-lg font-bold'>New york</h3>}</div>
                    </div>
                    <div className='hidden lg:flex divider divider-horizontal'></div>
                    <div>
                        <p className='text-gray-400'>When?</p>
                        <ul><li className='p-0 menu menu-horizontal text-sm lg:text-lg font-bold'><DatePicker
                            className='text-sm lg:text-lg font-bold w-[60px] lg:w-[110px]'
                            closeOnScroll={(e) => e.target === document}
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        /><svg className="fill-current bg-primary rounded-badge bg-opacity-40" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg></li></ul>
                    </div>
                    <div className='hidden lg:flex divider divider-horizontal'></div>
                    <div>
                        <p className='text-gray-400'>Price</p>
                        <ul className="p-0 menu menu-horizontal text-sm lg:text-lg font-bold ">
                            <li tabIndex="0">
                                <label className='p-2'>{price}<svg className="fill-current bg-primary rounded-badge bg-opacity-40" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg></label>
                                <ul className="p-2 bg-base-100 shadow">
                                    <li><input type="submit" value="500-1000" onClick={handlePrice} /></li>
                                    <li><input type="submit" value="1000-1500" onClick={handlePrice} /></li>
                                    <li><input type="submit" value="1500-3000" onClick={handlePrice} /></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden lg:flex divider divider-horizontal'></div>
                    <div className='flex items-center'>
                        <div>
                            <p className='text-gray-400'>Rental Type</p>
                            <ul className="p-0 menu menu-horizontal text-sm lg:text-lg font-bold ">
                                <li tabIndex="0">
                                    <label className='p-2'>{rentType}<svg className="fill-current bg-primary rounded-badge bg-opacity-40" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg></label>
                                    <ul className="p-2 bg-base-100 shadow">
                                        <li><input type="submit" value="house" onClick={handleRentType} /></li>
                                        <li><input type="submit" value="apartment" onClick={handleRentType} /></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='hidden lg:flex divider divider-horizontal'></div>
                        <button className='btn btn-primary lg:btn-lg ml-5 lg:ml-0' onClick={handleSearch}><p className='text-white'>Search</p>
                        </button>
                    </div>
                </div>
                {/* filtering bar end */}
            </div>
            <div className='lg:mx-40 mx-16 mt-16 mb-48'>
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-4'>
                    {search.map((property) => (
                        <ShowProperty
                            key={property.id}
                            property={property}></ShowProperty>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Properties; 