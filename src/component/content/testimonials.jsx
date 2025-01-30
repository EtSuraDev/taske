import React from 'react'
import img from "../assets/Bitmap.png"

export default function testimonials() {
  return (
    <div className=' flex w-full justify-center bg-[rgb(194,113,255)] border-none text-white p-[10px] py-[70px] '>
        <div className=' flex flex-col custom:flex-row md:w-[80%] lg:w-[65%] w-[100%] justify-around items-center'>
            <div className='w-fit'>
                <img src={img} alt="" className=' w-[100px] md:w-[160px] rounded-full ' />
            </div>
            <div className=' w-[70%] flex flex-col custom:items-start items-center '>
                <h2 className=' mb-[15px] font-extralight text-[15px] '>
                    « Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun!
                </h2>
                <p className=' font-bold '>
                    Person Name
                </p>
                <p className='font-extralight text-[15px]' >
                    weather presenter
                </p>
            </div>
        </div>
    </div>
  )
}
