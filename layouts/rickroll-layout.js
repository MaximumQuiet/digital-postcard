'use client'

const RickrollLayout = ({children}) => {
  return (
      <div className={"flex min-h-screen items-center"}>
        <video muted autoPlay loop playsInline disablePictureInPicture preload="auto" className={"absolute h-full w-full object-cover"}>
          <source src="/rickroll.webm" type="video/webm" />
        </video>
        {children}
      </div>
  )
}

export default RickrollLayout;