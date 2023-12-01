<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
        <link rel='stylesheet' type='text/css' media='screen' href='login.css'>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </head>
    <body>
        <div class="text">
            <p class="title login">Bem-vindo novamente</p>
            <p class="title register">Comece agora</p>
            <p class="title -forgot">Esqueceu a senha</p>
        </div>
        <div class="lang">
            <div>
                <a href="#" class="port"><img src="img/Bandeiras/Brasil.png" alt=""></a>
            </div>
            <div>
                <a href="#" class="eng"><img src="img/Bandeiras/Usa.png" alt=""></a>
            </div>
            <div>
                <a href="#" class="jap"><img src="img/Bandeiras/Japao.png" alt=""></a>
            </div>
            <div>
                <a href="#" class="esp"><img src="img/Bandeiras/Espanha.png" alt=""></a>
            </div>
        </div>
        <div class="wrapper">
                <div class="form-box login">
                    <h2 id="login">Logar</h2>
                    <form action="#">
                        <div class="input-box">
                            <input type="email" required>
                            <label>E-mail</label>
                        </div>
                        <div class="input-box">
                            <input type="password" required>
                            <label id="senha">Senha</label>
                        </div>
                        <div class="remember">
                            <label  id="lembre"><input type="checkbox"> Lembre de mim</label>
                        </div>
                        <div>
                            
                        </div>
                        <button type="submit" class="btn">Login</button>
                        <div class="login-register">
                            <p>Não tem uma conta? <a href="#" class="register-link">Cadastre-se</a></p>
                        </div>
                        <div class="forgot-link">
                            <p><a href="#" class="forgot-link">Esqueceu a senha</a></p>
                        </div>
                    </form>
                </div>

                <div class="form-box register">
                    <h2>Cadastre-se</h2>
                    <form action="#">
                        <div class="input-box">
                            <input type="text" required>
                            <label>Nome de usuário</label>
                        </div>
                        <div class="input-box">
                            <input type="email" required>
                            <label>E-mail</label>
                        </div>
                        <div class="input-box">
                            <input type="number" required>
                            <label>CPF</label>
                        </div>
                        <div class="input-box">
                            <input type="password" required>
                            <label>Senha</label>
                        </div>
                        <div class="input-box">
                            <input type="password" required>
                            <label>Cofirmar Senha</label>
                        </div>
                        <div class="remember">
                            <label><input type="checkbox"> Concordo com os termos & condições</label>
                        </div>
                        <button type="submit" class="btn">Registre-se</button>
                        <div class="login-register">
                            <p>Já tem uma conta?<a href="#" class="login-link"> Login</a></p>
                        </div>
                    </form>
                </div>

                <div class="form-box forgot">
                <h2>Esqueceu a senha</h2>
                <p> Siga as instruções para redefinir sua senha por e-mail ou telefone não esqueca de criar uma nova senha forte e memorize-a ou anote-a em um local seguro.</p>
                    <form action="#">
                        <div class="input-box">
                            <input type="email" required>
                            <label>E-mail</label>
                        </div>
                        <div class="input-box">
                            <input type="number" required>
                            <label>Numero</label>
                        </div>
                        <button type="submit" class="btn">Enviar</button>
                        <div class="back">
                            <a href="#" class="back-link"><span class="material-symbols-outlined">chevron_left</span></a>
                        </div>
                    </form>
                </div>
        </div>
        <script src="login.js"></script>
        <div class="ball1"></div>
        <div class="ball2"></div>
        <div class="ball3"></div>
        <div class="ball4"></div>
        <div class="ball5"></div>
    </body>
</html>