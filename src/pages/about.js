import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import GalleryComponent from './Gallery_component'
import { TiTick } from 'react-icons/ti';
const Abouts = () => {
    return (
        <main id="main" className='overflow-x-hidden'>
            <Navbar />
            <section>
                <div className="breadcrumbs flex text-center align-center " style={{ backgroundImage: "url(../assets/headers/about-header.jpg)" }}>
                    <div className="container place-content-center  relative flex md:left-16  lg:left-0   left-0 flex-col text-center">
                        <span className={`text-5xl opacity-100  dark:opacity-100 title`}> ABOUT US </span>
                        <h2 className={`text-4xl text-center text-white lg:px-72 md:px-20 px-5 relative -top-5`}>
                            Know Details About Our Association
                        </h2>
                    </div>
                </div>
            </section>
            <section id="about" className="about text-black">
                <div className="lg:px-40 md:px-10 px-3 md:pt-10 pt-20" data-aos="fade-up">
                    <div className="flex flex-wrap gy-4" data-aos="fade-up">
                        <div className="md:w-2/5 w-full md:px-10 px-0 mb-10">
                            <img className="object-cover object-center  rounded-lg" alt="hero" src="./assets/sq_img_6.jpg" />
                        </div>
                        <div className="md:w-3/5 w-full text-black">
                            <div className=" text-black md:px-0 px-8">
                                <h3 className={`text-5xl opacity-72 dark:opacity-72 title md:visible hidden`}>CURIOUS ?</h3>
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-500 ">Get to know about us
                                    <br className="hidden lg:inline-block text-gray-500 " />relive our journey
                                </h1>
                                <p className="mb-8 leading-relaxed text-gray-500 ">Get acquainted with our team and understand how we work and proceed towards success.</p>
                                <ul>
                                    <li className="mt-4 text-gray-500 "><TiTick className='inline'/> Associations is formed around a shared interest or objective, such as promoting a particular profession, advancing a cause, or fostering social connections.</li>
                                    <li className="mt-4 text-gray-500 "><TiTick className='inline'/> DSSA have a set of rules and regulations that govern the operation of the organization and the behavior of its members.</li>
                                    <li className="mt-4 text-gray-500 "><TiTick className='inline'/> We also have a variety of channels for communicating with members, such as newsletters, email lists, social media, or websites.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="why-us" className="why-us">
                <div className="md:px-10 lg:px-40 pb-20  px-5" data-aos="fade-up">
                    <div className="text-center pb-10">
                        <h2 className='text-3xl text-black'>Our Believes</h2>
                        <p className='px-5 pt-5 text-gray-500 '>Come join us in our journey to growth and betterment.</p>
                    </div>
                    <div className="flex flex-wrap bg-slate-50" data-aos="fade-up" data-aos-delay="200">
                        <div className="md:w-1/2 w-full md:h-auto h-96 relative bg-cover" data-aos="zoom-in" style={{ backgroundImage: "url(../assets/why-us-bg.jpg)" }}></div>
                        <div className="md:w-1/2 w-full slides relative">
                            <div className="slides-1 swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide" data-aos="fade-left" data-aos-delay="500">
                                        <div className="item" >
                                            <h3 className="mb-3 text-black px-10 text-3xl py-5 mt-5">Let's grow  together</h3>
                                            <p className='text-gray-500 px-10 text-xl pb-40 '>The DSSA family believes in action, progress, and growth. The young leaves has achieved several milestones in its active years till now, but nothing keeps us from seeking more and more.  we aim to break our own records . That is not all, we are also determined to become the best branch by the end of 2022.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section id="call-to-action" className="call-to-action">
                <div className="flex justify-center align-middle  text-center" data-aos="fade-up">
                    <div className="justify-center place-content-center">
                        <div className="lg:w-1/2 w-full lg:left-80  relative text-center">
                            <h3 className='text-3xl pb-5 text-white'>Empowering students, one voice at a time</h3>
                            <p className='text-sm pb-3 text-white'>DSSA emphasizes the importance of giving students a platform to speak out and advocate for themselves and their fellow students. It also suggests that by working together and using their collective voices, students can make a real difference and create positive change within their community.</p>
                            <a className="cta-btn text-white" href="/">Call To Action</a>
                        </div>
                    </div>
                </div>
            </section>
            <GalleryComponent/>
            <Footer />
        </main>
    )
}

export default Abouts