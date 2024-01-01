// Selection of Elements
const scrollTop = document.querySelector(".scroll-top"),
  menuToggler = document.querySelector(".menu-toggler"),
  navMenu = document.querySelector(".nav-links"),
  navLinks = document.querySelectorAll(".nav-links li a"),
  playVideoBtns = document.querySelectorAll(".play-video"),
  closeVideoBtn = document.querySelector(".close-video"),
  iframeContainer = document.querySelector(".video-iframe"),
  iframeVideo = document.querySelector(".video-iframe iframe");

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

/*---------- Start Menu toggle ----------*/
menuToggler.addEventListener("click", () => {
  navMenu.classList.toggle("toggle-menu");
});
/*---------- End Menu toggle ----------*/
/*---------- Start links active toggle ----------*/
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => {
      l.classList.remove("active");
      link.classList.add("active");
    });
  });
});
function activeToggle(navLinks) {
  navLinks.forEach((l) => {
    l.classList.remove("active");
    link.classList.add("active");
  });
}
/*---------- End links active toggle ----------*/

// ========== Start landing Automated Slider  ==========
const landingSlider = new Swiper(".landing-slider", {
  spaceBetween: 10,
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
  spaceBetween: 20,
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
    900: {
      slidesPerView: 3
    }
  }
});
// ========== End Services slider ==========
// ========== Start Works slider ==========
const worksSlider = new Swiper(".works-content", {
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".works-pagination",
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 0.5
    },
    767: {
      slidesPerView: 1
    },
    992: {
      slidesPerView: 1.5
    },
    1200: {
      slidesPerView: 2
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
playVideoBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let videoSrc = btn.parentElement.previousElementSibling.dataset.src;
    iframeVideo.setAttribute("src", videoSrc);
    iframeContainer.classList.remove("d-none");
    iframeContainer.classList.add("d-flex");
  });
});
closeVideoBtn.addEventListener("click", () => {
  iframeVideo.setAttribute("src", "");
  iframeContainer.classList.add("d-none");
});
// ========== End Videos ==========
