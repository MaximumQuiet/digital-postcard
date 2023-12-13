'use client'

const AudioRequest = ({children, allowed, onAllowed}) => {
  return (
      <div>
        {children}
        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-2xl backdrop-brightness-50" style={{ visibility: allowed ? 'hidden' : 'visible'}}>
          <div
              className="z-20 p-4 sticky font-silkscreen top-0 text-sm max-sm:text-xs text-amber-50 lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a>
              Press me
            </a>
          </div>
          <button
              onClick={() => {
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
      </div>
  )
}

export default AudioRequest;