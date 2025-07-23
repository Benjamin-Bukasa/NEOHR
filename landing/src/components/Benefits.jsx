import React from 'react';

import { benefits } from '../services/benefitItems';
import Button from './ui/Button';

const Benefits = () => {
  return (
    <section className=' md:pt-[350px] md:flex md:flex-col md:justify-center md:items-center gap-5'>
      <div className="md:flex md:flex-col md:justify-center md:items-center gap-8">
        <h1 className="md:flex md:flex-col md:items-center md:text-center md:text-[40px] font-bold">
            <span className=''>Ce Qui Rend la Gestion des Ressources Humaines </span>
            <span className='bg-gradient-to-r from-red-700 to-red-400 bg-clip-text text-transparent'>Facile Avec NeoHR</span>
        </h1>
        <p className="md:w-2/3 md:text-[20px] md:font-medium md:leading-[36px] text-center">Supervisez les présences, contrats, affectations et performances de vos agents en mission, sur un seul outil.</p>
      </div>
      <div className="md:flex md:flex-wrap md:justify-center md:items-center md:gap-8 md:w-full md:py-10">
        {
          benefits.slice(0,3).map((benefit) => (
            <div key={benefit.id} className=" md:flex md:flex-col md:items-start md:gap-4 md:w-1/4 md:h-[540px] md:border md:border-gray-200 md:rounded-xl md:shadow-sm md:overflow-hidden">
              <img src={benefit.icon} alt={benefit.title} className="md:w-full md:h-80" />
              <h2 className="md:text-[20px] md:font-semibold px-5 text-primary">{benefit.title}</h2>
              <p className="text-textSecondary md:text-[16px] px-5">{benefit.description}</p>
              <Button className='text-white font-semibold rounded-full bg-gradient-to-r from-red-700 to-red-400 hover:from-red-800 hover:to-red-500 transition duration-300 md:ml-5'>En savoir plus</Button>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Benefits;
