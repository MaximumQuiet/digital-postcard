'use client'

import {useState} from "react";

const AudioRequest = ({children, onAllowed}) => {
  const [allowed, setAllowed] = useState(false);
  if (allowed) {
    return <>
      {children}
    </>
  } else {
    return (
        <div className="min-h-screen">
          <div className="absolute inset-0 flex items-center justify-center">
            <div
                className="z-20 p-4 sticky font-silkscreen top-0 text-sm max-sm:text-xs text-amber-50 lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a>
                Press me
              </a>
            </div>
            <button
                onClick={() => {
                  setAllowed(true)
                  onAllowed()
                }}
                className="z-20 bg-amber-400 bg-opacity-0 p-4 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transform active:scale-90 transition duration-150"
                aria-label="Play"
            >
              <div className="text-7xl">
                🎁
              </div>
            </button>
          </div>


          <div className="filter brightness-1 blur-2xl">
            {children}
          </div>
        </div>
    )
  }
}

export default AudioRequest;