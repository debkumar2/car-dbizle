import React from 'react'
import carType from '../models/carType'

const AllCarType = () => {
    return (
        <div className='container mx-auto'>
            <div className="commonHeading mt-[40px] text-center mb-[22px]">
                <h2 className='text-[30px] font-semibold text-[#d8262e]'>Browse By Car Type</h2>
                <p>Explore cars by type to find the perfect match for your lifestyle — whether it's a sedan, SUV, hatchback, or convertible.</p>
            </div>
            <div className="grid grid-cols-4 gap-6">
                {carType.map((car, index) => (
                    <div className="flex gap-2 flex-col items-center bg-white p-[15px] shadow-md transition-all duration-300 shadow-xl/30 rounded-lg">
                        <div className="w-[128px] h-[128px]">
                            <img src={car.imgUrl} alt="" className='h-full w-full' />
                        </div>
                        <h5 className='font-[15px] font-semibold'>{car.carTypeName}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllCarType
