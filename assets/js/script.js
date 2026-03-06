const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: false,
  watchSlidesProgress: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 2.2,
      spaceBetween: 5,
      allowTouchMove: true,
    },

    768: {
      slidesPerView: 4.2,
      spaceBetween: 5,
      allowTouchMove: true,
    },
    1200: {
      slidesPerView: 5.2,
      spaceBetween: 5,
      allowTouchMove: false,
    },
    1400: {
      slidesPerView: 6.2,
      spaceBetween: 5,
      allowTouchMove: false,
    },
  },
});

const sectionList = document.querySelectorAll("#trending, #watch, #releases")

window.addEventListener('scroll', () => {
  sectionList.forEach(section => {
    let boundaries = getBoundaries(section)
    if (window.scrollY >= boundaries.top && window.scrollY <= boundaries.bottom) {
      section.style.animation = "fade 1s forwards"
    }

  })
})

function getBoundaries(element) {
  let rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    bottom: rect.bottom
  }

}


const layoutIcons = document.querySelectorAll('main .navbar-right i')
console.log(layoutIcons)
layoutIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('active')
    console.log(index)
    if(index == 0) {
      layoutIcons[1].classList.toggle('active')
    }else{
      layoutIcons[0].classList.toggle('active')
    }
    
  })
})