$(document).ready(function () {
  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  })

  if (document.querySelector('[name="phone"]')) {
    $('[name="phone"]').mask('+7 (999) 999-99-99', {
      placeholder: '_',
      autoclear: false,
    })
  }

  const modalCounter = document.querySelectorAll('.count')

  modalCounter.forEach((element) => {
    element.addEventListener('click', function (event) {
      const e = event.target
      const num = element.querySelector('.count__num')
      let sum = +num.innerHTML

      if (e.classList.contains('count__plus')) {
        ++sum
        num.innerHTML = sum
      }
      if (e.classList.contains('count__minus')) {
        if (sum > 1) {
          --sum
          num.innerHTML = sum
        }
      }
    })
  })

  const gallerySlide = document.querySelectorAll('.project__item')

  gallerySlide?.forEach((elem) => {
    const galleryImg = elem.querySelector('.project__img')
    const galleryHidden = elem.querySelector('.project__hidden')?.firstElementChild
    galleryImg.addEventListener('click', () => {
      galleryHidden.click()
    })
  })

  $('.faq__item').click(function () {
    $(this).toggleClass('faq__item--active').children().last().slideToggle()
    $('.faq__item').not(this).removeClass('faq__item--active').children().last().slideUp()
  })

  function copy(elem) {
    elem.forEach((span, index) => {
      index >= 9
        ? (span.textContent = `( ${index + 1} )`)
        : (span.textContent = `( 0${index + 1} )`)
    })
  }

  const schoolboySpan = document.querySelectorAll('.schoolboy__list-span')
  const createdSpan = document.querySelectorAll('.created__item-span')
  const causesdSpan = document.querySelectorAll('.causes__item-span')

  copy(schoolboySpan)
  copy(createdSpan)

  if (innerWidth <= 1024) {
    copy(causesdSpan)
  }

  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__item')

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

  const swiper = new Swiper('.schoolboy__item-swiperRight', {
    spaceBetweenViews: 10,
    allowTouchMove: false,
    slidesPerView: 1,
  })

  const swiper2 = new Swiper('.schoolboy__item-swiperLeft', {
    spaceBetweenViews: 10,
    navigation: {
      nextEl: '.schoolboy__next',
      prevEl: '.schoolboy__prev',
    },
    thumbs: {
      swiper: swiper,
    },
  })

  const reviewsSwiper = new Swiper('.reviews__swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.reviews__arrow-next',
      prevEl: '.reviews__arrow-prev',
    },
    breakpoints: {
      1025: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      414: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  })

  const swiper3 = new Swiper('.created__item-swiperRight', {
    allowTouchMove: false,
    spaceBetween: 20,
    slidesPerView: 1,
  })

  const swiper4 = new Swiper('.created__item-swiperLeft', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.created__next',
      prevEl: '.created__prev',
    },
    thumbs: {
      swiper: swiper3,
    },
  })

  var myMap
  var targetMap = document.querySelectorAll('.contacts__target-item')

  targetMap?.forEach((elem, index) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()

      myMap?.setCenter([points[index][1], points[index][2]], 14)
    })
  })

  //yandexMap
  var points = [
    [
      '<div class="map-baloon"><p></p><p>Национальный музей Республики Татарстан, улица Кремлевская, Казань</p></div>',
      '55.795502941357796',
      '49.10940405712719',
    ],
    [
      '<div class="map-baloon"><p></p><p>Казанский кремль, Казань</p></div>',
      '55.79934411190213',
      '49.10598816892895',
    ],
  ]
  if (document.querySelector('.map')) {
    ymaps?.ready(function () {
      var myCollection = new ymaps.GeoObjectCollection()

      myMap = new ymaps.Map('mapYandex', {
        center: [55.79551363960915, 49.10941442034216],
        zoom: 17,
        controls: ['zoomControl', 'geolocationControl', 'trafficControl'],
      })

      for (i = 0; i < points.length; i++) {
        var myPlacemark = new ymaps.Placemark(
          [points[i][1], points[i][2]],
          {
            balloonContent: points[i][0],
          },
          {
            iconLayout: 'default#image',
            // iconImageHref: '../images/icons/marker.svg',
            // iconImageSize: [48, 61],
            balloonLayout: 'default#imageWithContent',
          }
        )
        myCollection.add(myPlacemark)
        myMap.geoObjects.add(myPlacemark)

        myMap.events.add('click', function (e) {
          myMap.balloon.close()
        })
      }
    })
  }

  // const schoolboySpan = document.querySelectorAll('.schoolboy__list-span')
  // schoolboySpan.forEach((span, index) => {
  //   index >= 9 ? (span.textContent = `( ${index + 1} )`) : (span.textContent = `( 0${index + 1} )`)
  // })

  // const createdSpan = document.querySelectorAll('.created__item-span')
  // createdSpan.forEach((span, index) => {
  //   index >= 9 ? (span.textContent = `( ${index + 1} )`) : (span.textContent = `( 0${index + 1} )`)
  // })

  // if (innerWidth <= 1024) {
  //   const causesdSpan = document.querySelectorAll('.causes__item-span')
  //   causesdSpan.forEach((span, index) => {
  //     index >= 9
  //       ? (span.textContent = `( ${index + 1} )`)
  //       : (span.textContent = `( 0${index + 1} )`)
  //   })
  // }
})
