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



  let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})
