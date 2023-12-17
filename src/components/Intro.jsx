import React from 'react'

export default function Intro({className}) {
  return (
    <div className={className} >
      <p className='font-sans dark:text-white font-semibold text-4xl md:text-5xl'>Intro</p>
      <p className='dark:text-white font-sans text-lg md:text-2xl sm:text-xl'>
      I'M A PARAGRAPH. CLICK HERE TO ADD YOUR OWN TEXT AND EDIT ME. IT’S 
      EASY. JUST CLICK “EDIT TEXT” OR DOUBLE CLICK ME TO ADD YOUR OWN CONTENT 
      AND MAKE CHANGES TO THE FONT. FEEL FREE TO DRAG AND DROP ME ANYWHERE YOU 
      LIKE ON YOUR PAGE. 
      </p>
      <button 
      type='button' 
      className='font-semibold font-sans dark:text-white border-2 border-green-400 hover:bg-green-400 p-2 transition delay-100 duration-300 ease-in-out'
      >
        Get My Resume
      </button>
    </div>
  )
}
