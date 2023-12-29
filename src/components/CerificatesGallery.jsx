import React from 'react'
import img1 from '../assets/certificates/web-development-ibm.webp'
import img2 from '../assets/certificates/javascript-microverse.webp'
import img3 from '../assets/certificates/html-microverse.webp'
import img4 from '../assets/certificates/react-redux.webp'
export default function CerificatesGallery() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
      <div>
        <img src={img1} className="h-auto max-w-full rounded-lg" />
      </div>
      <div>
        <img src={img2} className="h-auto max-w-full rounded-lg" />
      </div>
      <div>
        <img src={img3} className="h-auto max-w-full rounded-lg" />
      </div>
      <div>
        <img src={img4} className="h-auto max-w-full rounded-lg" />
      </div>
    </div>
  )
}
