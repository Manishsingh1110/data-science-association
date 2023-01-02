import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import achievements from '../data/achievements'
const Achievement = () => {
  return (
    <main id="main" className='overflow-x-hidden'>
      <Navbar />
      <section>
        <div className="breadcrumbs flex align-center " style={{ backgroundImage: "url(../assets/headers/about-header.jpg)" }}>
          <div className="container place-content-center   md:left-16  lg:left-0   left-0 relative flex flex-col text-center">
            <span className={`text-5xl opacity-100 dark:opacity-100 title`}>Our Achievements</span>
            <h2 className={`text-4xl text-center text-white lg:px-72 md:px-20 px-5 relative -top-5`}>
              Know Details About Our Association
            </h2>
          </div>
        </div>
      </section>
      <section >
        <div className="lg:px-40 md:20">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-gray-500  tracking-widest font-medium title-font mb-1">one milestone at a time.</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-500 ">"Honoring the dedication and determination that lead to success."</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 ">Achievements  include accomplishments related to the association's mission and goals, such as organizing successful events or campaigns, raising funds for a particular cause, or advocating for change on campus or in the community</p>
              </div>
              <div className="flex flex-wrap">
                {(achievements.map((singleroject) => {
                  return (
                    <div key={singleroject.src} data-aos="fade-up"  className="md:w-1/2 w-full h-80 border-l-2 border-gray-200 border-opacity-60 mb-3 overflow-y-hidden py-3 px-5 portfolio-item filter-app">
                      <div className="portfolio-info">
                        <h4 className='text-4xl text1 pb-5'>{singleroject.title}</h4>
                        <p>{singleroject.description}</p>
                        <a href='/' className="text-gray-500  inline-flex items-center">Learn More
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  )
                }))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Achievement