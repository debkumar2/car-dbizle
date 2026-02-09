import React from 'react'
import saleCar from '../assets/images/saleCar.png';
const SaleCar = () => {
    return (
        <div className="container bg-[#e4e4e4] mx-auto p-[25px] rounded-lg">
            <div className="grid grid-cols-2 gap-4">
                <div className="findCarHeading flex flex-col justify-center gap-3">
                    <h2 className='text-[30px] text-[#212529] font-semibold'>Want To Sale Your Car ?</h2>
                    <p className='text-[#212529] text-[15px] font-semibold'>Our CarSure experts inspect the car on over 200 checkpoints so you get complete satisfaction and peace of mind before buying.</p>
                    <button className='bg-[#d8262e] hover:bg-[#b82027] transition-all duration-300 w-fit flex items-center py-[10px] px-[20px] text-white rounded-sm'>Sell Your Car</button>
                </div>
                <div className="">
                    <img src={saleCar} alt="findCarBanner" />
                </div>
            </div>
        </div>
    )
}

export default SaleCar
