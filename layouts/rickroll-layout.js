'use client'

const RickrollLayout = ({children}) => {
  return (
      <div className={"flex min-h-screen items-center p-24 bg-cover bg-center bg-[url('/rickroll.gif')]"}>
        {children}
      </div>
  )
}

export default RickrollLayout;