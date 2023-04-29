import React from 'react'
import ImageComponent from './ImageComponent'
import TextComponent from './TextComponent'
import vector1 from '../Images/vector1.png'
import vector2 from '../Images/vector2.png'
import vector3 from '../Images/vector3.png'

function Cards() {

  var CardInfo = [
    {pic:vector1,headingText:'Create with Pixl',normalText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit lacus, ullamcorper eget nisi at, auctor laoreet erat. Praesent vel tincidunt mauris, id tincidunt odio. Duis libero elit, pretium sed est vel, suscipit dictum odio. Suspendisse convallis mi nulla, at blandit ipsum commodo vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit lacus',check:1},
    {pic:vector2,headingText:'Write with Authorly',normalText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit lacus, ullamcorper eget nisi at, auctor laoreet erat. Praesent vel tincidunt mauris, id tincidunt odio. Duis libero elit, pretium sed est vel, suscipit dictum odio. Suspendisse convallis mi nulla, at blandit ipsum commodo vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit lacus',check:2},
    {pic:vector3,headingText:'Build with Brandify',normalText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit lacus, ullamcorper eget nisi at, auctor laoreet erat. Praesent vel tincidunt mauris, id tincidunt odio. Duis libero elit, pretium sed est vel, suscipit dictum odio. Suspendisse convallis mi nulla, at blandit ipsum commodo vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit lacus',check:3}

  ] 

  return (
    <div class='w-full min-h-screen flex md:flex-row flex-col flex-wrap'>
      {
       CardInfo.map((item,index) =>
        (
          index%2==0 
          ?
            <>
              <ImageComponent check={item.check} pic={item.pic}/>
              <TextComponent check={item.check} pic={item.pic} normalText={item.normalText} headingText={item.headingText}/>
            </>
          :
            <>
              <TextComponent check={item.check} pic={item.pic} normalText={item.normalText} headingText={item.headingText}/>
              <ImageComponent check={item.check}  pic={item.pic}/>
            </>
        ))
      }
    </div>
    
  )
}

export default Cards