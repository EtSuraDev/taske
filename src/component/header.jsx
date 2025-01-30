import React from 'react'
import logo from "../assets/logo.svg"

export default function header() {
  return (
    <div className=' flex items-center justify-between w-full sm:max-w-[630px] px-3 pt-3 md:max-w-[700px] lg:max-w-[870px] xl:max-w-[1100px] ' >
      <div>
        <img src={logo} alt="" className=' w-[140px] sm:w-[160px] ' />
      </div>
      <div className=' flex text-white text-[12px] justify-between gap-x-4 ' >
        <p>
          COURSES
        </p>
        <p>
          PRICING
        </p>
        <p>
          LOGIN
        </p>
      </div>
    </div>
  )
}
