import React from 'react'
import iconOne from '../assets/images/icon1.png'
import iconTwo from '../assets/images/icon2.png'
import iconThree from '../assets/images/icon3.png'
import iconFour from '../assets/images/icon4.png'


const WorkCard = () => {
    const workList = [
        {
            id: 1,
            icon: iconOne,
            headingText: 'Post Ad with details',
            headingParagraph: 'Post your car ad by filling in essential details like basic information, specifications, and uploading photos or videos. Make your listing stand'
        },
        {
            id: 2,
            icon: iconTwo,
            headingText: 'Listing a Car for Sale',
            headingParagraph: 'Easily list your car for sale by providing details like make, model, price, and photos. Reach thousands of potential buyers in minutes!'
        },
        {
            id: 3,
            icon: iconThree,
            headingText: 'Post Ad with details',
            headingParagraph: 'Browse thousands of listings to find the car that fits your needs. Filter by make, model, price, location, and more to get the best match fast.'
        },
        {
            id: 4,
            icon: iconFour,
            headingText: 'Explore by Car Type',
            headingParagraph: 'Looking for an SUV, sedan, hatchback, or something sportier? Browse cars by type to quickly find the one that suits your lifestyle and driving needs.'
        }
    ]
    return (
        <div className="grid grid-cols-2 gap-3">
            {workList.map((work, index) => (
                <div className="w-[260px] h-[250px] shadow-lg hover:shadow-2xl transition-all duration-300 bg-white p-[15px] rounded-lg">
                    <div className="icon w-[64px] h-[64px] mb-2">
                        <img className='w-full h-full' src={work.icon} alt={work.icon} />
                    </div>
                    <div className="heading">
                        <h4 className='text-[18px] text-[#212529] font-semibold mb-2'>{work.headingText}</h4>
                        <p className='text-[15px] text-[#212529] font-medium mb-2'>{work.headingParagraph}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WorkCard
