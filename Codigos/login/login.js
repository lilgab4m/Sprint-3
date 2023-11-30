const wrapper = document.querySelector('.wrapper');
const text = document.querySelector('.text');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    text.classList.add('active');
});
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    text.classList.remove('active');
});