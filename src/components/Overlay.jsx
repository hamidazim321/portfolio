import React from 'react'

export default function Overlay({darkColor, lightColor}) {
  return (
    <div 
    className={`absolute w-full h-full dark:bg-${darkColor && darkColor} bg-${lightColor && lightColor} left-0 right-0 top-0 bottom-0 z-0`}
    >
    </div>
  )
}
