window.addEventListener('scroll', function() {
  const navbar = document.querySelector(".navbar");
  if (Math.ceil(window.scrollY) > 90) { // Change 100 to your desired scroll value
      navbar.classList.add('scrolled');
      navbar.setAttribute("data-mdb-animation","fade-in-down")
  } else {
      navbar.classList.remove('scrolled');
  }
});

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
  showCursor: true, // Ensure the cursor is shown
  cursorChar: '|',  // You can customize the cursor character
});