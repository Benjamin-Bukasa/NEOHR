import React from 'react'
import { motion } from 'framer-motion';



import Badge from './ui/Badge';
import Button from './ui/Button';
import { BadgeInfo,MonitorPlay,CalendarClock } from 'lucide-react';

const Hero = ()=>{

    // window.scrollTo(0, 0); // Remettre le scroll en haut de la page lors du chargement du composant

    const handleFreeTry = () => {
        // Logique pour gérer l'essai gratuit de 30 jours
        console.log("Essai gratuit de 30 jours activé");
        window.location.href = '/register'; // redirection vers la page d'inscription
    }

    return (
        <>
        <section className=" md:h-screen md:pt-44 overflow-hidden md:flex md:flex-col md:items-center md:justify-start md:gap-12 bg-[radial-gradient(circle_300px_at_top_left,red_0%,red_5%,transparent_150%)]">
            <Badge className='text-accent md:font-semibold bg-gradient-to-r from-red-200 to-red-100 rounded-full py-2 px-4 border border-red-200'>
                <span className='md:flex md:gap-2 md:items-center md:text-[16px]'><BadgeInfo/> Maîtrisez la Gestion de Vos Effectifs Externalisés en Temps Réel<BadgeInfo/></span>
            </Badge>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="md:flex md:flex-col md:text-[56px] md:leading-[72px] md:text-fontText md:font-bold md:text-center">
                <span className=''>Gestion Efficace des Ressources Humaines </span>
                <span className="bg-gradient-to-r from-red-700 to-red-400 bg-clip-text text-transparent">Des Agents Externalisés</span>
            </motion.h1>
            <p className="md:w-1/3 md:text-center md:text-[18px] font-medium">Supervisez les présences, contrats, affectations et performances de vos agents en mission, sur un seul outil. De la gestion des affectations à la facturation client, NeoHR couvre toute la chaîne RH externalisée.</p>
            <p className="md:flex md:items-center gap-8">
                <Button onClick={handleFreeTry} className='text-white font-semibold rounded-full bg-gradient-to-r from-red-700 to-red-400 hover:from-red-800 hover:to-red-500 transition duration-300'>
                <span className='md:flex md:items-center md:gap-2'><CalendarClock/> Essayez gratuitement pendant 30 jours </span>
                </Button>
                <Button onClick className='md:text-accent md:font-semibold md:rounded-full md:border md:border-red-400 '>
                <span className='md:flex md:items-center md:gap-2'><MonitorPlay/> Demander une démo </span>
                </Button>
            </p>
            <motion.div
                animate={{ x: [0, 50, 0] }}
                transition={{
                            repeat: Infinity,
                            duration: 4,
                            ease: "easeInOut"
                        }}
                className="z-[-1] border md:w-[940px] md:h-[500px] md:border md:rounded-xl md:overflow-hidden md:absolute md:top-[680px] md:left-[480px]">
                <img src="/images/landImg.jpeg" alt=""  className='w-full h-[full]z-[-1]'/>
            </motion.div>
        </section>
        
        </>
    )
}


export default Hero 