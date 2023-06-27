# Frontend Mentor - Base Apparel coming soon page solution

This is my solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

#### Mobile

![](/src/images/mb.png)

#### Desktop

![](/src/images/dt.png)


### Links

- Solution URL: [solution URL](https://github.com/roodhouse/frontend-mentor-base-apparel)
- Live Site URL: [live site URL ](https://base-apparel.rugh.us/)

## My process

### Built with

- HTML5, CSS
- Mobile-first workflow
- React
- Tailwind

### What I learned

The first thing I learned was how to control the deg of a linear gradient with TailwindCSS. In the tailwind.config.js file I define what I want the gradient to look like. Then call that gradient where needed.

```js
theme: {
    extend: {
      backgroundImage: {
        'gradient-150': 'linear-gradient(150deg, #FFF 0%, #FFF4F4 100%);'
      }}}
```

```js
<div id='contentWrapper' className='pt-8 pb-[92px] bg-gradient-150 h-full'>
```
![](/src/images/linearGradient.png)

Using the rgba color model you are able to change the opacity with the last value. This project called for the opacity of the border color to be 50%. I was able to set it to that value on initial load with Tailwind using this code:

```js
<div id="formContainer" className='flex items-center justify-between border border-solid border-darkPink/[.50] rounded-[28px] bg-transparent'>
```

If the data as incorrectly entered then a new border color is shown. From here if a vaild email is then submitted I needed to revert all changes back to the original state. I used this code to get the opacity back to 50%: 

```js
        const formContainer = document.getElementById('formContainer');
        const clearText = document.getElementById('email');
        const warningContainer = document.getElementById('warningContainer');

        errorDiv.innerHTML = '';
        setNewError(errorDiv.innerHTML);
        clearText.value = ''
        warningContainer.style.display = 'none'
        formContainer.style.borderWidth = '1px'
        formContainer.style.borderColor = 'rgba(206, 152, 152, 0.5)'
```

## Author

- Website - [my site](https://rugh.us)
- Frontend Mentor - [@roodhouse](https://www.frontendmentor.io/profile/roodhouse)
- LinkedIn - [John Rugh](https://www.linkedin.com/in/john-m-rugh/)
