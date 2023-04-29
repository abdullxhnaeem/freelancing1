import React from 'react'

function TextComponent(props) {
  return (
    <div class={props.check == 1 ? 'bg-custom-orange  bg-pic1 bg-blend-soft-light bg-no-repeat bg-center md:bg-custom-white md:w-1/2 w-full h-[60vh] flex-col flex justify-around items-center lg:px-24 md:px-10 py-5 px-12' : [ props.check == 2 ? 'bg-custom-yellow bg-pic2 bg-blend-soft-light bg-no-repeat bg-center md:bg-custom-white md:w-1/2 w-full h-[60vh] flex-col flex justify-around items-center lg:px-24 md:px-10 py-5 px-12' : 'bg-custom-blue bg-pic3 bg-blend-soft-light bg-no-repeat bg-center md:bg-custom-white md:w-1/2 w-full h-[60vh] flex-col flex justify-around items-center lg:px-24 md:px-10 py-5 px-12']}>
        <text class='text-4xl font-extrabold text-center'>{props.headingText}</text>
        <text class='text-md text-custom-grey text-center'>{props.normalText}</text>
        <button class='w-40 h-[7vh] bg-black text-white rounded-md text-lg'>Get Started</button>
    </div>
  )
}

export default TextComponent