const $ = document,
form=$.querySelector('form'),
claimBtn = $.getElementById('claim')


function alertMessage(message,target){
    target.classList.add("error-input")
    target.insertAdjacentHTML('afterend',`<small class="error-msg">${message}</small>`)
}

claimBtn.addEventListener('click',e=>{//also work with Enter
    e.preventDefault()
    const inputs = form.getElementsByClassName('data-in')

    Array.from(inputs).forEach(k=>{
        k.classList.remove('error-input')
        if(k.type==='email'){
            const emailRE = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

            if(!emailRE.test(k.value)) alertMessage("Looks like this is not an email",k)
        }
        else{
            if(k.value === ''){
                alertMessage(`${k.placeholder} cannot be empty`,k)
            }
        }
    })
})
