'use client'

import {memo} from "react";

const GreetingsLayout = memo(({children}) => {
  return (
      <div className={"flex min-h-screen items-center"}>
        <video muted autoPlay loop playsInline disablePictureInPicture preload="none" className={"absolute h-full w-full object-cover"}>
          <source src="/greetings.webm" type="video/webm" />
          <source src="/greetings.mp4" type="video/mp4" />
        </video>
        {children}
      </div>
  )
})

export default GreetingsLayout;