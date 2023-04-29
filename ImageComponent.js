import React from 'react'

function ImageComponent(props) {
  return (
    <div class={props.check ==1 ?'bg-custom-orange md:w-1/2 w-0 md:h-[60vh] h-0': [ props.check==2?'bg-custom-yellow md:w-1/2 w-0 md:h-[60vh] h-0': 'bg-custom-blue md:w-1/2 w-0 md:h-[60vh] h-0']}>
      <div class='w-full h-full flex justify-center items-center'>
        <img src={props.pic} class='w-60 h-44' />
      </div>
    </div>
  )
}

export default ImageComponent