import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 py-3 shadow pl-8">
            <div>
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60">
                        <Link to='/rent' className='btn btn-ghost hover:text-primary font-semi-bold'>Rent</Link>
                        <Link to='/buy' className='btn btn-ghost hover:text-primary font-semi-bold'>Buy</Link>
                        <Link to='/sell' className='btn btn-ghost hover:text-primary font-semi-bold'>Sell</Link>
                        <li tabindex="0">
                            <a className='btn btn-ghost hover:text-primary font-semi-bold' href='/#'>
                                Manage Property
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2 shadow mx-2">
                                <li><a className='btn btn-ghost hover:text-primary font-semi-bold' href='/#'>Manage Property 1</a></li>
                                <li><a className='btn btn-ghost hover:text-primary font-semi-bold' href='/#'>Manage Property 2</a></li>
                            </ul>
                        </li>
                        <li tabindex="0">
                            <a className='btn btn-ghost hover:text-primary font-semi-bold' href='/#'>
                                Resources
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2 shadow mx-2">
                                <li><a className='btn btn-ghost hover:text-primary font-semi-bold' href='/#'>Resource 1</a></li>
                                <li><a className='btn btn-ghost hover:text-primary font-semi-bold' href='/#'>Resource 2</a></li>
                            </ul>
                        </li>
                        <button className='btn btn-outline btn-primary font-bold px-5'>Login</button>
                        <button className='btn btn-primary font-bold px-5 my-3 text-white'>SignUp</button>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl text-primary font-bold" href='/#'>Rent-House</a>
            </div>
            <div className="hidden lg:flex">
                <Link to='/rent' className='btn btn-ghost hover:text-primary font-semi-bold'>Rent</Link>
                <Link to='/rent' className='btn btn-ghost hover:text-primary font-semi-bold'>Buy</Link>
                <Link to='/rent' className='btn btn-ghost hover:text-primary font-semi-bold'>Sell</Link>
                <ul className='menu menu-horizontal p-0'>
                    <li tabindex="0">
                        <a className='btn btn-ghost hover:text-primary font-semi-bold' href='/#'>
                            Manage Property
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-4">
                            <li><a className='btn btn-ghost hover:text-primary font-semi-bold' href='/#'>Manage Property 1</a></li>
                            <li><a className='btn btn-ghost hover:text-primary font-semi-bold' href='/#'>Manage Property 2</a></li>
                        </ul>
                    </li>
                    <li tabindex="0">
                        <a className='btn btn-ghost hover:text-primary font-semi-bold' href='/#'>
                            Resources
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-4">
                            <li><a className='btn btn-ghost hover:text-primary font-semi-bold' href='/#'>Resource 1</a></li>
                            <li><a className='btn btn-ghost hover:text-primary font-semi-bold' href='/#'>Resource 2</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <button className='btn btn-outline btn-primary font-bold px-5'>Login</button>
                <button className='btn btn-primary font-bold mx-4 px-5 text-white'>SignUp</button>
            </div>
        </div>
    );
};

export default Navbar;