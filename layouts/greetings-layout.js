'use client'

const GreetingsLayout = ({children}) => {
  return (
      <div className={"flex min-h-screen items-center"}>
        <video muted autoPlay loop playsInline disablePictureInPicture preload="none" className={"absolute h-full w-full object-cover"}>
          <source src="/greetings.webm" type="video/webm" />
        </video>
        {children}
      </div>
  )
}

export default GreetingsLayout;