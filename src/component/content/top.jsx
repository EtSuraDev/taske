import React from 'react'
import Header from "../header"
import imageOne from "../assets/1.png"
import image_ from "../assets/6.png"
import image__ from "../assets/7.png"
import image___ from "../assets/8.png"

export default function top() {
  return (
    <div className=' top-contect w-full h-fit flex flex-col items-center ' >
        <Header/>
        <h1 className=' text-4xl lg:text-[100px] custom:text-5xl md:text-6xl md:font-bold font-extrabold text-white mt-[80px] md:mt-[140px] lg:mt-[180px] mb-[10px] '>
            Get schooled
        </h1>
        <div className=' text-[12px] text-white flex justify-between gap-x-[50px] mb-[24px] '>
            <p className='cursor-pointer hover:text-gray-300'>
                SMILES
            </p>
            <p className='cursor-pointer hover:text-gray-300'>
                GRIN
            </p>
            <p className='cursor-pointer hover:text-gray-300'>
                LAUGH
            </p>
        </div>
        <button className=' lg:mt-[30px] cursor-pointer border-[#C271FF] py-[8px] px-[15px] rounded-full bg-[#C271FF] text-white text-[14px] mb-[30px] md:mb-[110px] lg:mb-[170px] '  >
            REGISTER FOR FREE
        </button>


        <div className=' text-white text-2xl md:text-4xl font-extralight ' >
            <h2>
                    <span className=' text-[#C271FF] font-bold '>Learn </span> from the pros
            </h2>
        </div>


        <div className=' my-[30px] custom2:mt-[70px] custom2:mb-[130px] w-fit md:w-[70%] flex-wrap flex justify-center text-center md:justify-between custom:px-[10px] items-center gap-x-[20px] md:gap-0 custom:gap-x-[50px] gap-y-10 '>
            <div className=' w-[100px] lg:w-[150px] text-[12px] text-white flex flex-col justify-center   '>
                < img src={imageOne} alt="" className=' w-full rounded-full h-[100px] lg:h-[150px] ' />
                <h3 className=' text-[14px] font-bold '>
                    Phillip Massey
                </h3>
                <p>
                    « Smile of the year » 2018 - 2019
                </p>
            </div>
            <div className=' w-[100px] text-[12px] text-white  flex flex-col justify-center lg:w-[150px] '>
                <img src={image_} alt="" className=' w-full rounded-full h-[100px] lg:h-[150px] ' />
                <h3 className=' text-[14px] font-bold '>
                    Phillip Massey
                </h3>
                <p >
                    « Smile of the year » 2018 - 2019
                </p>
            </div>
            <div className=' w-[100px] text-[12px] text-white  flex flex-col justify-center lg:w-[150px] '>
                <img src={image__} alt="" className=' w-full rounded-full h-[100px] lg:h-[150px] ' />
                <h3 className=' text-[14px] font-bold '>
                    Phillip Massey
                </h3>
                <p>
                    « Smile of the year » 2018 - 2019
                </p>
            </div>
            <div className=' w-[100px] text-[12px] text-white  flex flex-col justify-center lg:w-[150px] '>
                <img src={image___} alt="" className=' w-full rounded-full h-[100px] lg:h-[150px] ' />
                <h3 className=' text-[14px] font-bold ' >
                    Phillip Massey
                </h3>
                <p>
                    « Smile of the year » 2018 - 2019
                </p>
            </div>
        </div>


    </div>
  )
}
