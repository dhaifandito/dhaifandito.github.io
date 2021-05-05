//const burger = document.getElementsByClassName('fa-bars');

//burger.addEventListener("click", function(){
  //  console.log("click");
//});

var logo = document.getElementsByClassName("fa-bars");
var navbar = document.getElementsByClassName("navbar");


for(i=0;i<logo.length;i++){
    logo[i].addEventListener("click", function() {
        for(i=0;i<navbar.length;i++){
            navbar[i].classList.toggle("nav_active");
        }
        
      });
}

//navbar.classList.add("nav_active");
const slides = document.querySelector('.carousel_slides');
const card = document.querySelectorAll('.card');
//
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
//
let counter = 1;
const size = card[0].clientWidth;
//
slides.style.transform = 'translateX('+ (-size*counter) + 'px)';
//
next.addEventListener('click',function(){
    if(counter >= card.length - 1)return;
    slides.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slides.style.transform = 'translateX('+ (-size*counter) + 'px)';
});
prev.addEventListener('click',function(){
    if(counter <= 0)return;
    slides.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slides.style.transform = 'translateX('+ (-size*counter) + 'px)';
});
//
slides.addEventListener('transitionend',function(){
    if(card[counter].id === 'last_clone'){
        slides.style.transition = "none";
        counter = 3;
        slides.style.transform = 'translateX('+ (-size*counter) + 'px)';
    }
    if(card[counter].id === 'first_clone'){
        slides.style.transition = "none";
        counter = 1;
        slides.style.transform = 'translateX('+ (-size*counter) + 'px)';
    }
});
//
function autoNext(){
    counter++;
    slides.style.transform = 'translateX('+ (-size*counter) + 'px)';
    slides.style.transition = 'transform 0.4s ease-in-out';
}
setInterval(autoNext, 3000);