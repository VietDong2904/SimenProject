var wishlistBtn = document.querySelector('.wishlist-btn')
var wishlistForm = document.querySelector('.navbar-wishlist')
var modal = document.querySelector('.modal-overlay1');
var formBtn = document.querySelector('.form-btn')
var formLog = document.querySelector('.page-form')
var cartBtn = document.querySelector('.cart-btn')
var cartForm = document.querySelector('.navbar-cart')

wishlistBtn.addEventListener('click',function() {
  wishlistForm.style.display = 'block';
  modal.style.display = 'block';
})

wishlistForm.addEventListener('click',function(e) {
  e.stopPropagation();
})

cartBtnddEventListener('click',function() {
    cartForm.style.display = 'block';
    modal.style.display = 'block';
})


modal.addEventListener('click',function() {
  wishlistForm.style.display = 'none';
  modal.style.display = 'none';
  cartForm.style.display = 'none'
  formLog.style.display = 'none'
})

formBtn.addEventListener('click',function() {
  formLog.style.display = 'flex'
  modal.style.display = 'block';
})

formLog.addEventListener('click',function(e) {
  e.stopPropagation();
})

$(document).ready(function(){
    $('.first-left__slider').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      draggable: false
  });
});

$(document).ready(function(){
  $('.product-type__col').slick({
      slidesToShow: 5,
      arrows: true,
      prevArrow:"<button type='button' class='slick-prev pull-left '><i class='arrow-icon fas fa-long-arrow-alt-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right '><i class='arrow-icon fa fa-long-arrow-alt-right' aria-hidden='true'></i></button>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 739,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
});

$(document).ready(function(){
  $('.product-most__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('.product-lastest__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('.brand__list').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
});

      