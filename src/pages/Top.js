import React, { useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';
const Top = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        <div className={visible ? 'block' : 'hidden'} data-bs-toggle="tooltip" title="Go To Top">
            <div className='fixed h-5 bottom-20 md:right-20 right-5 w-5' data-bs-toggle="tooltip" title="Go To Top">
                <button type="button"   onClick={scrollToTop} data-bs-toggle="tooltip" title="Go To Top" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><AiOutlineArrowUp/></button>
            </div>
        </div>
    )
}

export default Top