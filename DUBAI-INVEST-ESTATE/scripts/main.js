$(document).ready(function () {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__item')

  if (document.querySelector('[name="phone"]')) {
    $('[name="phone"]').mask('+7 (999) 999-99-99', {
      autoclear: false,
    })
  }

  if (burger) {
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.active').length) {
        burger.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('no-scroll')
      }
      e.stopPropagation()
    })

    menuItem.forEach((item) => {
      item.addEventListener('click', () => {
        burger.classList.toggle('active')
        menu.classList.remove('active')
        body.classList.remove('no-scroll')
      })
    })

    burger.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      body.classList.toggle('no-scroll')
    })
  }

  const lang = document.querySelector('.header__lang')
  lang.addEventListener('click', () => {
    if (lang.classList.contains('header__lang--active')) {
      lang.classList.remove('header__lang--active')
    } else {
      lang.classList.add('header__lang--active')
    }
  })

  const langNow = document.querySelector('.header__lang-now')
  const langBtn = document.querySelector('.header__lang-btn')

  langBtn.addEventListener('click', () => {
    const text = langNow.textContent
    langNow.textContent = langBtn.textContent
    langBtn.textContent = text
  })

  const swiper = new Swiper('.top__bg', {
    effect: 'fade',
    // allowTouchMove: false,
    slidesPerView: 1,
  })

  const swiper2 = new Swiper('.top__swiper', {
    spaceBetweenViews: 50,
    thumbs: {
      swiper: swiper,
    },
  })

  if (document.querySelector('.partners__swiper')) {
    const partnersSwiper = new Swiper('.partners__swiper', {
      slidesPerView: 3,
      spaceBetween: 72,
    })
  }
  if (document.querySelector('.popular__swiper')) {
    const popularSwiper = new Swiper('.popular__swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.popular__next',
        prevEl: '.popular__prev',
      },
    })
  }
})
