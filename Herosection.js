import React from 'react'
import logo from '../Images/logo.png'

function Herosection() {
  return (
    <div class='flex justify-center w-full h-screen '>
      <div class='flex flex-col md:h-5/6  lg:w-3/5 md:w-4/5 sm:w-10/12 text-center items-center justify-between md:p-5 px-3 py-5'>
        <img src={logo} />
        <text class='text-4xl font-extrabold '>Let our AI tools do the heavy lifting so you can focus on bringing your ideas to life.</text>
        <text class='text-md text-custom-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit lacus, ullamcorper eget nisi at, auctor laoreet erat. Praesent vel tincidunt mauris, id tincidunt odio. Duis libero elit, pretium sed est vel, suscipit dictum odio. Suspendisse convallis mi nulla, at blandit ipsum commodo vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit lacus, u</text>
        <div class=' flex w-5/6 h-14 justify-around'>
          <input class='w-8/12 h-[7vh] rounded-md border-black border-2 p-5 text-lg pl' placeholder='Enter your email address'></input>
          <button class='sm:w-40 w-32 h-[7vh] bg-black text-white rounded-md text-lg'>Enroll</button>
        </div>
      </div>
    </div>
  )
}

export default Herosection