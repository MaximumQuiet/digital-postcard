'use client'

import {memo} from "react";

const RickrollLayout = memo(({children}) => {
  return (
      <div className={"flex min-h-screen items-center"}>
        <video muted autoPlay loop playsInline disablePictureInPicture preload="auto" className={"absolute h-full w-full object-cover"}>
          <source src="/rickroll.mp4" type="video/mp4" />
          <source src="/rickroll.webm" type="video/webm" />
        </video>
        {children}
      </div>
  )
})

export default RickrollLayout;