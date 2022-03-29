let $burger = document.querySelector(".burger")
let $navbar = document.querySelector('.navbar')
let $closeBurger =  document.querySelector('.navbar__left')
$burger.addEventListener('click', ()=>{
    $navbar.classList.toggle("navbar__active")
})

$closeBurger.addEventListener('click', ()=>{
    $navbar.classList.remove("navbar__active")
})

// animation rasm
window.onscroll = function() {g()};

function g(){
  myFunction()
  myFunction1()
}
  let img = document.querySelectorAll(".myImg")
  let text = document.querySelectorAll(".info__text")
  function myFunction() {
      let height = window.innerHeight * 1.5

          img.forEach(item =>{
              if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
                  item.classList.add ("slideUp")
              }
              height += 450
          })
         
  }

  function myFunction1(){
      let height = window.innerHeight / 2

      text.forEach(item =>{
              if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
                  item.classList.add("slideUp1")
              }
              height += 450
          })
  
  }
