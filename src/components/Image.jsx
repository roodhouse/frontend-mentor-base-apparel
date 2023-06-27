import React from 'react';
import HeroMobile from '../images/hero-mobile.jpg'

function Image() {
  return (
    <>
        <div id="imgContainer">
            <img src={HeroMobile} alt="Hero" />
        </div>
    </>
  )
}

export default Image