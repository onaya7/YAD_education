// Preloader content

window.addEventListener('load', function(){
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
  const content = document.getElementById('content');
  content.style.display = 'block';
});



// initialize Swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor:true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Mobile responsive nav
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


window.onscroll = () => { 
    menu.classList.remove('bx-x');
     navbar.classList.remove('active');
};


// search filter for universitys
function search() {
  let filter = document.getElementById('find').value.toUpperCase();
  let item = document.querySelectorAll('.card');
  let l = document.getElementsByTagName('h3');
  for(var i = 0;i<=l.length;i++){
  let a=item[i].getElementsByTagName('h3')[0];
  let value=a.innerHTML || a.innerText || a.textContent;
  if(value.toUpperCase().indexOf(filter) > -1) {
  item[i].style.display="";
  }
  else
  {
  item[i].style.display="none";
  }
  }
  }

// emailjs
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // // Validate form fields
  // if (!form.checkValidity()) {
  //   alert('Please fill out all required fields.');
  //   return;
  // }

const serviceID = 'default_service';
const templateID = 'template_bbgv1xg';

  // Send email using emailjs
  emailjs.sendForm(serviceID, templateID, form)
    .then((response) => {
      alert('Message sent successfully!');
      form.reset();
    }, (error) => {
      alert('Message failed to send. Please try again later.');
    });
});



