import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
const Achievement = () => {
  var achievement=[
    {
      "description": "Congratulations on the success of our first event! It was a lot of work to plan and execute an event, so it's great to see it pay off. we hope our first event was everything we hoped it would be and that it was a positive experience for all involved.",
      "title": "Maitri 1st event "
    },
    {
      "description": "We have been recognized for our work with blood donation through the National Service Scheme (NSS). That is a great accomplishment! Blood donation is an important way to help others and save lives, and it's wonderful to see our efforts recognized with an award. ",
      "title": "Best association award in Blood donation by nss"
    },
    {
      "description": "It's no small feat to place in a competition, and it's a testament to our skill and dedication. we hope to continue and enjoy playing mobile games and have fun competing in them.",
      "title": "2nd position in bgmi"
    },
    {
      "description": "Congratulations to the player(Kavya) on achieving first place in a 100m running competition! That's a great accomplishment and a testament to her hard work and dedication to training. we hope her to continue  work on your running and participate in competitions in the future",
      "title": "1st in 100m running"
    },
    {
      "description": "Congratulations to the players(Nicky,kavya,Anjali) on achieving first place in a 4*100m relay competition! That's a great accomplishment and a testament to ther hard work and dedication to training. we hope that they  continue  work on your running and participate in competitions in the future.",
      "title": "1st in 4*100m relay"
    },
    {
      "description": "Congratulations on the success of our first event!as an individual association It was a lot of work to plan and execute an event, so it's great to see it pay off. we hope our first event was everything we hoped it would be and that it was a positive experience for all involved.",
      "title": "1st event ds unite"
    },
    {
      "description": "We have been recognized for our work with blood donation through the National Service Scheme (NSS). That is a great accomplishment! Blood donation is an important way to help others and save lives, and it's wonderful to see our efforts recognized with an award.",
      "title": "2 best association in blood donation camp held by nss"
    },
    {
      "description": "second place in a rangoli competition! Rangoli is a beautiful and intricate art form, and it takes skill and dedication to create a design that is worthy of recognition. we hope to continue to enjoy creating rangoli and participating in competitions. ",
      "title": "2nd in rangoli compitition"
    },
    {
      "description": "It's great to hear that a students from your Ds participated in a hackathon at the Indian Institute of Technology in Varanasi. Hackathons are a great opportunity for students to learn new skills, collaborate with others, and develop innovative solutions to problems.",
      "title": "DS student particated in hackathon in iit Varanasi"
    },
    ,
    {
      "description": "It's great we have more accomplishments to come in the future.our goal is to Keep up the hard work and dedication, and we are sure that we will continue to achieve success in whatever we set our mind to.",
      "title": "still more to come….."
    }
  ]
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
                {(achievement.map((singleroject) => {
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