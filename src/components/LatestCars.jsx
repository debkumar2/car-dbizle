import React from 'react'
import featuredCarList from '../models/featuredCarList'
import { FaCarSide, FaGears, FaRegBuilding, FaRegCircleUser } from 'react-icons/fa6'
import { LuFuel, LuNotepadText } from 'react-icons/lu'
import { MdOutlineAirlineSeatReclineExtra, MdOutlineLocationOn } from 'react-icons/md'
import { BsSpeedometer2 } from 'react-icons/bs'
import { IoCarSport } from 'react-icons/io5'

const LatestCars = () => {
    return (
        <div className="container mx-auto">
            <div className="commonHeading mt-[40px] text-center mb-[22px]">
                <h2 className='text-[30px] font-semibold text-[#d8262e]'>Latest Cars</h2>
                <p className='text-center'>Explore the newest car listings added to our platform. Stay updated with the latest vehicles for sale from dealers and individual sellers, featuring recent models, great deals, and a variety of options to suit your needs.</p>
            </div>
            <div className="featuredMainCard grid grid-cols-4 gap-6">
                {featuredCarList.map((car,index) => (
                    <div key={car.id} className='featureCard shadow-md border border-[#00000026] rounded-lg hover:shadow-xl/20 transition-all duration-300'>
                        <div className="featureCardImg h-[200px] rounded-lg overflow-hidden">
                            <img src={car.imageUrl} alt="" className='h-full w-full' />
                        </div>
                        <div className="featureCarDetails py-[20px] px-[15px] bg-[#f7efef] rounded-t-lg">
                            <div className="featureCarUpper flex items-center justify-between">
                                <FaRegCircleUser className='text-[22px]'/>
                                <div className="cardModel">
                                    <h4 className='text-[18px] font-semibold text-[#d8262e]'>{car.companyName}</h4>
                                </div>
                            </div>
                            <div className="mainCarDetails">
                                <h3 className='text-[18px]'>{car.brandName}</h3>
                                <h5 className='font-bold w-[250px] truncate'>{car.carText}</h5>
                            </div>
                            <div className="detailsFirst">
                                <div className="commonType flex items-center justify-between">
                                    <div className="flex items-center gap-1">
                                        <LuFuel />
                                        <p>{car.fuelType}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <LuNotepadText />
                                        <p>{car.registration}</p>
                                    </div>
                                      <div className="flex items-center gap-1">
                                        <FaGears />
                                        <p>{car.cc}</p>
                                    </div>
                                </div>
                                 <div className="commonType flex items-center justify-between">
                                     <div className="flex items-center gap-1">
                                        <MdOutlineAirlineSeatReclineExtra />
                                        <p>{car.seatCapacity}</p>
                                    </div>
                                   <div className="flex items-center gap-1">
                                        <FaCarSide />
                                        <p>{car.modelYear}</p>
                                    </div>
                                     <div className="flex items-center gap-1">
                                        <BsSpeedometer2 />
                                        <p>{car.kmRun}</p>
                                    </div>
                                </div>
                                <div className="commonType flex items-center justify-between">
                                     <div className="flex items-center gap-1">
                                        <IoCarSport />
                                        <p>{car.owner}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaRegBuilding />
                                        <p>{car.rto}</p>
                                    </div>
                                </div>
                                <div className="commonType flex items-center gap-1">
                                    <MdOutlineLocationOn />
                                    <p className='w-[250px] truncate'>{car.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LatestCars
