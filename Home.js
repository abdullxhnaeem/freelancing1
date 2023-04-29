import React from 'react'
import Herosection from '../Components/Herosection'
import ImageComponent from '../Components/ImageComponent'
import Cards from '../Components/Cards'

function Home() {
  return (
    <div class='w-full min-h-screen font-sans bg-white'>
        <Herosection />
        <Cards />
    </div>
  )
}

export default Home