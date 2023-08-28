import React from 'react';

const About = () => {
    return (
        <section className='text-white w-[100%] h-full flex flex-col' id='about'>
            <h3 className='max-[800px]:text-xl text-2xl font-bold capitalize text-center min-[1200px]:text-3xl min-[1400px]:text-5xl'>A propos de <span className='text-yellow-500'>Moi</span></h3>
            <div className="flex p-8 flex-row w-full max-[800px]:gap-10 justify-between max-[800px]:flex-col min-[1200px]:gap-4">
                <div className="flex flex-col gap-8 w-[50%] max-[800px]:w-full max-[800px]:gap-2">
                    <span className='text-xl max-[800px]:text-base min-[1200px]:text-2xl max-[800px]:text-center min-[1400px]:text-3xl'>Mon introduction</span>
                    <span className='text-slate-200 text-base min-[1200px]:text-xl max-[1000px]:text-sm min-[1400px]:text-3xl'>Je m'appelle <span className='text-yellow-500'> Aliche Yazid </span> et je suis né le 29 octobre 2001. Je suis actuellement étudiant en <span className='text-yellow-500'>Master 2 Système d'Information Avancés </span>à l'Université de Béjaia. En 2019, j'ai obtenu mon baccalauréat série mathématique technique, et j'ai poursuivi mes études en informatique pour obtenir une licence.
                        Fort d'une passion pour l'informatique, j'ai acquis des connaissances avancées dans ce domaine, notamment en développement web et en applications bureautiques. Mon parcours académique et mes expériences m'ont permis de développer des compétences solides dans la création de sites web et d'applications, en utilisant les dernières technologies et les meilleures pratiques.</span>
                      </div>
                       <div className="">
                        <img src="./src/assets/6.jpg" className='rounded-l-full max-[800px]:rounded-none min-[1400px]:w-[700px]'/>
                        </div>
                </div>
        </section>
    );
};

export default About;