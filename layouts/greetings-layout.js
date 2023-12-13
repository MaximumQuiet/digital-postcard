'use client'

const GreetingsLayout = ({children}) => {
  return (
      <div className={"min-h-screen items-center p-24 bg-cover bg-center bg-[url('/greetings.gif')] z-20"}>
        {children}
      </div>
  )
}

export default GreetingsLayout;