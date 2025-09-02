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
        <section className=" md:h-screen md:pt-44 overflow-hidden md:flex md:flex-col md:items-center md:justify-start md:gap-12 bg-[radial-gradient(circle_500px_at_top_left,purple_0%,purple_5%,transparent_100%)]">
            <Badge className='text-white md:font-semibold bg-gradient-to-r from-blue-700 to-purple-400 rounded-full py-2 px-4 border border-purple-200'>
                <span className='md:flex md:gap-2 md:items-center md:text-[16px]'><BadgeInfo/> Maîtrisez la Gestion de Vos Effectifs Externalisés en Temps Réel<BadgeInfo/></span>
            </Badge>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-[65%] md:flex md:flex-col md:text-[86px] md:leading-[98px] md:font-semibold md:text-center tracking-normal">
                <span className=''>Simplifiez <span className="bg-gradient-to-r from-purple-700 to-red-400 bg-clip-text text-transparent">la Gestion RH </span>de vos agents externalisés</span>
                
            </motion.h1>
            <p className="md:w-[45%] md:text-center md:text-[20px] font-normal text-textSecondary">Supervisez les présences, contrats, affectations et performances de vos agents en mission, sur un seul outil. De la gestion des affectations à la facturation client, NeoHR couvre toute la chaîne RH externalisée.</p>
            <p className="md:flex md:items-center gap-8">
                <Button onClick={handleFreeTry} className='text-white rounded-full bg-gradient-to-r from-blue-700 to-purple-300 hover:from-red-800 hover:to-purple-500 transition duration-300'>
                <span className='md:flex md:items-center md:gap-2'><CalendarClock/> Essayez gratuitement pendant 30 jours </span>
                </Button>
                <Button className='md:text-accent  md:rounded-full md:border md:border-red-400 '>
                <span className='md:flex md:items-center md:gap-2'><MonitorPlay/> Demander une démo </span>
                </Button>
            </p>
            <motion.div
                // initial={{ opacity: 0, y: -20 }}
                animate={{ x: [0, 50, 0] }}
                transition={{
                            repeat: Infinity,
                            duration: 4,
                            ease: "easeInOut"
                        }}
                className="z-[-1] border md:w-[980px] md:h-[580px] md:border md:rounded-xl md:overflow-hidden md:absolute md:top-[780px] md:left-[440px] shadow-2xl">
                <img src="https://assets-global.website-files.com/651fb8c0edd67e22c63dcf08/65250c91c753441f4b6ebf2a_Group%201000002134%20(1)-p-1080.webp" alt=""  className='w-full h-[full]z-[-1]'/>
            </motion.div>
        </section>
        
        </>
    )
}


export default Hero 