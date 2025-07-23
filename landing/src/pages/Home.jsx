import React from 'react'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'

function Home() {

    // window.scrollTo(0, 0); // Remettre le scroll en haut de la page lors du chargement du composant

  return (
    <div className='md:w-full md:flex md:flex-col'>
        <Hero/>
        <Benefits/>
    </div>
  )
}

export default Home