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

const btn = document.getElementById('button');
console.log(btn.value)

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_gxs2ulj';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Book Appointment';
      alert('Message Sent!');
    }, (err) => {
      btn.value = 'Book Appointment';
      alert(JSON.stringify(err));
    });
});