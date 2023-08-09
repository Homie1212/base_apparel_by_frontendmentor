'use strict';
const submit=document.querySelector('.submit');
const email=document.querySelector('.email');
const message=document.querySelector('.errmes')
const warning=document.querySelector('.warning')

submit.addEventListener('click',function(){
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        message.classList.remove('hide');
        warning.classList.remove('hide')
    }
})