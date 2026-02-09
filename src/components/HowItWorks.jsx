import React from 'react'
import howitworkscar from '../assets/images/howitworkscar.png';
import WorkCard from './WorkCard';

const HowItWorks = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-2 gap-4 mt-[40px]">
                <div className="flex flex-row items-end bg-[url('/images/shapeOne.png')] bg-no-repeat">
                    <img src={howitworkscar} alt="" />
                </div>
                <div className="commonHeading mt-[40px] mb-[22px]">
                    <h2 className='text-[30px] font-semibold text-[#d8262e]'>How It Works</h2>
                    <p className='mb-[20px]'>Explore cars by type to find the perfect match for your lifestyle — whether it's a sedan, SUV, hatchback, or convertible.</p>
                    <WorkCard />
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
