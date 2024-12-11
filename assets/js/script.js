const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*======================= ACCORD SKILLS ======================*/

const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*============== Qualification Skills ===============*/

/*const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})      
*/

/*======================= Services Modal ===================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*======================= Portfolio Swiper ===================*/
var swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL up ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme,
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme,
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});


const phrases = ["Web Developer", "Database Administrator", "Data Analyst", "Freelancer"];
let currentPhrase = 0;
let currentLetter = 0;
let isDeleting = false;
const typingSpeed = 200;
const deletingSpeed = 100;
const betweenPhraseDelay = 2000; // 2 seconds delay between phrases
const element = document.getElementById('serviceDisplay');

function type() {
  const current = phrases[currentPhrase];
  let displayText;

  if (!isDeleting) {
    displayText = current.substring(0, currentLetter++);
    if (currentLetter === current.length + 1) {
      isDeleting = true;
      setTimeout(type, betweenPhraseDelay); // Pause at the end of a phrase
    } else {
      setTimeout(type, typingSpeed);
    }
  } else {
    displayText = current.substring(0, currentLetter--);
    if (currentLetter === 0) {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length; // Loop back to first phrase
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(type, deletingSpeed);
    }
  }

  element.textContent = displayText;
}

// Start the typing effect
type();

// Define image galleries for each portfolio
var imageGalleries = [
  [
    "assets/img/portfolio3/portfolio1.png",
    "assets/img/portfolio3/portfolio2.png",
    "assets/img/portfolio3/portfolio3.png",
    "assets/img/portfolio3/portfolio4.png",
  ],
  [
    "assets/img/portfolio1/portfolio1.png",
    "assets/img/portfolio1/portfolio2.png",
    "assets/img/portfolio1/portfolio3.png",
    "assets/img/portfolio1/portfolio4.png",
    "assets/img/portfolio1/mobile_1.jpg",
    "assets/img/portfolio1/mobile_2.jpg",
    "assets/img/portfolio1/mobile_3.jpg",
    "assets/img/portfolio1/mobile_4.jpg",
    "assets/img/portfolio1/mobile_5.jpg"
  ],
  [
    "assets/img/portfolio2/porfolio1.png",
    "assets/img/portfolio2/porfolio2.png",
    "assets/img/portfolio2/porfolio3.png",
    "assets/img/portfolio2/porfolio4.png",
    "assets/img/portfolio2/porfolio5.png",
  ],
  
  // Add more galleries as needed for other portfolios
];

var currentPortfolioIndex = 0; // Current portfolio index
var currentIndex = 0; // Current image index
var images = document.querySelectorAll('.portfolio__img'); // All portfolio images

// Function to open the lightbox
function openLightbox(portfolioIndex, imageIndex) {
  currentPortfolioIndex = portfolioIndex;
  currentIndex = imageIndex; // Start with the clicked image in the gallery
  document.getElementById('lightbox').style.display = 'block';
  updateLightboxImage();
}

// Close the lightbox
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function updateLightboxImage() {
  document.querySelector('.lightbox-img').src = imageGalleries[currentPortfolioIndex][currentIndex];
}

// Change the lightbox image
function changeImage(step, event) {
  if (event) {
    event.stopPropagation(); // Prevent the click from closing the lightbox
  }

  currentIndex += step;
  if (currentIndex >= imageGalleries[currentPortfolioIndex].length) {
    currentIndex = 0; // Loop back to the first image
  } else if (currentIndex < 0) {
    currentIndex = imageGalleries[currentPortfolioIndex].length - 1; // Loop back to the last image
  }
  updateLightboxImage();
}

// Add click event to images
images.forEach((img, index) => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => openLightbox(img.dataset.portfolioIndex, index)); // Passing portfolio index and image index
});


