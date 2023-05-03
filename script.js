const signInBtn = document.getElementById('btnSignIn')
const container =  document.getElementById('container')
const closeBtn =  document.getElementById('close')
const signInContainer =  document.getElementById('sign-inContainer')

signInBtn.addEventListener('click', function() {
   container.style.opacity = '0.1'
   signInContainer.style.opacity = '.9'
})

closeBtn.addEventListener('click', function() {
    signInContainer.style.opacity = '0'
    container.style.opacity = '9'
})