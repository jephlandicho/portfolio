const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;

const phrases = ["Developer", "Programmer", "Data Analyst"];
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
