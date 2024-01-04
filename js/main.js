// Selection of Elements
const scrollTop = document.querySelector(".scroll-top"),
  menuToggler = document.querySelector(".menu-toggler"),
  langBtn = document.querySelector(".language"),
  lang = document.querySelector(".language span"),
  navMenu = document.querySelector(".nav-links"),
  navLinks = document.querySelectorAll(".nav-links li a"),
  landingSlides = document.querySelector(".landing-slides"),
  worksHeading = document.querySelector(".works .heading"),
  worksSubtitle = document.querySelector(".works .works-subtitle"),
  servicesSlides = document.querySelector(".services-slides"),
  worksSlides = document.querySelector(".works-slides"),
  newsHeading = document.querySelector(".news .head"),
  feedbackHeading = document.querySelector(".feedback .heading"),
  reels = document.querySelectorAll(".reel"),
  playVideoBtns = document.querySelectorAll(".play-video"),
  closeVideoBtn = document.querySelector(".close-video"),
  iframeContainer = document.querySelector(".video-iframe"),
  iframeVideo = document.querySelector(".video-iframe iframe"),
  contactHeading = document.querySelector(".contact .head"),
  inputName = document.querySelector(".contact .name"),
  inputPhone = document.querySelector(".contact .phone"),
  inputEmail = document.querySelector(".contact .email"),
  textArea = document.querySelector(".contact textarea"),
  submitBtn = document.querySelector(".contact .submit"),
  websiteHeading = document.querySelector(".website h2"),
  websiteSubtitle = document.querySelector(".website p"),
  websiteVisit = document.querySelector(".website a"),
  footerHeading = document.querySelector(".page-footer h3"),
  footerSubtitle = document.querySelector(".page-footer p");

console.log(textArea.placeholder);
/*--------------- Start Localization --------------- */
let language;
// document.addEventListener("DOMContentLoaded", () => {

// });

// localStorage.setItem("lang", "en");
window.onload = () => {
  localStorage.getItem("lang") ? (language = localStorage.getItem("lang")) : "";
  getData();
  if (localStorage.getItem("lang") == "ar") {
    arDir();
  } else {
    enDir();
  }
};

langBtn.addEventListener("click", () => {
  getData();
  window.location.href = "index.html";
});

function getData() {
  fetch("../db/db.json")
    .then((res) => res.json())
    .then((data) => {
      // nav links
      navLinksLang(data[language].lang, data[language].navLinks);
      // console.log(data[language].servicesSlides);
      // landing Slides
      data[language].landingSlides.map((slide) => {
        landingSlides.append(landingSlide(slide));
      });
      // Services Slides
      data[language].servicesSlides.map((slide) => {
        servicesSlides.append(servicesSlide(slide));
      });
      // Works Heading and subtitle
      worksHeading.innerHTML = data[language].works.heading;
      worksSubtitle.innerHTML = data[language].works.workSub;
      // Works Slides
      data[language].works.slides.map((slide) => {
        worksSlides.append(workSlide(slide));
      });
      // news heading
      newsHeading.innerHTML = data[language].reels.heading;
      // feedback heading
      feedbackHeading.innerHTML = data[language].reviews.heading;
      // contact
      contactHeading.innerHTML = data[language].contact.heading;
      inputName.innerHTML = data[language].contact.name;
      inputPhone.innerHTML = data[language].contact.phone;
      inputEmail.innerHTML = data[language].contact.email;
      textArea.placeholder = data[language].contact.message;
      submitBtn.value = data[language].contact.submit;
      // visit website
      websiteHeading.innerHTML = data[language].website.heading;
      websiteSubtitle.innerHTML = data[language].website.subtitle;
      websiteVisit.innerHTML = data[language].website.visitBtn;
      // footer
      footerHeading.innerHTML = data[language].footer.heading;
      footerSubtitle.innerHTML = data[language].footer.subtitle;
    });
}

// function to get nav links innerText from json file
function navLinksLang(langDb, linksArr) {
  lang.innerHTML = langDb;
  for (let i = 0; i < linksArr.length; i++) {
    navLinks[i].innerHTML = linksArr[i];
  }
}

// function To create landing slide
function landingSlide({ heading, imgSrc }) {
  let slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `
  <h2
    class="heading text-center text-capitalize text-light my-3 my-md-4 fw-bold"
  >
    ${heading}
  </h2>
  <img
    class="img-fluid"
    src= ${imgSrc}
    alt="landing image"
  />
  `;
  return slide;
}
// function To create services slide
function servicesSlide({ text, imgSrc }) {
  let slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `
    <div class="img-content">
      <img
        loading="lazy"
        class="img-fluid"
        src=${imgSrc}
        alt=" services image"
      />
    </div>
    <p class="text-capitalize fw-bold text-light">${text}</p>
  `;
  return slide;
}

// function To create services slide
function workSlide({ imgSrc, cardHeading, cardText }) {
  let slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `
  <div class="card rounded-4">
  <img
    loading="lazy"
    src=${imgSrc}
    class="img-fluid"
    alt="card image"
  />
  
  <div class="card-body text-center text-light pt-4">
    <h5 class="card-title text-capitalize pb-2">${cardHeading}</h5>
    <p class="card-text">
    ${cardText}
    </p>
  </div>
  <div class="card-overlay">
    <a href="#"><i class="fa-duotone fa-link"></i></a>
  </div>
</div>
  `;
  // slide.innerHTML = `
  //   slide1
  // `
  return slide;
}

/*---------- Start Language toggle----------*/

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
  language = "ar";
  menuToggler.setAttribute("dir", "ltr");
  localStorage.setItem("lang", "ar");
}
function enDir() {
  document.body.removeAttribute("dir");
  document.querySelectorAll(".swiper").forEach((slider) => {
    slider.removeAttribute("dir");
  });
  document.querySelectorAll(".input-label").forEach((label) => {
    label.classList.remove("ar");
  });
  language = "en";
  menuToggler.setAttribute("dir", "rtl");
  localStorage.setItem("lang", "en");
}
/*---------- End Language toggle----------*/
/*--------------- End Localization --------------- */

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
    nextEl: ".services-next",
    prevEl: ".services-prev"
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
  grabCursor: true,
  spaceBetween: 20,
  loop: true,
  loopAddBlankSlides: true,
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
    reverseDirection: true
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      grid: {
        rows: 2
      }
    },
    767: {
      slidesPerView: 2.25,
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
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".video-next",
    prevEl: ".video-prev"
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
