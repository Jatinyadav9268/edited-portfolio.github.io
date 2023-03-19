let MenuBtn = document.getElementById("MenuBtn")
MenuBtn.addEventListener('click',function(e){
  document.querySelector('body').classList.toggle('mobile-nav-active');
  this.classList.toggle('fa-xmark')
})

var typed = new Typed(".auto",{
    strings:["Frontend Developer","Graphic Designer","Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    backdelay: 1000,
    loop:true
})
