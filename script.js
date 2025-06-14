let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('nav .navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});


window.onscroll = () => {
 searchBtn.classList.remove('fa-times');
 searchBar.classList.remove('active');
 menu.classList.remove('fa-times');
 navbar.classList.remove('active');
 loginForm.classList.remove('active');
}


menu.addEventListener('click', () => {
 menu.classList.toggle('fa-times');
 navbar.classList.toggle('active');
 });


searchBtn.addEventListener('click', () => {
 searchBtn.classList.toggle('fa-times');
 searchBar.classList.toggle('active');
 });

 formBtn.addEventListener('click', () => {
 loginForm.classList.add('active');
 });

 formClose.addEventListener('click', () => {
 loginForm.classList.remove('active');
 });

videoBtn.forEach(btn =>{
 btn.addEventListener('click', ()=>{
  document.querySelector('.controls .active').classList.remove('active');
  btn.classList.add('active'); 
  let src = btn.getAttribute('data-src');
  document.querySelector('#video-slider').src= src;
 });
});

var swiper = new Swiper(".review-slider", {
 spaceBetween: 20,
 loop:true,
 autoplay: {
  delay: 2500,
  disableOnInteraction: false,
 },
 breakpoints: {
  640: {
   slidesPerView: 1,
  },
  768: {
   slidesPerView: 2,
  },
  1024: {
   slidesPerView: 3,
  },
 },
});


// Initialize Leaflet Map
const map = L.map('map-container').setView([20.5937, 78.9629], 5); // Centered on India

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Add markers for locations
const locations = [
  { name: 'Mumbai', coords: [19.0760, 72.8777] },
  { name: 'Mount Everest', coords: [27.9881, 86.9250] },
  { name: 'Hawaii', coords: [21.3069, -157.8583] },
  { name: 'Sydney', coords: [-33.8688, 151.2093] },
  { name: 'Paris', coords: [48.8566, 2.3522] },
];

locations.forEach(location => {
  L.marker(location.coords).addTo(map)
    .bindPopup(location.name)
    .openPopup();
});



// Fade-in effect for sections
const sections = document.querySelectorAll('section');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});



const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});





  document.getElementById('see-more').addEventListener('click', function() {
    const hiddenCards = document.querySelector('.hidden-cards');
    if (hiddenCards.style.display === 'none') {
      hiddenCards.style.display = 'flex';
      this.textContent = 'See Less'; // Change button text
    } else {
      hiddenCards.style.display = 'none';
      this.textContent = 'See More'; // Change button text back
    }
  });

var swiper = new Swiper(".brand-slider", {
 spaceBetween: 20,
 loop:true,
 autoplay: {
  delay: 2500,
  disableOnInteraction: false,
 },
 breakpoints: {
  450: {
   slidesPerView: 2,
  },
  768: {
   slidesPerView: 3,
  },
  991: {
   slidesPerView: 4,
  },
  1200: {
   slidesPerView: 5,
  },
 },
});