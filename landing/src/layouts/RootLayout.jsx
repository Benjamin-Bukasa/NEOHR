import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header'
import Hero from '../components/Hero'

function RootLayout() {
  return (
    <div className='md:w-full md:flex md:flex-col md:items-center'>
        <Header/>
        <main className='md:w-full md:flex md:flex-col md:items-center'>
          <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout