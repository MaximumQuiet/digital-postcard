'use client'

import {memo} from "react";

const RickrollLayout = memo(({children}) => {
  return (
      <div className={"flex min-h-screen items-center"}>
        <video muted autoPlay loop playsInline disablePictureInPicture preload="none" className={"absolute h-full w-full object-cover"}>
          <source src="/rickroll.webm" type="video/webm" />
          <source src="/rickroll.mp4" type="video/mp4" />
        </video>
        {children}
      </div>
  )
})

export default RickrollLayout;