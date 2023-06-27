import React from 'react'
import Logo from '../images/logo.svg'

function Header() {
  return (
    <>
        <div id="logoContainer" className='w-[100px] xl:w-[158px]'>
            <img src={Logo} alt="Logo" />
        </div>
    </>
  )
}

export default Header