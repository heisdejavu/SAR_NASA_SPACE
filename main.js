//MENU TOGGLE
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show');
  });
});

//HELLO GEOPORTAL ANIMATION
window.addEventListener('scroll', () => {
  if (window.innerWidth <= 768) {
    triggerPoint = window.innerHeight * 0.25; // 75% of the window height
  } else {
    triggerPoint = window.innerHeight * 0.45; // 75% of the window height
  } 
  
  const infoSection = document.querySelector('.info-section');
    // const triggerPoint = window.innerHeight * 0.50; // 75% of the window height

    if (infoSection) {
        if (window.scrollY > triggerPoint) {
            infoSection.classList.add('show');
        }
    }
});


//MAIN TEXT ANIMATION
window.addEventListener('scroll', () => {
  const infoSection = document.querySelector('.side-text-arcgis');
  const triggerPoint = window.innerHeight * 0.75; // 75% of the window height

  if (infoSection) {
      if (window.scrollY > triggerPoint) {
          infoSection.classList.add('show');
      }
  }
});

window.addEventListener('scroll', () => {
  const infoSection = document.querySelector('.side-text-sepal');
  const triggerPoint = window.innerHeight * 0.85; // 75% of the window height

  if (infoSection) {
      if (window.scrollY > triggerPoint) {
          infoSection.classList.add('show');
      }
  }
});


window.addEventListener('scroll', () => {
  const infoSection = document.querySelector('.side-text-gee');
  const triggerPoint = window.innerHeight * 0.85; // 75% of the window height

  if (infoSection) {
      if (window.scrollY > triggerPoint) {
          infoSection.classList.add('show');
      }
  }
});


//IMAGE COLLECTION SLIDER

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}