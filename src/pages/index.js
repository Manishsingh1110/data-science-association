import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import Navbarindex from './navbarindex';
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { BsFillMoonFill } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import Footer from './footer';
import { Link } from 'react-router-dom';
export default function Home() {
  const [height, setheight] = useState(false)
  useEffect(() => {
    const fun2 = () => {
      if (window.scrollY > (window.innerHeight - 50)) {
        setheight(true);
      }
      else {
        setheight(false);
      }
    }
    window.scrollTo(0, 0)
    window.addEventListener('scroll', fun2);
  }, [])
  var Team = [
    {
      "src": "../assets/team/president.jpg",
      "name": "Mr.Yash Gupta",
      "designation": "PRESIDENT of DSSA.",
      "category": "main"
    },
    {
      "src": "../assets/team/vicepresident.jpg",
      "name": "Mr.Jayesh Kirtane",
      "designation": "VICE PRESIDENT of DSSA.",
      "category": "main"
    },
    {
      "src": "../assets/team/treasurer.jpg",
      "name": "Mr.Rishikumar Yadav",
      "designation": " TREASURER💰 Of DSSA.",
      "category": "main"
    },
    {
      "src": "../assets/team/cultural_head.jpg",
      "name": "Ms. Deepti Bare",
      "designation": "Cultural Head of DSSA.",
      "category": "main"
    }
  ]
  var achievement = [
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
    },
  ]
  return (
    <>
      <video playsInline autoPlay muted loop id="bgvid" className='shadow-2xl shadow-slate-800 saturate-150'>
        <source src="../assets/background1.mp4" type="video/mp4" />
      </video>
      <section id='heroname'>
        <div class="z-4 backdrop-blur-sm  absolute left-0 right-0 m-auto top-1/3  w-full md:w-1/2 
        mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-5xl text-5xl mb-4">
            <span className='text-2  font-bold bg-clip-text  text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500'>Introducing</span>

            <br class=" lg:inline-block "></br>
            <span className=' bg-white rounded 
         bg-clip-text  text-transparent 
            animate-text p-3 md:text-5xl text-3xl font-extrabold	 uppercase '>Data Science Student Association</span>
          </h1>
          <div className="flex justify-center about-container">
            <div className="icon-box " data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><FiInstagram className='icon-m' /></div>
            </div>
            <div className="icon-box ml-2 mr-2" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><FiLinkedin className='icon-m' /></div>
            </div>

            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><AiFillGithub className='icon-m' /></div>
            </div>
          </div>
        </div>
      </section>
      <section className='relative -top-16'>
        <div className={`${height ? `fixed w-full top-0 navbar-div` : `relative navbar-div`} z-50`}>
          <Navbarindex />
        </div>
      </section>
      <section id="about">
        <div className="lg:px-40 md:20 px-4" data-aos="fade-up">
          <header className="section-header pb-5 text-center ">
            <h3 className='text-6xl text1'>About Us</h3>
          </header>
          <div className="flex flex-wrap about-container">
            <div className="md:w-1/2 w-full content ">
              <p className='py-10'>
                DSSA focus on a wide range of topics, including academics, sports, arts, community service, and more.we provide resources, support, and networking opportunities for our members, and  also work to advocate for issues that are important to students. we also organize events, activities, and campaigns to promote goals.</p>
              <div className="icon-box " data-aos="fade-up" data-aos-delay="100">
                <div className="icon"><AiOutlineUnorderedList className='icon-m' /></div>
                <h4 className="title"><a href="/">Working together for a better future.</a></h4>
                <p className="description pr-0 lg:pr-20">It conveys the idea that by coming together and working as a team, we can make a positive difference and create a brighter future of our and others. </p>
              </div>
              <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="icon"><SlCalender className='icon-m' /></div>
                <h4 className="title"><a href="/">Pushing boundaries, reaching for the stars.</a></h4>
                <p className="description pr-0 lg:pr-20">It encourages us to be ambitious and to strive for excellence, and it suggests that the organization is committed to helping students reach their full potential.</p>
              </div>
            </div>
            <div className="md:w-1/2 w-full  background order-lg-2" data-aos="zoom-in">
              <img src="../assets/about-img.svg" height={'auto'} width={'auto'} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="flex flex-wrap about-extra">
            <div className="md:w-1/2 w-full" data-aos="fade-right">
              <img src="../assets/about-extra-1.svg" className="img-fluid" height={'auto'} width={'auto'} alt="" />
            </div>
            <div className="md:w-1/2 w-full pt-5 px-5 pt-lg-0" data-aos="fade-right">
              <h4>Championing student rights, supporting student growth.</h4>
              <p className='py-5'>
              we understand the importance of advocating for the rights and interests of students, and we suggests that the organization is dedicated to supporting students as they grow and develop.we use this slogan  to promote the work of the DSSA association and to encourage students to get involved and make their voices heard. It is also  used to highlight the organization's commitment to supporting student success and helping students reach their full potential.</p>
            </div>
          </div>
          <div className="flex flex-wrap about-extra">
            <div className="md:w-1/2 w-full pt-4 pt-lg-0  " data-aos="fade-right">
              <h4>"Empowering students, achieving greatness."</h4>
              <p className='py-5'>
                We offer academic support, career development resources, or social and recreational activities to help students succeed and thrive.</p>
              <p>
                We work to foster a sense of community and belonging among students, and to create a welcoming and inclusive environment for all members.</p>
              <p className='py-5'>
                We offer leadership development programs or opportunities for students to take on leadership roles within the organization.</p>
            </div>
            <div className="md:w-1/2 w-full " data-aos="fade-right">
              <img src="../assets/about-extra-2.svg" height={'auto'} width={'auto'} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id='gallery'>
        <div className="bg-white px-0 lg:px-20 md:px-10 py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div className=" justify-between text-center items-center gap-8 mb-4 sm:mb-8 md:mb-12">
              <div className="text-center flex-col flex items-center gap-8">
                <h2 className="text-gray-800 text-4xl lg:text-5xl font-bold text1 uppercase ">Gallery</h2>
                <p className="max-w-screen-sm hidden md:block text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
              <Link to="/gallery" className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                <img src="https://i0.wp.com/academiamag.com/wp-content/uploads/2022/04/photo-1572947650440-e8a97ef053b2.jpg?fit=1000%2C667&ssl=1" loading="lazy" alt='' className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">All</span>
              </Link>

              <Link to="/gallery" className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                <img src="https://images.squarespace-cdn.com/content/v1/58c9fe99f5e231f0df86179b/1504017391390-HK35326DFYJSSYIVZSIO/party.jpg?format=1500w" loading="lazy" alt='' href="/" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Nakshatra</span>
              </Link>

              <Link to="/gallery" className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                <img src="https://www.nkvidyabhavan.org/images/Rules/sports.jpg" loading="lazy" alt='' className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Sports</span>
              </Link>
              <Link to="/gallery" className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt='' className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Industrial visit</span>
              </Link>
            </div>
            <div className='py-5 text-center'>
              <Link to="/gallery">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
                  More
                </span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="call-to-action" className="call-to-action">
        <div className=" text-center" data-aos="fade-up">
          <div className="justify-center">
            <div className="lg:w-1/2 w-full lg:left-80  left-0 relative text-center">
              <h3 className='text-3xl pb-5 text-white'>"Advocating for student success."</h3>
              <p className='text-sm pb-3 text-white'>Its important to support and empower others to succeed in their academic and personal goals</p>
              <a className="cta-btn text-white" href="/">Call To Action</a>
            </div>
          </div>
        </div>
      </section>
      <section id='achievements' className='md:mx-6 md:px-6 px-2  pt-5'>
        <header className="section-header pb-5 text-center ">
          <h3 className='lg:text-5xl text-3xl'>Our Achievements</h3>
          <p className='md:px-56 px-5 pb-5'>"Honoring the dedication and determination that lead to success."</p>
        </header>
        <section id="testimonials" className=" testimonials">
          <div className="container lg:block md:hidden hidden" data-aos="fade-up">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}

            >
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p className='text-black md:text-xl text-md font-bold'>
                    </p>
                    <div className="profile mt-auto">
                      <h3></h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {(achievement.map((achievements) => {
                return (
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <p className='text-black md:text-xl text-md font-bold'>
                          {achievements.description}
                        </p>
                        <div className="profile mt-auto">
                          <h3>{achievements.title}</h3>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              }))}
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p className='text-black md:text-xl text-md font-bold'>
                    </p>
                    <div className="profile mt-auto">
                      <h3></h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="lg:hidden md:block block" data-aos="fade-up">
            <Swiper
              spaceBetween={5}
              slidesPerView={1}
            > 
              {(achievement.map((achievements) => {
                return (
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <p className='text-black md:text-xl text-md font-bold'>
                          {achievements.description}
                        </p>
                        <div className="profile mt-auto">
                          <h3>{achievements.title}</h3>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              }))}
            </Swiper>
          </div>
        </section>
      </section>
      <section id="team" class="team">
        <div className="">
          <header className="section-header pb-5 text-center ">
            <h3 className='text-6xl'>Team</h3>
            <p className='lg:px-56 md:px-20 px-5 pt-5 pb-5'>our Team work together towards a common goal or purpose.we have Teams within our main Team that focused on specific projects, events, or initiatives, and they may be responsible for planning, organizing, and implementing vaious activities. Team members may have different roles and responsibilities within our team, and they  work together to coordinate their efforts and achieve  goals.</p>
          </header>
          <div className="flex flex-wrap text-center px-4 md:px-20 lg:px-40">
            {(Team.map((Teammember) => {
              return (
                <div className="lg:w-1/4 w-1/2   overflow-hidden p-2" key={Teammember.src} data-aos="zoom-out" data-aos-delay="100">
                  <div class="team-member">
                    <div class="member-img rounded-xl h-80" style={{ backgroundImage: `url(${Teammember.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                      {/* <img src= class="img-fluid h-80 w-full" alt=""/> */}
                      <div class="social">
                        <a href="/" className="twitter px-3"><FiTwitter className="text-xl hover:text-blue-500 " /></a>
                        <a href="/" className="facebook px-3"><FiFacebook className="text-xl hover:text-blue-500 " /></a>
                        <a href="/" className="instagram px-3"><FiInstagram className="text-xl hover:text-rose-500" /></a>
                        <a href="/" className="linkedin px-3"><FiLinkedin className="text-xl hover:text-blue-500 " /></a>
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
        <div className='py-5 text-center'>
              <Link to="/team">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
                  Meet All
                </span>
              </button>
              </Link>
            </div>
      </section>
      <Footer />
    </>
  )
}
