import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import findCarBanner from '../assets/images/findCarBanner.png';

const FindCar = () => {
    return (
        <div className="bg-gradient-to-l from-white to-[#f7d4d5]  ">
            <div className="container mx-auto">
                <div className="py-[38px] grid grid-cols-2 gap-4">
                    <div className="findCarHeading flex flex-col justify-center gap-4">
                        <h2 className='text-[30px] text-[#d82628] font-semibold'>Find Your Dream Car</h2>
                        <p className='text-[#212529] text-[15px] font-semibold'>Browse thousands of listings to find the perfect car that suits your lifestyle and budget. From luxury sedans to budget-friendly hatchbacks, explore verified listings with detailed specifications, photos, and seller information — all in one place. Your dream car is just a click away!</p>
                        <button className='bg-[#d8262e] hover:bg-[#b82027] transition-all duration-300 w-fit flex items-center py-[10px] px-[20px] text-white rounded-sm'>Search <IoSearchOutline className='ml-1' /></button>
                    </div>
                    <div className="">
                        <img src={findCarBanner} alt="findCarBanner" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindCar
