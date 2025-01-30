import React from 'react'
import logo from "./assets/logo.svg"
import hamburger from "./assets/hamburger.png"


export default function header() {
  return (
    <div className=' flex items-center justify-between w-full sm:max-w-[630px] px-3 pt-3 md:max-w-[700px] lg:max-w-[870px] xl:max-w-[1100px]  ' >
      <div>
        <img src={logo} alt="" className=' w-[140px] sm:w-[160px] cursor-pointer' />
      </div>


      <div className=' hidden custom:flex text-white text-[12px] justify-between gap-x-4 ' >
        <p className='cursor-pointer hover:text-gray-300'>
          COURSES
        </p>
        <p className='cursor-pointer hover:text-gray-300'>
          PRICING
        </p>
        <p className='cursor-pointer hover:text-gray-300'>
          LOGIN
        </p>
      </div>

      <div className='custom:hidden'>
        <img src={hamburger} className=' w-[30px] custom:hidden ' alt="" />
      </div>
    </div>
  )
}
