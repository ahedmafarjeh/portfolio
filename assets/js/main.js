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
AOS.init();

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
    from_name: document.querySelector("#fname").value + document.querySelector("#lname").value,
    email_id: document.querySelector("#email").value,
    message: document.querySelector("#msg").value,
  };
  console.log(params.from_name + " " + params.email_id + " " + params.message)
  emailjs.send("service_slkd34a","template_oxuayhb",params).then(alert("Email Sent"));
}