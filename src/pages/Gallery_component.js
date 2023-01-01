import React from 'react'
import {
	Link
  } from "react-router-dom";
const GalleryComponent = () => {
  return (
    <section className="text-gray-600 body-font ">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20 ">
                        <div className="sm:text-3xl text-2xl font-medium title-font w-full lg:mb-0 mb-4">
                            <h1 className="text-5xl text-gray-500 "><span className={`text-5xl dark:opacity-72 title`}>OUR</span><br /> Gallery</h1>
                            <div className="hh-50"></div>
                            <p className='px-5 pt-5 text-gray-500 '>"Unleash your creativity at our gallery."</p>
                            <p className='text-lg text-gray-500 '>the gallery is a place where people can find inspiration and new ideas, and where they can let their creativity flow</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-full md:w-1/2">
                            <div className="md:p-2 p-1 w-full  md:w-1/2" data-aos="zoom-in" data-aos-delay="100">
                                <img alt="gallery" className="w-full object-cover h-full object-center block grayscale-0" src="https://i.postimg.cc/0NSf6zKt/Gallery1.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-full md:w-1/2" data-aos="zoom-in" data-aos-delay="100">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.postimg.cc/pL4CXfrh/Gallery2.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-full md:w-full" data-aos="zoom-in" data-aos-delay="100">
                                <img alt="gallery" className="w-full h-full object-cover object-center block " src="https://i.postimg.cc/HxCtbTQT/Gallery3.jpg" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-full md:w-1/2" data-aos="zoom-in" data-aos-delay="100">
                            <div className="md:p-2 p-1 w-full md:w-full" data-aos="zoom-in" data-aos-delay="100">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.postimg.cc/fLjfK1Km/Gallery4.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-full md:w-full" data-aos="zoom-in" data-aos-delay="100">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.postimg.cc/1XmcYMCT/Gallery5.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className='pt-5 text-center'>
                <Link aria-current="page" href="/gallery"><button type="button" className="rounded-lg border-2 py-1 text-md hover:bg-slate-500 hover:text-white text-slate-500 px-2 border-slate-500 ms-3">Click here to see more</button></Link>
                </div> 
                </div>
                                                  
            </section>
  )
}

export default GalleryComponent