const wrapper = document.querySelector('.wrapper');
const text = document.querySelector('.text');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const forgot = document.querySelector('.forgot-link');
const back = document.querySelector('.back-link');

// Mudando o form para o cadastre-se
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    text.classList.add('active');
    document.title = "Cadastre-se";
});
// Mudando o form para o login
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    text.classList.remove('active');
    document.title = "Login";
});
// Mudando o form para esqueceu a senha
forgot.addEventListener('click', ()=> {
    wrapper.classList.add('forgot');
    text.classList.add('forgot');
    document.title = "Esqueceu a senha";
});
// Código para sair do esqueceu a senha
back.addEventListener('click', ()=> {
    wrapper.classList.remove('forgot');
    text.classList.remove('forgot');
    document.title = "Login";
})

// Códigos das variadas linguas do site
const port = document.querySelector('.port');
const eng = document.querySelector('.eng');
const jap = document.querySelector('.jap');
const esp = document.querySelector('.esp');

port.addEventListener('click', ()=> {
    document.getElementById("login").textContent = "logar";
    document.getElementById("senha").textContent = "Senha";
    document.getElementById("lembre").innerHTML = "<input type='checkbox'> Lembre de mim";
})

eng.addEventListener('click', ()=> {
    document.getElementById("login").textContent = "login";
    document.getElementById("senha").textContent = "Password";
    document.getElementById("lembre").innerHTML = "<input type='checkbox'> Lembre de mim";
})

jap.addEventListener('click', ()=> {
    document.getElementById("login").textContent = "logar";
    document.getElementById("senha").textContent = "Senha";
    document.getElementById("lembre").innerHTML = "<input type='checkbox'> Lembre de mim";
})

esp.addEventListener('click', ()=> {
    document.getElementById("login").textContent = "logar";
    document.getElementById("senha").textContent = "Senha";
    document.getElementById("lembre").innerHTML = "<input type='checkbox'> Lembre de mim";
})
