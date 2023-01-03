import React, { useState } from 'react'
import Footer from './footer'
import Navbar from './navbar'
import galleryphotos from '../data/galleryphotos'
const Gallerys = () => {
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    const result = shuffle(galleryphotos);
    const [photos, setphotos] = useState(result)
    const filteritem = (cat) => {
        const updatedphotos = galleryphotos.filter((ele) => {
            return ele.category === cat;
        })
        setphotos(updatedphotos)
    }
    const setall = () => {
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }
        const result = shuffle(galleryphotos);
        setphotos(result)
    }
    return (
        <main id="main" className='overflow-x-hidden'>
            <Navbar />
            <section>
                <div className="breadcrumbs flex align-center " style={{ backgroundImage: "url(../assets/headers/about-header.jpg)" }}>
                    <div className="container  place-content-center  relative flex md:left-16  lg:left-0   left-0 flex-col text-center">
                        <span className={`text-5xl opacity-100 dark:opacity-100 title`}>Our Gallery</span>
                        <h2 className={`text-4xl text-center text-white lg:px-72 md:px-20 px-5 relative -top-5`}>
                            Know Details About Our Association
                        </h2>
                    </div>
                </div>
            </section>
            <section id="portfolio" className="portfolio">
                <div className="py-20" data-aos="fade-up">
                    <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">
                        <ul className="portfolio-flters justify-evenly pb-10 px-5 md:px-20 lg:px-80 flex flex-wrap" data-aos="fade-up" data-aos-delay="100">
                            <button type="button" onClick={() => setall()} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">All</button>
                            <button type="button" onClick={() => filteritem("days")} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Days</button>
                            <button type="button" onClick={() => filteritem("nakshatra")} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Nakshatra</button>
                            <button type="button" onClick={() => filteritem("sports")} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Sports</button>
                            <button type="button" onClick={() => filteritem("events")} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Event</button>
                            <button type="button" onClick={() => filteritem("iv")} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Industrial visit</button>
                        </ul>
                        <div className="flex flex-wrap px-2  lg:px-20 portfolio-container" data-aos="fade-up" data-aos-delay="300">
                            {(photos.map((singlephoto) => {
                                return (
                                    <div key={singlephoto.src} data-aos="fade-up" className="lg:w-1/3 md:w-1/2 w-full h-64 overflow-y-hidden py-3 px-5 portfolio-item filter-app">
                                        <img src={singlephoto.src} alt="" />
                                    </div>
                                )
                            }))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Gallerys