var modaBtn = document.querySelector('.modal-button')
var modaBg = document.querySelector('.modal-bg')
var modaClose = document.querySelector('.modal-close')
var modaCloses = document.querySelector('.class-btn')

modaBtn.addEventListener('click', function(){
    modaBg.classList.add('bg-active')
})

modaClose.addEventListener('click', function(){
    modaBg.classList.remove('bg-active')
})

modaCloses.addEventListener('click', function(){
    modaBg.classList.remove('bg-active')
})

