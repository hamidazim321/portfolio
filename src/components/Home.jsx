import React from 'react'

export default function Home() {
  return (
    <div className='dark:bg-slate-600 w-full p-4 md:ps-64'>
      <p className='font-mono font-black text-7xl md:text-9xl tracking-wide dark:text-white'>
        I<span className='text-lime-400'>&#39;</span>M <br/>
        Hamid<br/>
        Azim<span className='text-lime-400'>&#x2e;</span>
      </p>
      <p className='font-sans dark:text-slate-100 text-xl md:text-2xl antialiased'>
        Front End Web developer <span>&#x26;</span> <br />
        Freelancer
      </p>
    </div>
  )
}
