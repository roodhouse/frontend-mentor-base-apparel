import React from 'react';
import Arrow from '../images/icon-arrow.svg'

function Form() {
  return (
    <>
        <div id="formContainer" className='flex items-center justify-between border border-solid border-darkPink/[.50] rounded-[28px] bg-transparent'>
            <form className='flex w-full justify-between'>
                <div id="inputContainer" className='font-["Josefin_Sans"] text-sm leading-[28px]'>
                    <input 
                        type="email" 
                        id='email'
                        title='Please match the format'
                        placeholder='Email Address'
                        className=' placeholder:text-darkPink placeholder:opacity-50 bg-transparent pl-6 pt-[11px] pb-[9px] w-[240px]'
                    />
                </div>
                <div id="arrowWrapper" className='flex w-[64px] h-[48px]'>
                    <div id="arrowContainer" className='w-full h-full flex items-center justify-center bg-gradient-135 rounded-[28px]'>
                       <button className='w-full h-full flex items-center justify-center'>
                            <img src={Arrow} alt="Arrow" />
                       </button>
                    </div>
            </div>
            </form>
            {/* <div id="arrowWrapper" className='flex w-[64px] h-[48px]'>
                <div id="arrowContainer" className='w-full h-full flex items-center justify-center bg-gradient-135 rounded-[28px]'>
                    <img src={Arrow} alt="Arrow" />
                </div>
            </div> */}
        </div>
    </>
  )
}

export default Form