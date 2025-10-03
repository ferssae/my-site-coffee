const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});
  
//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {

  loop: true,
  grapCursor: true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 
  breakpoints:{
    0: {
      sliderPerView:1
    },
  
     768: {
      sliderPerView:2
    },

     1024: {
      sliderPerView:3
    },
    
  }

});
