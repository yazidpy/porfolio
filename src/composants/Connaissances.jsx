import React from 'react';

const Connaissances = () => {
    const skills = [
        { src: 'fa-brands fa-html5 text-8xl', titre: 'HTML 5' },
        { src: 'fa-brands fa-css3 text-8xl', titre: 'CSS 3' },
        { src: 'fa-brands fa-js text-8xl', titre: 'Java Script' },
        { src: 'fa-brands fa-php text-8xl', titre: 'PHP' },
        { src: 'fa-brands fa-bootstrap text-8xl', titre: 'Bootstrap' },
        { src: 'fa-brands fa-react text-8xl', titre: 'React JS' },
        { src: 'fa-brands fa-laravel text-8xl', titre: 'Laravel' },
        { src: 'fa-brands fa-java text-8xl', titre: 'Java' },
        { src: 'fa-brands fa-python text-8xl', titre: 'Python' },
        
    ]
    return (
        <section className='text-white w-[100%] h-full flex flex-col mt-10' id='skills'>
            <h3 className='max-[800px]:text-xl text-2xl font-bold capitalize text-center min-[1200px]:text-3xl min-[1400px]:text-5xl'>Mes connaissances</h3>
            <div className="flex flex-wrap p-4 px-2 justify-center mt-8">
                {skills?.map((skill, i) =>(
                    <div key={i} className='bg-gray-900 shadow-sm rounded-sm flex flex-col items-center  shadow-yellow-600 ml-8 mt-4 p-3 w-44'>
                    <i className={skill?.src}></i>
                    <span className='text-center font-bold mt-2 text-yellow-500 min-[1400px]:text-xl'>{skill?.titre}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Connaissances;