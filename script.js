const menu = document.querySelector('.open');
const exit = document.querySelector('.exit');
const nav = document.querySelector('.navigation');

menu.addEventListener('click' , ()=>{
    nav.classList.add("active")
    menu.classList.add("active")
})
exit.addEventListener('click' , ()=>{
    nav.classList.remove("active")
    menu.classList.remove("active")
})