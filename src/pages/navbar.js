import React, { useEffect, useState } from 'react'
import {
  Link
} from "react-router-dom";
export default function Navbar(props) {
  const [togglenav, settogglenav] = useState(false)
  const [height, setheight] = useState(false)
  function handleclicknav() {
    if (togglenav) {
      settogglenav(false)
    } else {
      settogglenav(true)
    }
  }
  const [toggledrop, settoggledrop] = useState(false)
  function handleclickdropdown() {
    if (toggledrop) {
      settoggledrop(false)
    } else {
      settoggledrop(true)
    }
  }
  useEffect(() => {
    const fun2 = () => {
      if (window.scrollY > 170) {
        setheight(true);
      }
      else {
        setheight(false);
      }

    }
    window.scrollTo(0, 0)
    window.addEventListener('scroll', fun2);
  }, [])
  return (
    <>
      <nav className={`${height ? "px-2 sm:px-4 py-2.5 bg-slate-800 opacity-90 fixed w-full z-20 top-0 left-0" : "px-2 sm:px-4 py-2.5 bg-transparent fixed w-full z-20 top-0 left-0 "}`}>
        <div className="container flex flex-wrap px-4 items-center md:px-20 mx-auto" style={{ justifyContent: "space-between" }}>
          <Link to="/" className="flex items-center justify-center ">
            <img src="../assets/logo-no-background.png" className="h-6 mr-3 sm:h-10" alt="Data Science" />
          </Link>
          <div className="flex items-center md:hidden  md:order-2">
            <button data-collapse-toggle="navbar-multi-level" type="button" onClick={handleclicknav} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden to focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className={`place-items-end justify-between  ${togglenav ? "flex" : "hidden"} w-full md:flex md:w-auto md:order-1 `} id="mobile-menu-2">
            <ul className="flex flex-col p-4 mt-4 border bg-slate-600 md:bg-transparent border-gray-100 rounded-lg w-full md:w-auto  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:border-gray-700">
              <li>
                <Link to="/" className="block py-2 pl-1  text-white rounded md:bg-transparent  md:p-0" aria-current="page">Home</Link>
              </li>
              
              <li>
                <Link to="/about" className="block py-2 pl-1   rounded to md:border-0  md:p-0 text-white  ">About</Link>
              </li>
              <li>
                <Link to="/team" className="block py-2 pl-1   rounded to md:border-0  md:p-0 text-white  ">Team</Link>
              </li>
              <li>
                <button id="dropdownNavbarLink" onClick={handleclickdropdown} data-dropdown-toggle="dropdownNavbar" className="flex py-2 pl-1  text-white rounded md:bg-transparent  md:p-0">Explore <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                <div id="dropdownNavbar" className={`z-10 ${toggledrop ? "flex" : "hidden"} absolute font-normal bg-white divide-y divide-gray-100 rounded shadow  dark:bg-gray-700 dark:divide-gray-600`}>
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <Link to="/achievement" className="block px-4   hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white py-2   text-white ">Achievements</Link>
                    </li>
                    <li>
                      <Link to="/gallery" className="block px-4  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white py-2   text-white ">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/project" className="block px-4  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white py-2   text-white ">Projects</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/contact" className="block py-2 pl-1   rounded to md:border-0  md:p-0 text-white  ">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}



