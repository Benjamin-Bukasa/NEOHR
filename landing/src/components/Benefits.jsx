import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import { benefits } from '../services/benefitItems';

import Button from './ui/Button';

const Benefits = () => {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fonction de redirection avec useNavigate
  const handleClick = (id) => {
    navigate(`/benefits/${id}`);
  };

  return (
    <section className='md:pt-[520px] md:pb-20 md:flex md:flex-col md:justify-center md:items-center gap-10'>
      <div className="md:flex md:flex-col md:justify-center md:items-center gap-8">
        <h2 className="md:w-[65%] md:flex md:flex-col md:items-center md:text-center md:text-[74px] md:leading-[94px] font-semibold tracking-normal">
            <span className=''>Ce qui rend la gestion RH 
              <span className='bg-gradient-to-r from-purple-700 to-red-400 bg-clip-text text-transparent'> facile avec NeoHR</span>
            </span>
            
        </h2>
        <p className="md:w-[45%] md:text-center md:text-[20px] font-normal text-textSecondary">Supervisez les présences, contrats, affectations et performances de vos agents en mission, sur un seul outil.</p>
      </div>
      <div className="md:flex md:flex-wrap md:justify-center md:items-center md:gap-12 md:w-full md:py-0">
        {
          benefits.slice(0,3).map((benefit) => (
            <div key={benefit.id} className="md:flex md:flex-col md:items-start md:gap-6 md:w-1/5 md:h-[500px] bg-gray-100/50  md:rounded-xl md:shadow-sm md:overflow-hidden overflow-hidden">
              <div className="w-full h-68 overflow-hidden">
                <img src={benefit.icon} alt={benefit.title} className="md:w-full md:h-68 hover:scale-110 hover:cursor-pointer transition-all duration-700" />
              </div>
              {/* <img src={benefit.icon} alt={benefit.title} className="md:w-full md:h-80 hover:scale-125 hover:cursor-pointer" /> */}
              <h2 className="md:text-[20px] md:font-medium px-5 text-fontText">{benefit.title}</h2>
              <p className="text-textSecondary md:text-[16px] px-5">{benefit.description}</p>
              <Button
                onClick={() => handleClick(benefit.id)}
                className="text-white font-semibold rounded-full bg-gradient-to-r from-blue-700 to-purple-400 hover:from-blue-800 hover:to-purple-500 md:ml-5 md:cursor-pointer"
              >
                En savoir plus
              </Button>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Benefits;
