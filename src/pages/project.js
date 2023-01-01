import React,{useState} from 'react'
import Footer from './footer'
import Navbar from './navbar'
const Projects = () => {
    var Allprojects = [
        {
            "src": "../assets/project/Project_1.jpg",
            "place": "App",
            "description": "Lorem ipsum, dolor sit amet consectetur",
            "category": "website"
        },
        {
            "src": "../assets/project/Project_2.jpg",
            "place": "App",
            "description": "Lorem ipsum, dolor sit amet consectetur",
            "category": "app"
        }, {
            "src": "../assets/project/Project_3.jpg",
            "place": "App",
            "description": "Lorem ipsum, dolor sit amet consectetur",
            "category": "other"
        }, 
    ]
    const [projects, setprojects] = useState(Allprojects)
    const filteritem = (cat) => {
        const updatedproject = Allprojects.filter((ele) => {
            return ele.category === cat;
        })
        setprojects(updatedproject)

    }
    const setall = () => {
        setprojects(Allprojects)
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
                        <div className="flex flex-wrap px-2 md:px-10 lg:px-20 portfolio-container" data-aos="fade-up" data-aos-delay="300">
                        {(projects.map((singleroject) => {
                                return(
                                    <div key={singleroject.src} data-aos="fade-up" data-aos-delay="300" className="lg:w-1/3 md:w-1/2 w-full h-64 overflow-y-hidden py-3 px-5 portfolio-item filter-app">
                                <img src={singleroject.src} alt="" />
                                <div className="portfolio-info">
                                    <h4>{singleroject.place}</h4>
                                    <p>{singleroject.description}</p>
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