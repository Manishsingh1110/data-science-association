import React from 'react'
import {
    Link
} from "react-router-dom";
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import Top from './Top';
const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <Top />
            <div className="footer-content bg-slate-100 text-black">
                <div className="">
                    <div className="flex md:px-10 lg:px-40 px-4 flex-wrap py-12">
                        <div className="md:w-1/2 w-full footer-info">
                            <a href="index.html" className=" py-10 ">
                                <span className='text-slate-600 text-4xl font-bold'>DSSA</span>
                            </a>
                            <p className='py-5'>focus on a wide range of topics, including academics, sports, arts, community service, and more.we provide resources, support, and networking opportunities for our members, and  also work to advocate for issues that are important to students. we also organize events, activities, and campaigns to promote goals.</p>
                            <div className="social-links flex  mt-3 md:pb-0 pb-5" >
                                <a href="/" className="twitter px-3"><FiTwitter className="text-xl hover:text-blue-500 " /></a>
                                <a href="/" className="facebook px-3"><FiFacebook className="text-xl hover:text-blue-500 " /></a>
                                <a href="/" className="instagram px-3"><FiInstagram className="text-xl hover:text-rose-500" /></a>
                                <a href="/" className="linkedin px-3"><FiLinkedin className="text-xl hover:text-blue-500 " /></a>
                            </div>
                        </div>
                        <div className="md:w-1/4 w-full md:px-10 px-1 footer-links">
                            <h4 className='text-slate-600 text-xl font-bold'>Useful Links</h4>
                            <ul >
                                <li>
                                    <Link to="/" className="block py-2 pl-1  text-black  rounded md:bg-transparent  md:p-0" aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" className="block py-2 pl-1   rounded to md:border-0  md:p-0 text-black  ">About</Link>
                                </li>
                                <li>
                                    <Link to="/team" className="block py-2 pl-1   rounded to md:border-0  md:p-0 text-black  ">Team</Link>
                                </li>
                                <li>
                                    <Link to="/achievement" className="block py-2 pl-1  text-black md:p-0">Achievements</Link>
                                </li>
                                <li>
                                    <Link to="/gallery" className="block py-2 pl-1  text-black md:p-0">Gallery</Link>
                                </li>
                                <li>
                                    <Link to="/project" className="block py-2 pl-1  text-black md:p-0">Projects</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="block py-2 pl-1   rounded to md:border-0  md:p-0 text-black  ">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/4 w-full footer-contact md:block hidden text-center text-md-start">
                            <h4 className='text-slate-600 text-xl font-bold'>Contact Us</h4>
                            <p>Saraswati College of Engineering ,<br />
                                 Plot No. 46 Sector 5<br /> Near MSEB Sub Station,<br />
                                Kharghar, Navi Mumbai 410210<br />
                                India <br /><br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer-legal text-center pl-4 pb-5 md:pb-0 md:pl-20">
                    <div className="container">
                        <div className="copyright text-gray-500 md:py-4 py-10">
                            &copy; Copyright <strong><span className='text-slate-600 text-xl font-bold'>DSSA</span></strong>. All Rights Reserved
                            <div className="credits">
                                Designed by <a href="https://manishsinghresume.netlify.app/">Mayur Jadhav , Manish Singh & Tejas Mayekar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer