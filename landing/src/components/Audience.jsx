import React from 'react';
import { motion } from 'framer-motion';
import {SquareMousePointer} from 'lucide-react';

import { audiences } from '../services/userAudienceList';

const Audience = () => {
  return (
    <div className='md:flex md:flex-col md:items-center md:gap-5 bg-gray-100  text-fontText md:py-10'>
        <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         className="md:w-[65%] md:flex md:flex-col md:items-center md:text-center md:text-[74px] md:leading-[94px] font-semibold tracking-normal "><span className='bg-gradient-to-r from-purple-700 to-red-400 bg-clip-text text-transparent'>Conçu pour  piloter et optimiser</span>  des effectifs terrain </motion.h2>
        <p className="md:w-[45%] md:text-center md:text-[20px] font-normal text-textSecondary">
            Notre solution est spécialement conçue pour les professionnels des ressources humaines qui gèrent, pilotent et optimisent des effectifs terrain au quotidien. 
            
            {/* Que vous soyez responsable RH, manager d'équipe ou directeur des opérations, notre plateforme vous offre les outils nécessaires pour simplifier la gestion de vos équipes, améliorer la communication et optimiser les performances. */}
        </p>
      <div className="md:flex md:justify-center md:gap-16 md:py-20 md:px-48">
        <div className="md:w-1/2">
            <img src="images/hrStaff.jpeg" alt="" className='w-full hover:scale-105 transition-all duration-700 rounded-lg' />
        </div>
        <div className="md:w-1/2 text-[18px] md:flex md:flex-col md:gap-10">
          <p className="p-3 font-normal space-x-4 border border-neutral-300 text-white  bg-gradient-to-r from-blue-700 to-purple-400 rounded-lg hover:scale-105  transition-all duration-500">Que vous soyez responsable RH, manager d'équipe ou directeur des opérations, notre plateforme vous offre les outils nécessaires pour simplifier la gestion de vos équipes, améliorer la communication et optimiser les performances.</p>
          <ul className='flex flex-col gap-2 '>
            {
              audiences.slice(0,4).map((audience) => (
              <li key={audience.id} className="flex items-start gap-4 py-1 text-[14px]">
                <span>
                  <SquareMousePointer size={25} stroke='red'/>
                </span>
                <div>
                  <h3 className="font-semibold text-[16px]">{audience.title}</h3>
                  <p className="text-textSecondary">{audience.description}</p>
                </div>
              </li>
              ))
            }
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Audience;
