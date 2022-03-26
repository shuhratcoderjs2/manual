let $burger = document.querySelector(".burger")
let $navbar = document.querySelector('.navbar')
let $closeBurger =  document.querySelector('.navbar__left')
$burger.addEventListener('click', ()=>{
    $navbar.classList.toggle("navbar__active")
})

$closeBurger.addEventListener('click', ()=>{
    $navbar.classList.remove("navbar__active")
})