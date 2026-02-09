import React from 'react'
import { NavLink } from 'react-router-dom'
import navbarLogo from '../assets/images/logo.png';
import { GrLocationPin } from 'react-icons/gr';
import { IoLogInOutline } from 'react-icons/io5';
import { RiNotification2Line } from 'react-icons/ri';
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BsGlobe2 } from 'react-icons/bs';
import { IoChevronDown } from "react-icons/io5";
const Navbar = () => {
    return (
        <div className="text-[#212529] w-full">
            <div className="container mx-auto py-[20px] flex justify-between items-center">
                <div className="navbarBrand">
                    <NavLink>
                        <img className='h-[52px] w-auto' src={navbarLogo} alt="" />
                    </NavLink>
                </div>
                <ul className='flex gap-x-4 items-center'>
                    <li className="relative group">
                        <NavLink
                            to="#"
                            className="flex items-center gap-1 px-3 py-2 hover:text-primary"
                        >
                            <GrLocationPin />
                            <span>All Cities (UAE)</span>
                            <IoChevronDown
                                className="text-sm"
                            />
                        </NavLink>
                        <div className="absolute left-0 top-full mt-2 w-48 rounded-md bg-white shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Abu Dhabi
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Dubai
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Al Ain
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Ajman
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Fujairah
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Ras Al Khaimah
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Sharjah
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Umm Al Quwain
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <NavLink className='flex items-center gap-1 px-3 py-2 hover:text-primary'>
                            <IoLogInOutline className='' />
                            <span>Log in / Sign up</span>
                        </NavLink>
                    </li>
                    <li className="relative group">
                        <NavLink
                            to="#"
                            className="flex items-center gap-1 px-3 py-2 hover:text-primary"
                        >
                            <BsGlobe2 />
                            <span>EN</span>
                             <IoChevronDown
                                className="text-sm"
                            />
                        </NavLink>

                        <div
                            className="absolute left-0 top-full mt-2 w-36 rounded-md 
               bg-white shadow-lg border border-gray-200
               opacity-0 invisible 
               group-hover:opacity-100 group-hover:visible 
               transition-all duration-200"
                        >
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    English
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Arabic
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className='px-3 py-2 '>
                        <RiNotification2Line />
                    </li>
                    <li className='px-3 py-2 '>
                        <HiOutlineEnvelope />
                    </li>
                    <li>
                        <button className='px-[12px] py-[8px] bg-[#d82628] text-white rounded-sm'>Post Your Ads</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
