import React from 'react';
import { FiArrowUpCircle } from 'react-icons/fi'; 

const BackToTopButton = () => {
    
    const handleBackToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior:"smooth"}) 
    }
    
    return (
        <div className='shadow-xl '>
            <div className='fixed bottom-5 right-8 '>
                <button onClick={handleBackToTop} className='tooltip' data-tip='Back To Top'><FiArrowUpCircle className='text-5xl text-blue-900 hover:text-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ' ></FiArrowUpCircle></button>
            </div>
        </div>
    );
};

export default BackToTopButton;