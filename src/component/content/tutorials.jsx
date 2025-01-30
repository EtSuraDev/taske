import React from 'react'
import img from "../assets/Bitmap (3).png"
import one from "../assets/1.png"
import start from "../assets/star_3.svg"




export default function tutorials() {
  return (
    <div className=' py-[80px] flex flex-col items-center w-full '>
      <div className=' w-[350px] '>
        <div>
            <h1>
                Most popular tutorials
            </h1>
        </div>
        <div>
            <div className="carousel ">
                <div id="slide1" className="carousel-item relative w-full flex flex-col items-center ">
                    <div>
                        <img src={img} alt="" className=' w-[350px] ' />
                    </div>
                    <div>
                        <div>
                            <h3>
                                Diagonal Smile
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod
                            </p>
                        </div>
                        <div>
                            <img src={one} alt="" />
                            <p>
                                Phillip Massey
                            </p>
                        </div>
                        <div>
                            <div>
                                <img src={start} alt="" />
                                <img src={start} alt="" />
                                <img src={start} alt="" />
                                <img src={start} alt="" />
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
