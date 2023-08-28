import React from 'react';
const Home = () => {
    return (
        <section id='home' className='min-h-screen flex py-10 md:flex-row flex-row items-center max-[700px]:flex-col min-[1200px]:gap-32 min-[1400px]:gap-64'>
            <div className='flex-1 flex items-center h-full px-8'>
                <img src="./src/assets/Me.jpg" className='md:w-11/12 mt-4 mb-4 h-full object-cover rounded-full min-[1200px]:w-full' />
            </div>
            <div className="flex-1">
                <div className="flex flex-col gap-4 p-4 min-[1400px]:gap-8">
                <h2 className='font-bold text-3xl max-[700px]:text-center max-[700px]:text-2xl min-[1200px]:text-4xl min-[1400px]:text-6xl'>Bonjour !</h2>
                <h3 className='font-semibold text-2xl max-[700px]:text-center max-[700px]:text-xl min-[1200px]:text-3xl min-[1400px]:text-5xl'>
                    Je m'appelle <span className='text-yellow-500 animate-pulse'>Aliche Yazid</span>
                </h3>
                <h4 className='font-normal text-xl max-[700px]:text-center max-[700px]:text-base min-[1200px]:text-4xl'>Développeur front-end et applications desktop</h4>
                <div className=" flex max-[700px]:justify-center">
                <a href='#projets' className='p-2 text-white bg-yellow-500 rounded-lg max-w-max min-[1200px]:text-xl  min-[1400px]:text-3xl transition-all cursor-pointer hover:text-yellow-500 hover:bg-white animate-pulse'>Télécharger le CV</a>
                </div>
                </div>
            </div>
        </section>
    );
};
export default Home;