import React from 'react'

function Copy() {
  return (
    <>
        <div id="copyContainer" className='flex flex-col items-center text-center'>
            <div id="heading" className='text-darkPink font-["Josefin_Sans"] text-[40px] leading-[42px] tracking-[10.825px] font-light'>
                <h1>WE'RE</h1>
            </div>
            <div id="subHeading" className='text-brown font-["Josefin_Sans"] text-[40px] leading-[42px] tracking-[10.825px] font-semibold pb-4'>
                <h2>COMING SOON</h2>
            </div>
            <div id="body" className='text-darkPink font-["Josefin_Sans"] text-sm leading-[22px]'>
                <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
            </div>
        </div>
    </>
  )
}

export default Copy