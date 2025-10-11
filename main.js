const header = document.querySelector('header');
const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const messageInput = document.querySelector('.message');

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