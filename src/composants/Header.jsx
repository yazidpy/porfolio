import React, { useEffect, useState } from 'react';
import Up from './Up'
const Header = () => {
    const [sidbar, setsidebar] = useState(false);
    const menuLinks = [
        { name: "Acceuil", link: "#home" },
        { name: "A propos", link: "#about" },
        { name: "Connaissances", link: "#skills" },
        { name: "Projets", link: "#projects" },
        { name: "Contact", link: "#contact" },
    ];
    useEffect(() => {
        const btn_open_sidebar = document.querySelector('.open_sidebar');
        const close_sidebar=document.querySelector('.close_sidebar')
        const sidebar=document.querySelector('.sidebar')
        btn_open_sidebar.addEventListener('click',function(){
            sidebar.classList.add('right-[0]')
        })
        close_sidebar.addEventListener('click',function(){
            sidebar.classList.remove('right-[0]')
        })
    }, [])
    return (
        <div>
            <nav className='fixed w-full left-0 top-0  bg-gray-900 z-10 '>
                <div className='p-1 max-[700px]:px-4 px-2 flex flex-row justify-between shadow-md shadow-yellow-200 items-center min-[1400px]:px-8'>
                    <h4 className='font-bold text-2xl min-[1200px]:text-3xl uppercase  ml-2 p-1 min-[1400px]:text-5xl'>Ya<span className='text-yellow-500'>zi</span>d</h4>
                    <div className="max-[700px]:hidden bg-white rounded-bl-full p-2 transition-all">
                        <ul className='flex flex-row gap-7 max-[700px]:flex-col'>
                            {menuLinks?.map((menu, i) => (
                                <li key={i} className='ml-3'>
                                    <a href={menu?.link} className="text-gray-900 transition-all min-[1400px]:text-3xl max-w-max hover:border-b-2 border-yellow-600 hover:text-yellow-600 min-[1200px]:text-xl">{menu?.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden text-2xl max-[700px]:block cursor-pointer items-center open_sidebar">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </nav>
            <div className="sidebar min-[700px]:hidden bg-gray-800 rounded-bl-full z-50 p-2 fixed right-[-50vw] top-0 h-full shadow-md shadow-yellow-300 transition-all">
                <div className="absolute close_sidebar right-2 top-2 text-xl z-[999] text-white font-bold cursor-pointer">
                    <i className="fa-solid fa-close"></i>
                </div>
                <ul className='flex flex-col mt-9 p-6 gap-7 max-[700px]:flex-col'>
                    {menuLinks?.map((menu, i) => (
                        <li key={i} className=''>
                            <a href={menu?.link} className="text-white transition-all max-w-max hover:border-b-2 border-yellow-600 hover:text-yellow-600">{menu?.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Header;