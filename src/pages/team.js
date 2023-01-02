import React, { useState } from 'react'
import Footer from './footer'
import Navbar from './navbar'
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import Allteam from '../data/Allteam';
const Teams = () => {
    const [Team, setTeam] = useState(Allteam)
    const filteritem = (cat) => {
        const updatedteam = Allteam.filter((ele) => {
            return ele.category === cat;
        })
        setTeam(updatedteam)
    }
    const setall = () => {
        setTeam(Allteam)
    }
    return (
        <main id="main" className='overflow-x-hidden'>
            <Navbar />
            <section>
                <div className="breadcrumbs flex align-center " style={{ backgroundImage: "url(../assets/headers/team-header.jpg)" }}>
                    <div className="container  place-content-center  relative flex md:left-16  lg:left-0   left-0 flex-col text-center">
                        <span className={`text-5xl opacity-100 dark:opacity-100 title`}>Our Team</span>
                        <h2 className={`text-4xl text-center text-white lg:px-72 md:px-20 px-5 relative -top-5`}>
                            Know Details About Our Association
                        </h2>
                    </div>
                </div>
            </section>
            <section id="team" class="team">

                <div className="py-10" data-aos="fade-up">
                    <div className="text-center pb-10">
                        <h2 className='text-3xl text-black'>Our Team</h2>
                        <p className='lg:px-20 md:px-10 pt-5 px-4 text-gray-500 '>DSSA is a group of people who work together towards a common goal or purpose.we are composed of people with different skills, experiences, and backgrounds. Working as a team often involves collaboration, communication, and cooperation, as team members work together to achieve their shared objectives. Our members  support and encourage one another, and provide constructive feedback and guidance to help each other grow and improve.</p>
                    </div>
                    <ul className="portfolio-flters justify-evenly pb-10 px-5 md:px-20 lg:px-80 flex flex-wrap" data-aos="fade-up" data-aos-delay="100">
                        <button type="button" onClick={() => setall()} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">All</button>
                        <button type="button" onClick={() => filteritem("magzine")} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Social media team</button>
                        <button type="button" onClick={() => filteritem("cultural")} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Cultural team</button>
                        <button type="button" onClick={() => filteritem("sports")} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Sports team</button>
                        <button type="button" onClick={() => filteritem("technical")} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Technical team</button>
                    </ul>
                    <div className="flex flex-wrap text-center px-4 md:px-20 lg:px-40 py-4">
                        {(Team.map((Teammember) => {
                            return (
                                <div className="lg:w-1/4 w-1/2   overflow-hidden p-2" key={Teammember.src} data-aos="zoom-out" data-aos-delay="100">
                                    <div class="team-member">
                                        <div class="member-img rounded-xl h-80" style={{ backgroundImage: `url(${Teammember.src})`,backgroundPosition:'center',backgroundSize:'cover' }}>
                                            <div class="social">
                                            <a href="/" className="twitter px-3"><FiTwitter className="text-xl hover:text-blue-500 "/></a>
                                                <a href="/" className="facebook px-3"><FiFacebook className="text-xl hover:text-blue-500 "/></a>
                                                <a href="/" className="instagram px-3"><FiInstagram className="text-xl hover:text-rose-500"/></a>
                                                <a href="/" className="linkedin px-3"><FiLinkedin className="text-xl hover:text-blue-500 "/></a>
                                            </div>
                                        </div>
                                        <div class="member-info">
                                            <h4>{Teammember.name}</h4>
                                            <span>{Teammember.designation}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Teams