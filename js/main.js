// Selection of Elements
const videoBtns = document.querySelectorAll(".video-overlay button"),
  scrollTop = document.querySelector(".scroll-top");

/*---------- Start Scroll Top ----------*/
window.onscroll = () => {
  if (scrollY >= 600) {
    scrollTop.style.display = "block";
    scrollTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });
  } else {
    scrollTop.style.display = "none";
  }
};
/*---------- End Scroll Top ----------*/

// ========== Start landing Automated Slider  ==========
const landingSlider = new Swiper(".landing-slider", {
  spaceBetween: 30,
  effect: "fade",
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});
// ========== End landing Automated Slider  ==========

// ========== Start Services slider ==========
const servicesSlider = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    550: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  }
});
// ========== End Services slider ==========
// ========== Start Works slider ==========
const worksSlider = new Swiper(".works-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    600: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  }
});

// ========== End Works slider ==========

// ========== Start News slider ==========
const newsSlider = new Swiper(".news-slider", {
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    600: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    }
  }
});
// ========== End News slider ==========
// ========== Start Feedback slider ==========
const feedbackSlider = new Swiper(".feedback-slider", {
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    600: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 4
    }
  }
});
// ========== End Feedback slider ==========
// ========== Start Videos ==========
// Slider
const videosSlider = new Swiper(".videos-slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    992: {
      slidesPerView: 2
    }
  }
});

// open video on page when press play
videoBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // let video =
  });
});
// ========== End Videos ==========
