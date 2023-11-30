const wrapper = document.querySelector('.wrapper');
const text = document.querySelector('.text');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const forgot = document.querySelector('.forgot-link');
const back = document.querySelector('.back-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    text.classList.add('active');
    document.title = "Cadastre-se";
});
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    text.classList.remove('active');
    document.title = "Login";
});
forgot.addEventListener('click', ()=> {
    wrapper.classList.add('forgot');
    text.classList.add('forgot');
    document.title = "Esqueceu a senha";
});
back.addEventListener('click', ()=> {
    wrapper.classList.remove('forgot');
    text.classList.remove('forgot');
    document.title = "Login";
})