// Selection of Elements
const scrollTop = document.querySelector(".scroll-top"),
  menuToggler = document.querySelector(".menu-toggler"),
  langBtn = document.querySelector(".language"),
  lang = document.querySelector(".language span"),
  navMenu = document.querySelector(".nav-links"),
  navLinks = document.querySelectorAll(".nav-links li a"),
  reels = document.querySelectorAll(".reel");
(playVideoBtns = document.querySelectorAll(".play-video")),
  (closeVideoBtn = document.querySelector(".close-video")),
  (iframeContainer = document.querySelector(".video-iframe")),
  (iframeVideo = document.querySelector(".video-iframe iframe"));

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
/*---------- End links active toggle ----------*/

/*---------- Start Language toggle----------*/
window.onload = () => {
  if (localStorage.getItem("dir") == "rtl") {
    arDir();
  } else {
    enDir();
  }
};
langBtn.addEventListener("click", () => {
  if (document.body.getAttribute("dir")) {
    enDir();
  } else {
    arDir();
  }
});

function arDir() {
  document.body.setAttribute("dir", "rtl");
  document.querySelectorAll(".swiper").forEach((slider) => {
    slider.setAttribute("dir", "ltr");
  });
  document.querySelectorAll(".input-label").forEach((label) => {
    label.classList.add("ar");
  });
  menuToggler.setAttribute("dir", "ltr");
  lang.innerHTML = "EN";
  localStorage.setItem("dir", "rtl");
}
function enDir() {
  document.body.removeAttribute("dir");
  document.querySelectorAll(".swiper").forEach((slider) => {
    slider.removeAttribute("dir");
  });
  document.querySelectorAll(".input-label").forEach((label) => {
    label.classList.remove("ar");
  });
  menuToggler.setAttribute("dir", "rtl");
  lang.innerHTML = "AR";
  localStorage.removeItem("dir");
}
/*---------- End Language toggle----------*/

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
      spaceBetween: 10
    }
  }
});
// ========== End Services slider ==========
// ========== Start Works slider ==========

const worksSlider = new Swiper(".workSwiper", {
  slidesPerView: 1.75,
  spaceBetween: 30,
  keyboard: { enabled: true },
  pagination: {
    el: ".works-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      centeredSlides: false,
      grid: {
        rows: 2
      }
    },
    767: {
      slidesPerView: 1.75,
      centeredSlides: true,
      grid: {
        rows: 2
      }
    }
  }
});
// ========== End Works slider ==========

// ========== Start News slider ==========

reels.forEach((reel) => {
  reel.addEventListener("click", () => {
    let videoSrc = reel.dataset.reel;
    iframeVideo.setAttribute("src", videoSrc);
    iframeContainer.classList.remove("d-none");
    iframeContainer.classList.add("d-flex");
  });
});

const newsSlider = new Swiper(".news-slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
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
  // slidesPerView: 2,
  // spaceBetween: 20,
  centeredSlides: true,
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
      slidesPerView: 1
    }
  }
});

// open video in iframe
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
