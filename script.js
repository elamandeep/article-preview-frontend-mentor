const icon=document.querySelector('.icon')
const menu=document.querySelector('.menu')

menu.classList.toggle('hide')
icon.addEventListener('click',()=>{
    icon.classList.toggle('active')
    menu.classList.toggle('hide')
})
