// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});
const typedNameElement = document.getElementById("typed-name");
const typedPostElement = document.getElementById("typed-post");

const staticNamePart = "I'm Shivansh "; // Part that remains
const animatedSurname = "Nigam"; // Only this retypes after first loop

const staticPostPart = "Android "; // Part that remains
const animatedPost = "Developer"; // Only this retypes after first loop

let surnameIndex = 0, postIndex = 0;
const typingSpeed = 100; // Speed in milliseconds per letter
let firstCycle = true; // Tracks first loop

// Function to type full name initially, then only surname
function typeName() {
  if (firstCycle) {
    typedNameElement.innerHTML = staticNamePart; // Display first part
    typeSurname(); // Start typing surname
  } else {
    typedNameElement.innerHTML = staticNamePart; // Keep first part static
    typeSurname(); // Start retyping surname
  }
}

// Function to type the surname (with effect)
function typeSurname() {
  if (surnameIndex < animatedSurname.length) {
    typedNameElement.innerHTML += animatedSurname.charAt(surnameIndex);
    surnameIndex++;
    setTimeout(typeSurname, typingSpeed);
  } else {
    setTimeout(typePost, 500); // Wait before typing post
  }
}

// Function to type full post initially, then only "Developer"
function typePost() {
  if (firstCycle) {
    typedPostElement.innerHTML = staticPostPart; // Display first part
    typeAnimatedPost(); // Start typing the rest
  } else {
    typedPostElement.innerHTML = staticPostPart; // Keep first part static
    typeAnimatedPost(); // Retype only "Developer"
  }
}

// Function to type "Developer" (with effect)
function typeAnimatedPost() {
  if (postIndex < animatedPost.length) {
    typedPostElement.innerHTML += animatedPost.charAt(postIndex);
    postIndex++;
    setTimeout(typeAnimatedPost, typingSpeed);
  } else {
    setTimeout(resetTyping, 2000); // Wait before resetting
  }
}

// Function to reset typing effect and loop it infinitely
function resetTyping() {
  surnameIndex = 0;
  postIndex = 0;
  firstCycle = false; // After first loop, only surname and "Developer" retype
  setTimeout(typeName, 500); // Restart typing after a short delay
}

// Start typing effect on page load
window.onload = () => {
  setTimeout(typeName, 500);
};

document.addEventListener('DOMContentLoaded', function() {
  // Load VanillaTilt dynamically
  const tiltScript = document.createElement('script');
  tiltScript.src = "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js";
  tiltScript.onload = function() {
    // Initialize VanillaTilt once script is loaded
    VanillaTilt.init(document.querySelectorAll(".box"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });
  };
  document.body.appendChild(tiltScript);

  const progressBars = document.querySelectorAll('.progress');

  // Function to check if an element is in the viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  // Function to reset progress bar width to 0%
  function resetProgressBars() {
    progressBars.forEach(progressBar => {
      progressBar.style.width = '0%';
    });
  }

  // Function to start the progress bar animation
  function startProgressBars() {
    progressBars.forEach(progressBar => {
      if (isInViewport(progressBar)) {
        const value = progressBar.getAttribute('data-progress'); // The target percentage
        progressBar.style.transition = 'none'; // Disable animation temporarily
        progressBar.style.width = '0%'; // Reset to 0%
        
        // Use a small timeout to reset and start the animation smoothly
        setTimeout(() => {
          progressBar.style.transition = 'width 2s ease-in-out'; // Re-enable animation
          progressBar.style.width = value; // Animate to the target value
        }, 100); // Timeout to allow reset before starting the animation
      }
    });
  }

  // Reset the progress bars when scrolling
  window.addEventListener('scroll', startProgressBars);

  // Also start animation when the page is loaded
  startProgressBars();
});
