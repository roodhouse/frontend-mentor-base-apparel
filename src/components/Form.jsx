import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Arrow from '../images/icon-arrow.svg';
import ErrorIcon from '../images/icon-error.svg'

function Form() {

    const [input, setInput] = useState('');
    const [newError, setNewError] = useState('')
    
    
    const emailRegex = /\w+@\w+\.\w{2,3}/;

    function isEmailValid(emailAddress) {
        return emailRegex.test(emailAddress)
    }

    const { register, resetField, handleSubmit, formState: {errors} } = useForm({defaultValues: {
        email: ''
    }})

    useEffect(() => {
        var input = document.getElementById('email');
        setInput(input)

        input.addEventListener('invalid', function(event) {
            event.preventDefault();
            const errorDiv = document.getElementById('errorContainer').firstChild;
            if(isEmailValid(event.target.value)) {
                console.log('true')
                errorDiv.innerHTML = ''
            } else {
                const formContainer = document.getElementById('formContainer');
                const warningContainer = document.getElementById('warningContainer');
                console.log(warningContainer)
                warningContainer.style.display = 'block'
                formContainer.style.borderWidth = '2px'
                formContainer.style.borderRightWidth = '0px'
                formContainer.style.borderColor = '#F96464'
                console.log('invalid email')
                errorDiv.innerHTML = 'Please provide a valid email'
                setNewError(errorDiv.innerHTML)
             
            }
        })
    },[])

    const onSubmit = (data) => {
        
        const errorDiv = document.getElementById('errorContainer').firstChild;
        const formContainer = document.getElementById('formContainer');
        const clearText = document.getElementById('email');
        const warningContainer = document.getElementById('warningContainer');

        if(data.email === '') {
            console.log('empty')
            console.log(errorDiv)
            console.log(warningContainer)
            warningContainer.style.display = 'block';
            formContainer.style.borderWidth = '2px';
            formContainer.style.borderRightWidth = '0px'
            formContainer.style.borderColor = '#F96464';
            errorDiv.innerHTML = 'An email is required'
        } else {
            errorDiv.innerHTML = '';
            setNewError(errorDiv.innerHTML);
            clearText.value = ''
            warningContainer.style.display = 'none'
            formContainer.style.borderWidth = '1px'
            formContainer.style.borderColor = 'rgba(206, 152, 152, 0.5)'
            resetField('email')
            console.log(data.email)
        }
    }

  return (
    <>
        <div id="formContainer" className='h-[48px] flex items-center justify-between border border-solid border-darkPink/[.50] rounded-[28px] bg-transparent xl:w-[444px] xl:h-[55px]'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex w-full justify-between items-center'>
                <div id="inputContainer" className='font-["Josefin_Sans"] text-sm xl:text-base leading-[28px]'>
                    <input 
                        type="email" 
                        id='email'
                        {...register('email')}
                        title='Please match the format'
                        placeholder='Email Address'
                        className=' placeholder:text-darkPink placeholder:opacity-50 bg-transparent pl-6 pt-[11px] pb-[9px] w-[210px] xl:w-[300px]'
                    />
                </div>
                <div id="warningContainer" className='w-[24px] h-[24px] hidden'>
                    <img src={ErrorIcon} alt="Error" />
                </div>
                <div id="arrowWrapper" className='flex w-[64px] h-[48px] xl:w-[100px] xl:h-[56px] cursor-pointer'>
                    <div id="arrowContainer" className='w-full h-full flex items-center justify-center bg-gradient-135 rounded-[28px]'>
                       <button type='submit' className='w-full h-full flex items-center justify-center'>
                            <img src={Arrow} alt="Arrow" />
                       </button>
                    </div>
            </div>
            </form>
        </div>
        <div id='errorContainer' className='text-hotPink text-[13px] font-["Josefin_Sans"] pl-6 pt-2 xl:pt-1 xl:leading-[28px]'>
            <p>{errors.email?.message}</p>
        </div>
    </>
  )
}

export default Form