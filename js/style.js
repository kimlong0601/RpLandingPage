/*==Header Toggle==*/
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu-close");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active")
    menu.classList.toggle("active")
})
menuClose.addEventListener("click", () => {
    menu.classList.remove("active")
    menuToggle.classList.remove("active")
})



/*==shrink header==*/
const headerShrink = document.querySelector(".header")
window.addEventListener("scroll", () =>{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        headerShrink.classList.add("active")
    }else{
        headerShrink.classList.remove("active")
    }
})


/*==Scroll into view==*/
const links = document.querySelectorAll(".menu-link");
    links.forEach((item) => {
        item.addEventListener("click", () => {
            const view = document.getElementById(item.getAttribute("data-link"));
            view.scrollIntoView({behavior:"smooth", block:"center"});
        })
    })

/*==Swiper==*/
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
  });


