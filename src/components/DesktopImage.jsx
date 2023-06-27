import React from 'react';
import HeroDesktop from '../images/hero-desktop.jpg'

function DesktopImage() {
  return (
    <>
        <div id="imgContainer" className='flex justify-end'>
            <img src={HeroDesktop} alt="Hero" />
        </div>
    </>
  )
}

export default DesktopImage