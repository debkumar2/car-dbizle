import React from 'react'
import bannerImage from '../assets/images/bannerImage.jpg';
import carCatImgOne from '../assets/images/carCategoryOne.png';
import carCatImgTwo from '../assets/images/carCategoryTwo.png';
import carCatImgThree from '../assets/images/carCategoryThree.png';
import carCatImgFour from '../assets/images/carCategoryFour.png';
import { NavLink } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
const Banner = () => {
    const carCategory = [
        {
            imageUrl: carCatImgOne,
            categoryName: 'Used Car'
        },
        {
            imageUrl: carCatImgTwo,
            categoryName: 'Car Accessories'
        },
        {
            imageUrl: carCatImgThree,
            categoryName: 'Rent A Car'
        },
        {
            imageUrl: carCatImgFour,
            categoryName: 'Heavy Vehicles'
        },

    ]
    return (
        <div className="w-full h-[465px] relative z-10 bg-[#DBE8F5] py-[30px]">
            <div className="container mx-auto">
                <h1 className='font-semibold text-[37.5px] mb-5'>Buy & Sale Car</h1>
                <h5 className='font-semibold text-[15px] tracking-wide'>Post free Classified Ads of your Cars</h5>
                <div className="">
                    <img src={bannerImage} alt="bannerImage" className='bg-size-[100%] bg-center h-full w-full absolute top-0 left-0 object-cover -z-10' />
                </div>
                <div className="categoryContainer flex mt-[46px] flex flex-col w-[650px]">
                    <ul className='flex gap-4'>
                        {carCategory.map((car, index) => (
                            <li key={index} className='w-[150px] h-[105px] p-2.5 bg-white text-[#0d1927] flex flex-col justify-center items-center rounded-sm hover:bg-[#f7d4d5] transition-all duration-300'>
                                <img className='w-16 h-16 object-cover' src={car.imageUrl} alt="" />
                                <span className='text-center'>{car.categoryName}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="carSearch bg-white p-[15px] flex mt-4 rounded-sm">
                        <input
                            type="text"
                            placeholder="Enter Keyword"
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-200 transition text-[18px]"/>
                        <button className='bg-[#d8262e] hover:bg-[#b82027] transition-all duration-300 ml-2 flex items-center py-[5px] px-[20px] text-white rounded-sm'>Search <IoSearchOutline className='ml-1'/></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner
