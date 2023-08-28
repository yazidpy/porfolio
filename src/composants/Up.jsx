import React from 'react';
const Up = () => {
    return (
        <div>
            <a href="#home"
                className='fixed bottom-5 right-4 z-[999] cursor-pointer text-white text-2xl
        bg-yellow-500 w-12 h-12 rounded-full text-center flex items-center justify-center sm:right-8 animate-pulse'>
                <i className="fa-solid fa-chevron-up"></i>
            </a>
        </div>
    );
};

export default Up;