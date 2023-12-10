const wrapper = document.querySelector('.wrapper');
const text = document.querySelector('.text');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const forgot = document.querySelector('.forgot-link');
const back = document.querySelector('.back-link');
const langLink = document.querySelector('.lang');
var moment = 1;
var lang = 1;

// Mudando o form para o cadastre-se
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    text.classList.add('active');
    moment = 2;
    if (lang == 1) {
        document.title = "Cadastre-se";
    }else if (lang == 2) {
        document.title = "Register";
    }else if (lang == 3) {
        document.title = "登録する";
    }else {
        document.title = "Registro";
    }
});
// Mudando o form para o login
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    text.classList.remove('active');
    moment = 1;
    if (lang == 1) {
        document.title = "Logar";
    }else if (lang == 2) {
        document.title = "Login";
    }else if (lang == 3) {
        document.title = "ログイン";
    }else {
        document.title = "Iniciar sesión";
    }
});
// Mudando o form para esqueceu a senha
forgot.addEventListener('click', ()=> {
    wrapper.classList.add('forgot');
    text.classList.add('forgot');
    moment = 3;
    if (lang == 1) {
        document.title = "Cadastre-se";
    }else if (lang == 2) {
        document.title = "Register";
    }else if (lang == 3) {
        document.title = "登録する";
    }else {
        document.title = "Registro";
    }
});
// Código para sair do esqueceu a senha
back.addEventListener('click', ()=> {
    wrapper.classList.remove('forgot');
    text.classList.remove('forgot');
    moment = 1;
    if (lang == 1) {
        document.title = "Logar";
    }else if (lang == 2) {
        document.title = "Login";
    }else if (lang == 3) {
        document.title = "ログイン";
    }else {
        document.title = "Iniciar sesión";
    }
})
// Código para aumentar de diminuir as bandeiras
langLink.addEventListener('mouseover', ()=> {
    langLink.classList.add('active');
})
langLink.addEventListener('mouseout', ()=> {
    langLink.classList.remove('active');
})

// Códigos das variadas linguas do site
const port = document.querySelector('.port');
const eng = document.querySelector('.eng');
const jap = document.querySelector('.jap');
const esp = document.querySelector('.esp');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');

if (lang == 1){
    port.addEventListener('click', ()=> {
        if (moment == 1) {
            document.title = "Logar";
        }else if (moment == 2) {
            document.title = "Cadastre-se";
        }else {
            document.title = "Esqueceu a senha";
        }
        img1.src = 'img/Bandeiras/Brasil.png';
        img2.src = 'img/Bandeiras/Usa.png';
        img3.src = 'img/Bandeiras/Japao.png';
        img4.src = 'img/Bandeiras/Espanha.png';
        // login
        document.getElementById("login").textContent = "logar";
        document.getElementById("email").textContent = "Email";
        document.getElementById("senha").textContent = "Senha";
        document.getElementById("lembre").innerHTML = "<input type='checkbox'> Lembre de mim";
        document.getElementById("submitlogin").textContent = "Logar";
        document.getElementById("cadastrese").innerHTML = "Não tem uma conta? <a href='#' class='register-link'>Cadastre-se</a>";
        document.getElementById("esqueceu").innerHTML = "<a href='#' class='forgot-link'>Esqueceu a senha</a>";
        // Frases
        document.getElementById("titulo-login").textContent = "Bem-vindo novamente";
        document.getElementById("titulo-registro").textContent = "Comece agora";
        document.getElementById("titulo-esqueceu").textContent = "esqueceu a senha";
        // cadastro 
        document.getElementById("cadastro").textContent = "Cadastre-se";
        document.getElementById("nome").textContent = "Nome de usuário";
        document.getElementById("senha").textContent = "Senha";
        document.getElementById("confirmar").textContent = "Confirma Senha";
        document.getElementById("concordo").textContent = "Concordo com os termos & condições";
        document.getElementById("submitregistro").textContent = "Registre-se";
        document.getElementById("conta").innerHTML = "Já tem uma conta?<a href='#'' class='login-link'> Login</a>";
        // esqueceu a senha
        document.getElementById("esqueceusenha").textContent = "Esqueceu a senha";
        document.getElementById("esqueceutexto").textContent = "Siga as instruções para redefinir sua senha por e-mail ou telefone não esqueca de criar uma nova senha forte e memorize-a ou anote-a em um local seguro.";
        document.getElementById("numero").textContent = "Número";
        document.getElementById("submitesqueceu").textContent = "Enviar";
        lang = 1;
    })
    
    eng.addEventListener('click', ()=> {
        const port = document.querySelector('.port');
        const eng = document.querySelector('.eng');
        if (moment == 1) {
            document.title = "Log In";
        } else if (moment == 2) {
            document.title = "Sign Up";
        } else {
            document.title = "Forgot Password";
        }
        img1.src = 'img/Bandeiras/Usa.png';
        img2.src = 'img/Bandeiras/Brasil.png';
        img3.src = 'img/Bandeiras/Japao.png';
        img4.src = 'img/Bandeiras/Espanha.png';
        if (lang == 1) {
            port.classList.remove('port');
            port.classList.add('eng');
            eng.classList.remove('eng');
            eng.classList.add('port');
        }
        document.getElementById("login").textContent = "Log In";
        document.getElementById("email").textContent = "Email";
        document.getElementById("senha").textContent = "Password";
        document.getElementById("lembre").innerHTML = "<input type='checkbox'> Remember me";
        document.getElementById("submitlogin").textContent = "Log In";
        document.getElementById("cadastrese").innerHTML = "Don't have an account? <a href='#' class='register-link'>Sign Up</a>";
        document.getElementById("esqueceu").innerHTML = "<a href='#' class='forgot-link'>Forgot Password</a>";
        // Phrases
        document.getElementById("titulo-login").textContent = "Welcome back";
        document.getElementById("titulo-registro").textContent = "Get started now";
        document.getElementById("titulo-esqueceu").textContent = "Forgot Password";
        // registration
        document.getElementById("cadastro").textContent = "Sign Up";
        document.getElementById("nome").textContent = "Username";
        document.getElementById("senha").textContent = "Password";
        document.getElementById("confirmar").textContent = "Confirm Password";
        document.getElementById("concordo").textContent = "I agree to the terms & conditions";
        document.getElementById("submitregistro").textContent = "Sign Up";
        document.getElementById("conta").innerHTML = "Already have an account?<a href='#'' class='login-link'> Log In</a>";
        // forgot password
        document.getElementById("esqueceutitulo").textContent = "Forgot Password";
        document.getElementById("esqueceutexto").textContent = "Follow the instructions to reset your password via email or phone. Don't forget to create a new strong password and remember or note it in a secure location.";
        document.getElementById("numero").textContent = "Number";
        document.getElementById("submitesqueceu").textContent = "Send";
        lang = 2;
        
    })
    
    jap.addEventListener('click', ()=> {
        if (moment == 1) {
            document.title = "ログイン";
        } else if (moment == 2) {
            document.title = "新規登録";
        } else {
            document.title = "パスワードをお忘れですか";
        }
        img1.src = 'img/Bandeiras/Japao.png';
        img2.src = 'img/Bandeiras/Brasil.png';
        img3.src = 'img/Bandeiras/Usa.png';
        img4.src = 'img/Bandeiras/Espanha.png';
        // ログイン
        document.getElementById("login").textContent = "ログイン";
        document.getElementById("email").textContent = "メールアドレス";
        document.getElementById("senha").textContent = "パスワード";
        document.getElementById("lembre").innerHTML = "<input type='checkbox'> ログイン情報を記憶する";
        document.getElementById("submitlogin").textContent = "ログイン";
        document.getElementById("cadastrese").innerHTML = "アカウントをお持ちでないですか？ <a href='#' class='register-link'>新規登録</a>";
        document.getElementById("esqueceu").innerHTML = "<a href='#' class='forgot-link'>パスワードをお忘れですか</a>";
        // フレーズ
        document.getElementById("titulo-login").textContent = "お帰りなさい";
        document.getElementById("titulo-registro").textContent = "今すぐ始めましょう";
        document.getElementById("titulo-esqueceu").textContent = "パスワードをお忘れですか";
        // 登録
        document.getElementById("cadastro").textContent = "新規登録";
        document.getElementById("nome").textContent = "ユーザー名";
        document.getElementById("senha").textContent = "パスワード";
        document.getElementById("confirmar").textContent = "パスワードの確認";
        document.getElementById("concordo").textContent = "利用規約に同意する";
        document.getElementById("submitregistro").textContent = "新規登録";
        document.getElementById("conta").innerHTML = "すでにアカウントをお持ちですか？<a href='#'' class='login-link'> ログイン</a>";
        // パスワードをお忘れの場合
        document.getElementById("esqueceutitulo").textContent = "パスワードをお忘れですか";
        document.getElementById("esqueceutexto").textContent = "メールまたは電話でパスワードをリセットするための指示に従ってください。新しい強力なパスワードを作成し、安全な場所に記憶またはメモしてください。";
        document.getElementById("numero").textContent = "番号";
        document.getElementById("submitesqueceu").textContent = "送信";
        lang = 3;
    })
    
    // Email em jap 電子メール
    
    esp.addEventListener('click', ()=> {
        if (moment == 1) {
            document.title = "Iniciar sesión";
        } else if (moment == 2) {
            document.title = "Registrarse";
        } else {
            document.title = "¿Olvidaste tu contraseña?";
        }
        img1.src = 'img/Bandeiras/Espanha.png';
        img2.src = 'img/Bandeiras/Brasil.png';
        img3.src = 'img/Bandeiras/Usa.png';
        img4.src = 'img/Bandeiras/Japao.png';
        // inicio de sesión
        document.getElementById("login").textContent = "Iniciar sesion";
        document.getElementById("email").textContent = "Correo electrónico";
        document.getElementById("senha").textContent = "Contraseña";
        document.getElementById("lembre").innerHTML = "<input type='checkbox'> Recordarme";
        document.getElementById("submitlogin").textContent = "Iniciar sesión";
        document.getElementById("cadastrese").innerHTML = "¿No tienes una cuenta? <a href='#' class='register-link'>Registrarse</a>";
        document.getElementById("esqueceu").innerHTML = "<a href='#' class='forgot-link'>¿Olvidaste tu contraseña?</a>";
        // Frases
        document.getElementById("titulo-login").textContent = "Bienvenido de nuevo";
        document.getElementById("titulo-registro").textContent = "Comienza ahora";
        document.getElementById("titulo-esqueceu").textContent = "¿Olvidaste tu contraseña?";
        // registro
        document.getElementById("cadastro").textContent = "Registrarse";
        document.getElementById("nome").textContent = "Nombre de usuario";
        document.getElementById("senha").textContent = "Contraseña";
        document.getElementById("confirmar").textContent = "Confirmar contraseña";
        document.getElementById("concordo").textContent = "Acepto los términos y condiciones";
        document.getElementById("submitregistro").textContent = "Registrarse";
        document.getElementById("conta").innerHTML = "¿Ya tienes una cuenta?<a href='#'' class='login-link'> Iniciar sesión</a>";
        // olvidó la contraseña
        document.getElementById("esqueceutitulo").textContent = "¿Olvidaste tu contrasena?";
        document.getElementById("esqueceutexto").textContent = "Sigue las instrucciones para restablecer tu contraseña por correo electrónico o teléfono. No olvides crear una nueva contraseña fuerte y recordarla o anotarla en un lugar seguro.";
        document.getElementById("numero").textContent = "Número";
        document.getElementById("submitesqueceu").textContent = "Enviar";
        lang = 4;
    })
} else if (lang == 2){
    port.addEventListener('click', ()=> {
        const port = document.querySelector('.port');
        const eng = document.querySelector('.eng');
        if (moment == 1) {
            document.title = "Log In";
        } else if (moment == 2) {
            document.title = "Sign Up";
        } else {
            document.title = "Forgot Password";
        }
        img1.src = 'img/Bandeiras/Usa.png';
        img2.src = 'img/Bandeiras/Brasil.png';
        img3.src = 'img/Bandeiras/Japao.png';
        img4.src = 'img/Bandeiras/Espanha.png';
        if (lang == 1) {
            port.classList.remove('port');
            port.classList.add('eng');
            eng.classList.remove('eng');
            eng.classList.add('port');
        }
        document.getElementById("login").textContent = "Log In";
        document.getElementById("email").textContent = "Email";
        document.getElementById("senha").textContent = "Password";
        document.getElementById("lembre").innerHTML = "<input type='checkbox'> Remember me";
        document.getElementById("submitlogin").textContent = "Log In";
        document.getElementById("cadastrese").innerHTML = "Don't have an account? <a href='#' class='register-link'>Sign Up</a>";
        document.getElementById("esqueceu").innerHTML = "<a href='#' class='forgot-link'>Forgot Password</a>";
        // Phrases
        document.getElementById("titulo-login").textContent = "Welcome back";
        document.getElementById("titulo-registro").textContent = "Get started now";
        document.getElementById("titulo-esqueceu").textContent = "Forgot Password";
        // registration
        document.getElementById("cadastro").textContent = "Sign Up";
        document.getElementById("nome").textContent = "Username";
        document.getElementById("senha").textContent = "Password";
        document.getElementById("confirmar").textContent = "Confirm Password";
        document.getElementById("concordo").textContent = "I agree to the terms & conditions";
        document.getElementById("submitregistro").textContent = "Sign Up";
        document.getElementById("conta").innerHTML = "Already have an account?<a href='#'' class='login-link'> Log In</a>";
        // forgot password
        document.getElementById("esqueceutitulo").textContent = "Forgot Password";
        document.getElementById("esqueceutexto").textContent = "Follow the instructions to reset your password via email or phone. Don't forget to create a new strong password and remember or note it in a secure location.";
        document.getElementById("numero").textContent = "Number";
        document.getElementById("submitesqueceu").textContent = "Send";
        lang = 2;
    })
    
    eng.addEventListener('click', ()=> {
        if (moment == 1) {
            document.title = "Logar";
        }else if (moment == 2) {
            document.title = "Cadastre-se";
        }else {
            document.title = "Esqueceu a senha";
        }
        img1.src = 'img/Bandeiras/Brasil.png';
        img2.src = 'img/Bandeiras/Usa.png';
        img3.src = 'img/Bandeiras/Japao.png';
        img4.src = 'img/Bandeiras/Espanha.png';
        // login
        document.getElementById("login").textContent = "logar";
        document.getElementById("email").textContent = "Email";
        document.getElementById("senha").textContent = "Senha";
        document.getElementById("lembre").innerHTML = "<input type='checkbox'> Lembre de mim";
        document.getElementById("submitlogin").textContent = "Logar";
        document.getElementById("cadastrese").innerHTML = "Não tem uma conta? <a href='#' class='register-link'>Cadastre-se</a>";
        document.getElementById("esqueceu").innerHTML = "<a href='#' class='forgot-link'>Esqueceu a senha</a>";
        // Frases
        document.getElementById("titulo-login").textContent = "Bem-vindo novamente";
        document.getElementById("titulo-registro").textContent = "Comece agora";
        document.getElementById("titulo-esqueceu").textContent = "esqueceu a senha";
        // cadastro 
        document.getElementById("cadastro").textContent = "Cadastre-se";
        document.getElementById("nome").textContent = "Nome de usuário";
        document.getElementById("senha").textContent = "Senha";
        document.getElementById("confirmar").textContent = "Confirma Senha";
        document.getElementById("concordo").textContent = "Concordo com os termos & condições";
        document.getElementById("submitregistro").textContent = "Registre-se";
        document.getElementById("conta").innerHTML = "Já tem uma conta?<a href='#'' class='login-link'> Login</a>";
        // esqueceu a senha
        document.getElementById("esqueceusenha").textContent = "Esqueceu a senha";
        document.getElementById("esqueceutexto").textContent = "Siga as instruções para redefinir sua senha por e-mail ou telefone não esqueca de criar uma nova senha forte e memorize-a ou anote-a em um local seguro.";
        document.getElementById("numero").textContent = "Número";
        document.getElementById("submitesqueceu").textContent = "Enviar";
        lang = 1;
    })
    
    jap.addEventListener('click', ()=> {
        if (moment == 1) {
            document.title = "ログイン";
        } else if (moment == 2) {
            document.title = "新規登録";
        } else {
            document.title = "パスワードをお忘れですか";
        }
        img1.src = 'img/Bandeiras/Japao.png';
        img2.src = 'img/Bandeiras/Brasil.png';
        img3.src = 'img/Bandeiras/Usa.png';
        img4.src = 'img/Bandeiras/Espanha.png';
        // ログイン
        document.getElementById("login").textContent = "ログイン";
        document.getElementById("email").textContent = "メールアドレス";
        document.getElementById("senha").textContent = "パスワード";
        document.getElementById("lembre").innerHTML = "<input type='checkbox'> ログイン情報を記憶する";
        document.getElementById("submitlogin").textContent = "ログイン";
        document.getElementById("cadastrese").innerHTML = "アカウントをお持ちでないですか？ <a href='#' class='register-link'>新規登録</a>";
        document.getElementById("esqueceu").innerHTML = "<a href='#' class='forgot-link'>パスワードをお忘れですか</a>";
        // フレーズ
        document.getElementById("titulo-login").textContent = "お帰りなさい";
        document.getElementById("titulo-registro").textContent = "今すぐ始めましょう";
        document.getElementById("titulo-esqueceu").textContent = "パスワードをお忘れですか";
        // 登録
        document.getElementById("cadastro").textContent = "新規登録";
        document.getElementById("nome").textContent = "ユーザー名";
        document.getElementById("senha").textContent = "パスワード";
        document.getElementById("confirmar").textContent = "パスワードの確認";
        document.getElementById("concordo").textContent = "利用規約に同意する";
        document.getElementById("submitregistro").textContent = "新規登録";
        document.getElementById("conta").innerHTML = "すでにアカウントをお持ちですか？<a href='#'' class='login-link'> ログイン</a>";
        // パスワードをお忘れの場合
        document.getElementById("esqueceutitulo").textContent = "パスワードをお忘れですか";
        document.getElementById("esqueceutexto").textContent = "メールまたは電話でパスワードをリセットするための指示に従ってください。新しい強力なパスワードを作成し、安全な場所に記憶またはメモしてください。";
        document.getElementById("numero").textContent = "番号";
        document.getElementById("submitesqueceu").textContent = "送信";
        lang = 3;
    })
    
    // Email em jap 電子メール
    
    esp.addEventListener('click', ()=> {
        if (moment == 1) {
            document.title = "Iniciar sesión";
        } else if (moment == 2) {
            document.title = "Registrarse";
        } else {
            document.title = "¿Olvidaste tu contraseña?";
        }
        img1.src = 'img/Bandeiras/Espanha.png';
        img2.src = 'img/Bandeiras/Brasil.png';
        img3.src = 'img/Bandeiras/Usa.png';
        img4.src = 'img/Bandeiras/Japao.png';
        // inicio de sesión
        document.getElementById("login").textContent = "Iniciar sesion";
        document.getElementById("email").textContent = "Correo electrónico";
        document.getElementById("senha").textContent = "Contraseña";
        document.getElementById("lembre").innerHTML = "<input type='checkbox'> Recordarme";
        document.getElementById("submitlogin").textContent = "Iniciar sesión";
        document.getElementById("cadastrese").innerHTML = "¿No tienes una cuenta? <a href='#' class='register-link'>Registrarse</a>";
        document.getElementById("esqueceu").innerHTML = "<a href='#' class='forgot-link'>¿Olvidaste tu contraseña?</a>";
        // Frases
        document.getElementById("titulo-login").textContent = "Bienvenido de nuevo";
        document.getElementById("titulo-registro").textContent = "Comienza ahora";
        document.getElementById("titulo-esqueceu").textContent = "¿Olvidaste tu contraseña?";
        // registro
        document.getElementById("cadastro").textContent = "Registrarse";
        document.getElementById("nome").textContent = "Nombre de usuario";
        document.getElementById("senha").textContent = "Contraseña";
        document.getElementById("confirmar").textContent = "Confirmar contraseña";
        document.getElementById("concordo").textContent = "Acepto los términos y condiciones";
        document.getElementById("submitregistro").textContent = "Registrarse";
        document.getElementById("conta").innerHTML = "¿Ya tienes una cuenta?<a href='#'' class='login-link'> Iniciar sesión</a>";
        // olvidó la contraseña
        document.getElementById("esqueceutitulo").textContent = "¿Olvidaste tu contrasena?";
        document.getElementById("esqueceutexto").textContent = "Sigue las instrucciones para restablecer tu contraseña por correo electrónico o teléfono. No olvides crear una nueva contraseña fuerte y recordarla o anotarla en un lugar seguro.";
        document.getElementById("numero").textContent = "Número";
        document.getElementById("submitesqueceu").textContent = "Enviar";
        lang = 4;
    })
}else if (lang == 3){
    port.addEventListener('click', ()=> {
        if (moment == 1) {
            document.title = "ログイン";
        } else if (moment == 2) {
            document.title = "新規登録";
        } else {
            document.title = "パスワードをお忘れですか";
        }
        img1.src = 'img/Bandeiras/Japao.png';
        img2.src = 'img/Bandeiras/Brasil.png';
        img3.src = 'img/Bandeiras/Usa.png';
        img4.src = 'img/Bandeiras/Espanha.png';
        // ログイン
        document.getElementById("login").textContent = "ログイン";
        document.getElementById("email").textContent = "メールアドレス";
        document.getElementById("senha").textContent = "パスワード";
        document.getElementById("lembre").innerHTML = "<input type='checkbox'> ログイン情報を記憶する";
        document.getElementById("submitlogin").textContent = "ログイン";
        document.getElementById("cadastrese").innerHTML = "アカウントをお持ちでないですか？ <a href='#' class='register-link'>新規登録</a>";
        document.getElementById("esqueceu").innerHTML = "<a href='#' class='forgot-link'>パスワードをお忘れですか</a>";
        // フレーズ
        document.getElementById("titulo-login").textContent = "お帰りなさい";
        document.getElementById("titulo-registro").textContent = "今すぐ始めましょう";
        document.getElementById("titulo-esqueceu").textContent = "パスワードをお忘れですか";
        // 登録
        document.getElementById("cadastro").textContent = "新規登録";
        document.getElementById("nome").textContent = "ユーザー名";
        document.getElementById("senha").textContent = "パスワード";
        document.getElementById("confirmar").textContent = "パスワードの確認";
        document.getElementById("concordo").textContent = "利用規約に同意する";
        document.getElementById("submitregistro").textContent = "新規登録";
        document.getElementById("conta").innerHTML = "すでにアカウントをお持ちですか？<a href='#'' class='login-link'> ログイン</a>";
        // パスワードをお忘れの場合
        document.getElementById("esqueceutitulo").textContent = "パスワードをお忘れですか";
        document.getElementById("esqueceutexto").textContent = "メールまたは電話でパスワードをリセットするための指示に従ってください。新しい強力なパスワードを作成し、安全な場所に記憶またはメモしてください。";
        document.getElementById("numero").textContent = "番号";
        document.getElementById("submitesqueceu").textContent = "送信";
        lang = 3;
    })
    
    eng.addEventListener('click', ()=> {
        if (moment == 1) {
            document.title = "Logar";
        }else if (moment == 2) {
            document.title = "Cadastre-se";
        }else {
            document.title = "Esqueceu a senha";
        }
        img1.src = 'img/Bandeiras/Brasil.png';
        img2.src = 'img/Bandeiras/Usa.png';
        img3.src = 'img/Bandeiras/Japao.png';
        img4.src = 'img/Bandeiras/Espanha.png';
        // login
        document.getElementById("login").textContent = "logar";
        document.getElementById("email").textContent = "Email";
        document.getElementById("senha").textContent = "Senha";
        document.getElementById("lembre").innerHTML = "<input type='checkbox'> Lembre de mim";
        document.getElementById("submitlogin").textContent = "Logar";
        document.getElementById("cadastrese").innerHTML = "Não tem uma conta? <a href='#' class='register-link'>Cadastre-se</a>";
        document.getElementById("esqueceu").innerHTML = "<a href='#' class='forgot-link'>Esqueceu a senha</a>";
        // Frases
        document.getElementById("titulo-login").textContent = "Bem-vindo novamente";
        document.getElementById("titulo-registro").textContent = "Comece agora";
        document.getElementById("titulo-esqueceu").textContent = "esqueceu a senha";
        // cadastro 
        document.getElementById("cadastro").textContent = "Cadastre-se";
        document.getElementById("nome").textContent = "Nome de usuário";
        document.getElementById("senha").textContent = "Senha";
        document.getElementById("confirmar").textContent = "Confirma Senha";
        document.getElementById("concordo").textContent = "Concordo com os termos & condições";
        document.getElementById("submitregistro").textContent = "Registre-se";
        document.getElementById("conta").innerHTML = "Já tem uma conta?<a href='#'' class='login-link'> Login</a>";
        // esqueceu a senha
        document.getElementById("esqueceusenha").textContent = "Esqueceu a senha";
        document.getElementById("esqueceutexto").textContent = "Siga as instruções para redefinir sua senha por e-mail ou telefone não esqueca de criar uma nova senha forte e memorize-a ou anote-a em um local seguro.";
        document.getElementById("numero").textContent = "Número";
        document.getElementById("submitesqueceu").textContent = "Enviar";
        lang = 1;
    })
    
    jap.addEventListener('click', ()=> {
        const port = document.querySelector('.port');
        const eng = document.querySelector('.eng');
        if (moment == 1) {
            document.title = "Log In";
        } else if (moment == 2) {
            document.title = "Sign Up";
        } else {
            document.title = "Forgot Password";
        }
        img1.src = 'img/Bandeiras/Usa.png';
        img2.src = 'img/Bandeiras/Brasil.png';
        img3.src = 'img/Bandeiras/Japao.png';
        img4.src = 'img/Bandeiras/Espanha.png';
        if (lang == 1) {
            port.classList.remove('port');
            port.classList.add('eng');
            eng.classList.remove('eng');
            eng.classList.add('port');
        }
        document.getElementById("login").textContent = "Log In";
        document.getElementById("email").textContent = "Email";
        document.getElementById("senha").textContent = "Password";
        document.getElementById("lembre").innerHTML = "<input type='checkbox'> Remember me";
        document.getElementById("submitlogin").textContent = "Log In";
        document.getElementById("cadastrese").innerHTML = "Don't have an account? <a href='#' class='register-link'>Sign Up</a>";
        document.getElementById("esqueceu").innerHTML = "<a href='#' class='forgot-link'>Forgot Password</a>";
        // Phrases
        document.getElementById("titulo-login").textContent = "Welcome back";
        document.getElementById("titulo-registro").textContent = "Get started now";
        document.getElementById("titulo-esqueceu").textContent = "Forgot Password";
        // registration
        document.getElementById("cadastro").textContent = "Sign Up";
        document.getElementById("nome").textContent = "Username";
        document.getElementById("senha").textContent = "Password";
        document.getElementById("confirmar").textContent = "Confirm Password";
        document.getElementById("concordo").textContent = "I agree to the terms & conditions";
        document.getElementById("submitregistro").textContent = "Sign Up";
        document.getElementById("conta").innerHTML = "Already have an account?<a href='#'' class='login-link'> Log In</a>";
        // forgot password
        document.getElementById("esqueceutitulo").textContent = "Forgot Password";
        document.getElementById("esqueceutexto").textContent = "Follow the instructions to reset your password via email or phone. Don't forget to create a new strong password and remember or note it in a secure location.";
        document.getElementById("numero").textContent = "Number";
        document.getElementById("submitesqueceu").textContent = "Send";
        lang = 2;
    })
    
    // Email em jap 電子メール
    
    esp.addEventListener('click', ()=> {
        if (moment == 1) {
            document.title = "Iniciar sesión";
        } else if (moment == 2) {
            document.title = "Registrarse";
        } else {
            document.title = "¿Olvidaste tu contraseña?";
        }
        img1.src = 'img/Bandeiras/Espanha.png';
        img2.src = 'img/Bandeiras/Brasil.png';
        img3.src = 'img/Bandeiras/Usa.png';
        img4.src = 'img/Bandeiras/Japao.png';
        // inicio de sesión
        document.getElementById("login").textContent = "Iniciar sesion";
        document.getElementById("email").textContent = "Correo electrónico";
        document.getElementById("senha").textContent = "Contraseña";
        document.getElementById("lembre").innerHTML = "<input type='checkbox'> Recordarme";
        document.getElementById("submitlogin").textContent = "Iniciar sesión";
        document.getElementById("cadastrese").innerHTML = "¿No tienes una cuenta? <a href='#' class='register-link'>Registrarse</a>";
        document.getElementById("esqueceu").innerHTML = "<a href='#' class='forgot-link'>¿Olvidaste tu contraseña?</a>";
        // Frases
        document.getElementById("titulo-login").textContent = "Bienvenido de nuevo";
        document.getElementById("titulo-registro").textContent = "Comienza ahora";
        document.getElementById("titulo-esqueceu").textContent = "¿Olvidaste tu contraseña?";
        // registro
        document.getElementById("cadastro").textContent = "Registrarse";
        document.getElementById("nome").textContent = "Nombre de usuario";
        document.getElementById("senha").textContent = "Contraseña";
        document.getElementById("confirmar").textContent = "Confirmar contraseña";
        document.getElementById("concordo").textContent = "Acepto los términos y condiciones";
        document.getElementById("submitregistro").textContent = "Registrarse";
        document.getElementById("conta").innerHTML = "¿Ya tienes una cuenta?<a href='#'' class='login-link'> Iniciar sesión</a>";
        // olvidó la contraseña
        document.getElementById("esqueceutitulo").textContent = "¿Olvidaste tu contrasena?";
        document.getElementById("esqueceutexto").textContent = "Sigue las instrucciones para restablecer tu contraseña por correo electrónico o teléfono. No olvides crear una nueva contraseña fuerte y recordarla o anotarla en un lugar seguro.";
        document.getElementById("numero").textContent = "Número";
        document.getElementById("submitesqueceu").textContent = "Enviar";
        lang = 4;
    })
} else {
    port.addEventListener('click', ()=> {
        if (moment == 1) {
            document.title = "Iniciar sesión";
        } else if (moment == 2) {
            document.title = "Registrarse";
        } else {
            document.title = "¿Olvidaste tu contraseña?";
        }
        img1.src = 'img/Bandeiras/Espanha.png';
        img2.src = 'img/Bandeiras/Brasil.png';
        img3.src = 'img/Bandeiras/Usa.png';
        img4.src = 'img/Bandeiras/Japao.png';
        // inicio de sesión
        document.getElementById("login").textContent = "Iniciar sesion";
        document.getElementById("email").textContent = "Correo electrónico";
        document.getElementById("senha").textContent = "Contraseña";
        document.getElementById("lembre").innerHTML = "<input type='checkbox'> Recordarme";
        document.getElementById("submitlogin").textContent = "Iniciar sesión";
        document.getElementById("cadastrese").innerHTML = "¿No tienes una cuenta? <a href='#' class='register-link'>Registrarse</a>";
        document.getElementById("esqueceu").innerHTML = "<a href='#' class='forgot-link'>¿Olvidaste tu contraseña?</a>";
        // Frases
        document.getElementById("titulo-login").textContent = "Bienvenido de nuevo";
        document.getElementById("titulo-registro").textContent = "Comienza ahora";
        document.getElementById("titulo-esqueceu").textContent = "¿Olvidaste tu contraseña?";
        // registro
        document.getElementById("cadastro").textContent = "Registrarse";
        document.getElementById("nome").textContent = "Nombre de usuario";
        document.getElementById("senha").textContent = "Contraseña";
        document.getElementById("confirmar").textContent = "Confirmar contraseña";
        document.getElementById("concordo").textContent = "Acepto los términos y condiciones";
        document.getElementById("submitregistro").textContent = "Registrarse";
        document.getElementById("conta").innerHTML = "¿Ya tienes una cuenta?<a href='#'' class='login-link'> Iniciar sesión</a>";
        // olvidó la contraseña
        document.getElementById("esqueceutitulo").textContent = "¿Olvidaste tu contrasena?";
        document.getElementById("esqueceutexto").textContent = "Sigue las instrucciones para restablecer tu contraseña por correo electrónico o teléfono. No olvides crear una nueva contraseña fuerte y recordarla o anotarla en un lugar seguro.";
        document.getElementById("numero").textContent = "Número";
        document.getElementById("submitesqueceu").textContent = "Enviar";
        lang = 4;

    })
    
    eng.addEventListener('click', ()=> {
        if (moment == 1) {
            document.title = "Logar";
        }else if (moment == 2) {
            document.title = "Cadastre-se";
        }else {
            document.title = "Esqueceu a senha";
        }
        img1.src = 'img/Bandeiras/Brasil.png';
        img2.src = 'img/Bandeiras/Usa.png';
        img3.src = 'img/Bandeiras/Japao.png';
        img4.src = 'img/Bandeiras/Espanha.png';
        // login
        document.getElementById("login").textContent = "logar";
        document.getElementById("email").textContent = "Email";
        document.getElementById("senha").textContent = "Senha";
        document.getElementById("lembre").innerHTML = "<input type='checkbox'> Lembre de mim";
        document.getElementById("submitlogin").textContent = "Logar";
        document.getElementById("cadastrese").innerHTML = "Não tem uma conta? <a href='#' class='register-link'>Cadastre-se</a>";
        document.getElementById("esqueceu").innerHTML = "<a href='#' class='forgot-link'>Esqueceu a senha</a>";
        // Frases
        document.getElementById("titulo-login").textContent = "Bem-vindo novamente";
        document.getElementById("titulo-registro").textContent = "Comece agora";
        document.getElementById("titulo-esqueceu").textContent = "esqueceu a senha";
        // cadastro 
        document.getElementById("cadastro").textContent = "Cadastre-se";
        document.getElementById("nome").textContent = "Nome de usuário";
        document.getElementById("senha").textContent = "Senha";
        document.getElementById("confirmar").textContent = "Confirma Senha";
        document.getElementById("concordo").textContent = "Concordo com os termos & condições";
        document.getElementById("submitregistro").textContent = "Registre-se";
        document.getElementById("conta").innerHTML = "Já tem uma conta?<a href='#'' class='login-link'> Login</a>";
        // esqueceu a senha
        document.getElementById("esqueceusenha").textContent = "Esqueceu a senha";
        document.getElementById("esqueceutexto").textContent = "Siga as instruções para redefinir sua senha por e-mail ou telefone não esqueca de criar uma nova senha forte e memorize-a ou anote-a em um local seguro.";
        document.getElementById("numero").textContent = "Número";
        document.getElementById("submitesqueceu").textContent = "Enviar";
        lang = 1;
    })
    
    jap.addEventListener('click', ()=> {
        const port = document.querySelector('.port');
        const eng = document.querySelector('.eng');
        if (moment == 1) {
            document.title = "Log In";
        } else if (moment == 2) {
            document.title = "Sign Up";
        } else {
            document.title = "Forgot Password";
        }
        img1.src = 'img/Bandeiras/Usa.png';
        img2.src = 'img/Bandeiras/Brasil.png';
        img3.src = 'img/Bandeiras/Japao.png';
        img4.src = 'img/Bandeiras/Espanha.png';
        if (lang == 1) {
            port.classList.remove('port');
            port.classList.add('eng');
            eng.classList.remove('eng');
            eng.classList.add('port');
        }
        document.getElementById("login").textContent = "Log In";
        document.getElementById("email").textContent = "Email";
        document.getElementById("senha").textContent = "Password";
        document.getElementById("lembre").innerHTML = "<input type='checkbox'> Remember me";
        document.getElementById("submitlogin").textContent = "Log In";
        document.getElementById("cadastrese").innerHTML = "Don't have an account? <a href='#' class='register-link'>Sign Up</a>";
        document.getElementById("esqueceu").innerHTML = "<a href='#' class='forgot-link'>Forgot Password</a>";
        // Phrases
        document.getElementById("titulo-login").textContent = "Welcome back";
        document.getElementById("titulo-registro").textContent = "Get started now";
        document.getElementById("titulo-esqueceu").textContent = "Forgot Password";
        // registration
        document.getElementById("cadastro").textContent = "Sign Up";
        document.getElementById("nome").textContent = "Username";
        document.getElementById("senha").textContent = "Password";
        document.getElementById("confirmar").textContent = "Confirm Password";
        document.getElementById("concordo").textContent = "I agree to the terms & conditions";
        document.getElementById("submitregistro").textContent = "Sign Up";
        document.getElementById("conta").innerHTML = "Already have an account?<a href='#'' class='login-link'> Log In</a>";
        // forgot password
        document.getElementById("esqueceutitulo").textContent = "Forgot Password";
        document.getElementById("esqueceutexto").textContent = "Follow the instructions to reset your password via email or phone. Don't forget to create a new strong password and remember or note it in a secure location.";
        document.getElementById("numero").textContent = "Number";
        document.getElementById("submitesqueceu").textContent = "Send";
        lang = 2;
    })
    
    // Email em jap 電子メール
    
    esp.addEventListener('click', ()=> {
        if (moment == 1) {
            document.title = "ログイン";
        } else if (moment == 2) {
            document.title = "新規登録";
        } else {
            document.title = "パスワードをお忘れですか";
        }
        img1.src = 'img/Bandeiras/Japao.png';
        img2.src = 'img/Bandeiras/Brasil.png';
        img3.src = 'img/Bandeiras/Usa.png';
        img4.src = 'img/Bandeiras/Espanha.png';
        // ログイン
        document.getElementById("login").textContent = "ログイン";
        document.getElementById("email").textContent = "メールアドレス";
        document.getElementById("senha").textContent = "パスワード";
        document.getElementById("lembre").innerHTML = "<input type='checkbox'> ログイン情報を記憶する";
        document.getElementById("submitlogin").textContent = "ログイン";
        document.getElementById("cadastrese").innerHTML = "アカウントをお持ちでないですか？ <a href='#' class='register-link'>新規登録</a>";
        document.getElementById("esqueceu").innerHTML = "<a href='#' class='forgot-link'>パスワードをお忘れですか</a>";
        // フレーズ
        document.getElementById("titulo-login").textContent = "お帰りなさい";
        document.getElementById("titulo-registro").textContent = "今すぐ始めましょう";
        document.getElementById("titulo-esqueceu").textContent = "パスワードをお忘れですか";
        // 登録
        document.getElementById("cadastro").textContent = "新規登録";
        document.getElementById("nome").textContent = "ユーザー名";
        document.getElementById("senha").textContent = "パスワード";
        document.getElementById("confirmar").textContent = "パスワードの確認";
        document.getElementById("concordo").textContent = "利用規約に同意する";
        document.getElementById("submitregistro").textContent = "新規登録";
        document.getElementById("conta").innerHTML = "すでにアカウントをお持ちですか？<a href='#'' class='login-link'> ログイン</a>";
        // パスワードをお忘れの場合
        document.getElementById("esqueceutitulo").textContent = "パスワードをお忘れですか";
        document.getElementById("esqueceutexto").textContent = "メールまたは電話でパスワードをリセットするための指示に従ってください。新しい強力なパスワードを作成し、安全な場所に記憶またはメモしてください。";
        document.getElementById("numero").textContent = "番号";
        document.getElementById("submitesqueceu").textContent = "送信";
        lang = 3;
    })
}