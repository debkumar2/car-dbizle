import React from 'react'
import allBrandList from '../models/allBrandList'

const FilterBrands = () => {
    return (
        <div className='container mx-auto'>
            <div className="commonHeading mt-[40px] text-center mb-[22px]">
                <h2 className='text-[30px] font-semibold text-[#d8262e]'>Browse By Brand Name</h2>
                <p>Explore cars by selecting your preferred brand. Find listings from top automotive manufacturers to match your style, performance, and budget</p>
            </div>
            <div className="brandContainer grid grid-cols-4 gap-4">
                {allBrandList.slice(0, 12).map((brand, index) => (
                    <div key={brand.id} className="brandDel h-[140px] p-[15px] bg-white flex items-center justify-center flex-col gap-2 shadow-xl transition-all duration-300 hover:shadow-xl/30 rounded-md">
                        <div className="w-[84px] h-[84px]">
                            <img src={brand.imageUrl} alt={brand.brandName} className='w-full h-full' />
                        </div>
                        <h5 className='text-[15px] font-[#OD1927]'>{brand.brandName}</h5>
                    </div>
                ))}
            </div>
            <div className="viewAll py-6 text-center">
                <button className='bg-[#d8262e] py-[6px] px-[14px] text-[16px] text-white rounded-md'>View All</button>
            </div>
        </div>
    )
}

export default FilterBrands
