import React from 'react'
import Banner from './Banner'
import FeaturedAdvertisement from './FeaturedAdvertisement'
import FilterBrands from './FilterBrands'
import FindCar from './FindCar'
import LatestCars from './LatestCars'
import AllCarType from './AllCarType'
import HowItWorks from './HowItWorks'
import Footer from './Footer'
import SaleCar from './SaleCar'

const Home = () => {
  return (
    <div className='bg-[#f8f9fa]'>
      <Banner />
      <FeaturedAdvertisement />
      <FilterBrands />
      <FindCar />
      <LatestCars />
      <div className='w-full bg-[#f8f9fa]'>
        <AllCarType />
        <HowItWorks/>
      </div>
      <SaleCar/>
      <Footer/>
    </div>
  )
}

export default Home
