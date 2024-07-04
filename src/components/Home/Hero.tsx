import React from 'react'

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[calc(100vw)] md:h-screen bg-[url(/herobg.jpg)] bg-cover bg-no-repeat px-12 md:px-24">
        <h1 className="text-white text-5xl leading-[1.2em] md:text-8xl font-bold drop-shadow-2xl">
            YOUR VISION, OUR FOCUS
        </h1>
    </div>
  )
}
