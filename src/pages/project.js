import React, { useState } from 'react'
import Footer from './footer'
import Navbar from './navbar'
import Allprojects from '../data/Allprojects'
const Projects = () => {
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    const result = shuffle(Allprojects);
    const [projects, setprojects] = useState(result)
    const filteritem = (cat) => {
        const updatedproject = Allprojects.filter((ele) => {
            return ele.category === cat;
        })
        setprojects(updatedproject)

    }
    const setall = () => {
        const result = shuffle(Allprojects);
        setprojects(result)
    }
    return (
        <main id="main" className='overflow-x-hidden'>
            <Navbar />
            <section>
                <div className="breadcrumbs flex align-center " style={{ backgroundImage: "url(../assets/headers/about-header.jpg)" }}>
                    <div className="container  place-content-center  relative flex md:left-16  lg:left-0   left-0 flex-col text-center">
                        <span className={`text-5xl opacity-100 dark:opacity-100 title`}>Our Projects</span>
                        <h2 className={`text-4xl text-center text-white lg:px-72 md:px-20 px-5 relative -top-5`}>
                            Know Details About Our Association
                        </h2>
                    </div>
                </div>
            </section>
            <section id="portfolio" className="portfolio">
                <div className="py-20" data-aos="fade-up">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-gray-500  tracking-widest font-medium title-font mb-1">one project at a time</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-500 ">"Empowering our community through action."</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 ">Our goals are related to the mission and vision of the association, and are aligned with the values and beliefs of the organization. Projects can take many forms, depending on the nature and purpose of the association. Some examples of projects that we undertake include organizing events or activities, raising funds, promoting awareness about a particular issue, providing resources or support to members, and advocating for change.</p>
                    </div>
                    <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">
                        <ul className="portfolio-flters justify-evenly pb-10 px-5 md:px-20 lg:px-96 flex flex-wrap" data-aos="fade-up" data-aos-delay="100">
                            <button type="button" onClick={() => setall()} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">All</button>
                            <button type="button" onClick={() => filteritem("website")} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Web development</button>
                            <button type="button" onClick={() => filteritem("app")} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">App development</button>
                            <button type="button" onClick={() => filteritem("other")} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Others</button>
                        </ul>
                        <div className="flex flex-wrap px-2 md:px-10 lg:px-20  portfolio-container" data-aos="fade-up" data-aos-delay="300">
                            {(projects.map((singleroject) => {
                                return (
                                    <div className="lg:w-1/3 md:w-1/2 w-full   overflow-hidden p-2" key={singleroject.href} data-aos="zoom-out" data-aos-delay="100">
                                        <div data-aos="fade-up" data-aos-delay="300" className=" mr-2 h-64 overflow-y-hidden  portfolio-item filter-app" style={{ backgroundImage: `url(${singleroject.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                            <div className="portfolio-info bg-slate-700">
                                                <h4 className='text-3xl text-white text1 pb-5'>{singleroject.type}</h4>
                                                <p className='text-white text-xs pb-5'>{singleroject.description}</p>
                                                <a href={singleroject.href} className="text-gray-200 text-sm py-2 border rounded-lg px-5  inline-flex items-center">View code
                        </a>
                                            </div>
                                        </div>
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

export default Projects