import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-[#0d1927] my-[40px]'>
            <div className="container mx-auto">
                <div className="flex justify-between py-[45px]">
                    <div className="text-white">
                        <h5 className='text-[20px] mb-[15px] font-semibold'>Comapny</h5>
                        <ul>
                            <li className='mb-2 text-[#c0c0c0]'><Link>About Us</Link></li>
                            <li className='mb-2 text-[#c0c0c0]'><Link>Contact</Link></li>
                            <li className='mb-2 text-[#c0c0c0]'><Link>Help</Link></li>
                            <li className='mb-2 text-[#c0c0c0]'><Link>Terms of Use</Link></li>
                            <li className='mb-2 text-[#c0c0c0]'><Link>Privacy Policy</Link></li>
                        </ul>
                    </div>
                   <div className="text-white">
                        <h5 className='text-[20px] mb-[15px] font-semibold'>City</h5>
                        <ul>
                            <li className='mb-2 text-[#c0c0c0]'><Link>Abu Dhabi</Link></li>
                            <li className='mb-2 text-[#c0c0c0]'><Link>Dubai</Link></li>
                            <li className='mb-2 text-[#c0c0c0]'><Link>Al Ain</Link></li>
                            <li className='mb-2 text-[#c0c0c0]'><Link>Ajman</Link></li>
                            <li className='mb-2 text-[#c0c0c0]'><Link>Fujairah</Link></li>
                            <li className='mb-2 text-[#c0c0c0]'><Link>Ras Al Khaimah</Link></li>
                            <li className='mb-2 text-[#c0c0c0]'><Link>Sharjah</Link></li>
                            <li className='mb-2 text-[#c0c0c0]'><Link>Umm Al Quwain</Link></li>
                        </ul>
                    </div>
                   <div className="text-white">
                        <h5 className='text-[20px] mb-[15px] font-semibold'>Main Categories</h5>
                        <ul>
                            <li className='mb-2 text-[#c0c0c0]'><Link>Used Car</Link></li>
                            <li className='mb-2 text-[#c0c0c0]'><Link>Car Accessories</Link></li>
                            <li className='mb-2 text-[#c0c0c0]'><Link>Rent A Car</Link></li>
                            <li className='mb-2 text-[#c0c0c0]'><Link>Heavy Vehicles</Link></li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h5 className='text-[20px] mb-[15px] font-semibold'>Social Network</h5>
                        <ul className='flex gap-4'>
                            <li><Link><FaFacebookF className='text-[#c0c0c0] transition-all duration-300 hover:text-white font-semibold' /></Link></li>
                            <li><Link><FaXTwitter className='text-[#c0c0c0] transition-all duration-300 hover:text-white  font-semibold' /></Link></li>
                            <li><Link><FaInstagram className='text-[#c0c0c0] transition-all duration-300 hover:text-white  font-semibold' /></Link></li>
                            <li><Link><FaLinkedinIn className='text-[#c0c0c0] transition-all duration-300 hover:text-white  font-semibold' /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="subfooter bg-[#d82628] py-4 text-center text-white">
                <p>© 2026 . All Rights Reserved.</p>
            </div>
        </div>
    )   
}

export default Footer
