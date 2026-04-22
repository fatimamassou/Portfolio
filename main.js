const header = document.querySelector('header');
const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const messageInput = document.querySelector('.message');
const typedElement = document.querySelector('.typed');
const yearElement = document.querySelector('.year');
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".portfolio-content .row");

window.addEventListener("scroll",function (){
    header.classList.toggle ("sticky" , this.window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

contactForm.addEventListener('submit', async function(event) {
  event.preventDefault(); // stop auto reload
  const formData = new FormData(contactForm);

  const response = await fetch(contactForm.action, {
    method: contactForm.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    alert('Message sent successfully!');
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  } else {
    alert('Oops! Something went wrong.');
  }
});

if (typedElement) {
  new Typed('.typed', {
    strings: ['Massou Fatima', 'a Full Stack Developer', 'a UX/UI Designer'],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
  });
}
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        // remove active class
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        projects.forEach(project => {
            const category = project.getAttribute("data-category");

            if (filterValue === "all" || category === filterValue) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });

    });
});
