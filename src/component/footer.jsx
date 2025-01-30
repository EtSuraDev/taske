import React from 'react'
import logo from "./assets/logo.svg"
import facebook from "./assets/Facebook_White.svg"
import facebook_ from "./assets/Facebook_White.svg"
import twitter from "./assets/Twitter_White.svg"

export default function footer() {
  return (
    <div className=' w-full bg-[#071629] flex justify-between px-[10px] py-[70px] sm:p-[70px] md:p-[110px] relative '>
      <div>
        <img src={logo} alt="" className=' custom:w-[170px] w-[140px] cursor-pointer ' />
      </div>
      <div className=' flex gap-x-4 '>
        <img src={facebook} alt="" className=' custom:w-[30px] w-[20px] cursor-pointer ' />
        <img src={twitter} alt="" className=' custom:w-[30px] w-[20px] cursor-pointer ' />
        <img src={facebook_} alt="" className=' custom:w-[30px] w-[20px] cursor-pointer ' />
      </div>
      <p className=' text-white absolute bottom-0 left-[45%] text-[10px] '>by <a href="" className=' font-bold hover:text-[#C271FF] ' > @EtSuraDev </a></p>
    </div>
  )
}
