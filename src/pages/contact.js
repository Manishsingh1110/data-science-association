import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
const Contacts = () => {
    return (
        <main id="main" className='overflow-x-hidden'>
            <Navbar />
            <section>
                <div className="breadcrumbs flex align-center " style={{ backgroundImage: "url(../assets/headers/contact-header.jpg)" }}>
                    <div className="container place-content-center   md:left-16  lg:left-0   left-0 relative flex flex-col text-center">
                        <span className={`text-5xl opacity-100 dark:opacity-100 title`}>Contact us</span>
                        <h2 className={`text-4xl text-center text-white lg:px-72 md:px-20 px-5 relative -top-5`}>
                            Know Details About Our Association
                        </h2>
                    </div>
                </div>
            </section>
            <section id="contact" className="contact">
                <div className="position-relative" data-aos="fade-up">
                    <div className="flex py-10 z-20 px-2 md:px-10 lg:px-20 flex-wrap justify-content-end">
                        <div className="md:block hidden w-1/2 pl-40 pt-20" data-aos="fade-up" data-aos-delay="100">
                            <div className="info-item py-3 flex">
                                <div>
                                    <h4>Location:</h4>
                                    <p>Saraswati College of Engineering ,<br />
                                 Plot No. 46 Sector 5 <br /> Near MSEB Sub Station,<br />
                                Kharghar, Navi Mumbai 410210<br />
                                India <br /><br />
                            </p>
                                </div>
                            </div>
                            <div className="info-item py-3 flex">
                                <div>
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                            <div className="info-item py-3 flex">
                                <div>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55</p>
                                </div>
                            </div>

                        </div>
                        <div className="md:w-1/2  w-full px-2 md:px-10 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Subject</label>
                                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700  px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Contacts


