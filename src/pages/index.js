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
import { BsFillMoonFill } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import Footer from './footer';
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
      "src": "../assets/team/cultural-head.jpg",
      "name": "Ms. Deepti Bare",
      "designation": "Cultural Head of DSSA.",
      "category": "main"
  }
  ]

  return (
    <>
      <video playsInline autoPlay muted loop id="bgvid" className='shadow-2xl shadow-slate-800'>
        <source src="../assets/background1.mp4" type="video/mp4" />
      </video>
      <section className='relative -top-16'>
        <div className={`${height ? `fixed w-full top-0 navbar-div` : `relative navbar-div`} z-50`}>
          <Navbarindex />
        </div>
      </section>
      <section id="about">
        <div className="lg:px-40 md:20 px-4" data-aos="fade-up">
          <header className="section-header pb-5 text-center ">
            <h3 className='text-6xl'>About Us</h3>
            <p className='md:px-56 px-5 pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </header>
          <div className="flex flex-wrap about-container">
            <div className="md:w-1/2 w-full content ">
              <p className='py-10'>
              DSSA focus on a wide range of topics, including academics, sports, arts, community service, and more.we provide resources, support, and networking opportunities for our members, and  also work to advocate for issues that are important to students. we also organize events, activities, and campaigns to promote goals.</p>
              <div className="icon-box " data-aos="fade-up" data-aos-delay="100">
                <div className="icon"><AiOutlineUnorderedList/></div>
                <h4 className="title"><a href="/">Eiusmod Tempor</a></h4>
                <p className="description pr-0 lg:pr-20">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
              </div>
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <div className="icon"><BsFillMoonFill/></div>
                <h4 className="title"><a href="/">Magni Dolores</a></h4>
                <p className="description pr-0 lg:pr-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>

              <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="icon"><SlCalender/></div>
                <h4 className="title"><a href="/">Dolor Sitema</a></h4>
                <p className="description pr-0 lg:pr-20">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
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
              <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
              <p className='py-5'>
                Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati possimus ea. Quas molestiae perspiciatis occaecati qui rerum. Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae non ad at et a.
              </p>
              <p>
                Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit qui asperiores ea corporis deserunt veritatis quidem expedita perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum eum eum.
              </p>
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
      <section>
        <div className="bg-white px-0 lg:px-20 md:px-10 py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div className=" justify-between text-center items-center gap-8 mb-4 sm:mb-8 md:mb-12">
              <div className="text-center flex-col flex items-center gap-8">
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">Gallery</h2>
                <p className="max-w-screen-sm hidden md:block text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
              <a href="/" className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt=''  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">All</span>
              </a>

              <a href="/" className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt='' href="/" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Nakshatra</span>
              </a>

              <a href="/" className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt=''  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Sports</span>
              </a>
              <a href="/" className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt='' className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Industrial visit</span>
              </a>
            </div>
            <div className='py-5 text-center'>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
                  More
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="call-to-action" className="call-to-action">
        <div className=" text-center" data-aos="fade-up">
          <div className="justify-center">
            <div className="lg:w-1/2 w-full lg:left-80  left-0 relative text-center">
              <h3 className='text-3xl pb-5 text-white'>Ut fugiat aliquam aut non</h3>
              <p className='text-sm pb-3 text-white'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <a className="cta-btn text-white" href="/">Call To Action</a>
            </div>
          </div>
        </div>
      </section>
      <section className='md:mx-6 md:px-6 px-2  pt-5'>
      <header className="section-header pb-5 text-center ">
            <h3 className='text-5xl'>Our Achievements</h3>
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
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    </p>
                    <div className="profile mt-auto">
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p className='text-black md:text-xl text-md font-bold'>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    </p>
                    <div className="profile mt-auto">
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p className='text-black md:text-xl text-md font-bold'>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    </p>
                    <div className="profile mt-auto">
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p className='text-black md:text-xl text-md font-bold'>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    </p>
                    <div className="profile mt-auto">
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p className='text-black md:text-xl text-md font-bold'>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    </p>
                    <div className="profile mt-auto">
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
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
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p className='text-black md:text-xl text-md font-bold'>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    </p>
                    <div className="profile mt-auto">
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p className='text-black md:text-xl text-md font-bold'>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    </p>
                    <div className="profile mt-auto">
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p className='text-black md:text-xl text-md font-bold'>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    </p>
                    <div className="profile mt-auto">
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p className='text-black md:text-xl text-md font-bold'>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    </p>
                    <div className="profile mt-auto">
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p className='text-black md:text-xl text-md font-bold'>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    </p>
                    <div className="profile mt-auto">
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </section>
      <section id="team" class="team">
        <div className="">
        <header className="section-header pb-5 text-center ">
            <h3 className='text-6xl'>Team</h3>
            <p className='lg:px-56 md:px-20 px-5 pb-5'>our Team work together towards a common goal or purpose.we have Teams within our main Team that focused on specific projects, events, or initiatives, and they may be responsible for planning, organizing, and implementing vaious activities. Team members may have different roles and responsibilities within our team, and they  work together to coordinate their efforts and achieve  goals.</p>
          </header>
          <div className="flex flex-wrap text-center px-4 md:px-20 lg:px-40">
          {(Team.map((Teammember) => {
                            return (
                                <div className="lg:w-1/4 w-1/2   overflow-hidden p-2" key={Teammember.src} data-aos="zoom-out" data-aos-delay="100">
                                    <div class="team-member">
                                        <div class="member-img rounded-xl h-80" style={{ backgroundImage: `url(${Teammember.src})`,backgroundPosition:'center',backgroundSize:'cover' }}>
                                            {/* <img src= class="img-fluid h-80 w-full" alt=""/> */}
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
    </>
  )
}
