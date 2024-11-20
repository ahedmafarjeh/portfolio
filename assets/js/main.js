
  // This script collapses the navbar when a link is clicked in small screen
   document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
        bsCollapse.hide();
      });
    });
  });



/go to up/
up_button = document.querySelector(".go-to-top");
  up_button.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  }); 

// to make circle follow the mouse cursor movement
const circle = document.querySelector('.circle');
const center = document.querySelector('.center');
document.addEventListener('mousemove', (e) => {
  circle.style.left = `${e.pageX - circle.offsetWidth / 2}px`;
  circle.style.top = `${e.pageY - circle.offsetHeight / 2}px`;
  center.style.left = `${e.pageX - center.offsetWidth / 2}px`;
  center.style.top = `${e.pageY - center.offsetHeight / 2}px`;
  
});



// for navbar effects
window.addEventListener('scroll', function() {
  const navbar = document.querySelector(".navbar");
  if (Math.ceil(window.scrollY) > 90) { // Change 100 to your desired scroll value
      navbar.classList.add('scrolled');
      navbar.setAttribute("data-mdb-animation","fade-in-down")
  } else {
      navbar.classList.remove('scrolled');
  }
});

// configure typed.js to make animation in writing
const my_name = new Typed('#my-name', {
  strings: ['Hi , I am Ahed Mafarjeh.'],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true,
  showCursor: true,
  cursorChar: '|',
  
});
const my_job = new Typed('#my-job', {
  strings: ['Web Developer.'],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true,
  showCursor: true, 
  cursorChar: '|',  
});

// initate aos library for section animation
function initAOS() {
  AOS.init();
  
}
initAOS();
// calculate my age
age_element = document.querySelector(".age span");
curren_date = new Date().getTime();
DB = new Date("11/28/1997").getTime();
diff = curren_date - DB;
days = Math.round(diff / (1000 * 3600 * 24));
my_age = Math.floor(days / 365);
age_element.innerHTML = my_age;

// configure email js


  
function sendMail(){
  let params={
    from_name: document.querySelector("#fname").value +" "+ document.querySelector("#lname").value,
    email_id: document.querySelector("#email").value,
    message: document.querySelector("#msg").value,
  };
  emailjs.send('service_slkd34a', 'template_oxuayhb', params)
.then(function(response) {
    alert("email sent successfully")
    document.getElementById('.contace-me form').reset();
}, function(error) {
    console.log('FAILED...', error);
});
}
