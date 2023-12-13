<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logar</title>
    <link rel='stylesheet' type='text/css' media='screen' href='login.css'>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>

<body class="body">
    <div>
    <a href="#" class="dark_mode"><span class="material-symbols-outlined">dark_mode</span></a>
    <!-- <span class="material-symbols-outlined">light_mode</span> -->
    </div>
    <div class="text">
        <p class="title login" id="titulo-login">Bem-vindo novamente</p>
        <p class="title register" id="titulo-registro">Comece agora</p>
        <p class="title -forgot" id="titulo-esqueceu">Esqueceu a senha</p>
    </div>
    <div class="lang">
        <div>
            <a href="#" class="port"><img src="img/Bandeiras/Brasil.png" alt="" id="img1"></a>
        </div>
        <div>
            <a href="#" class="eng"><img src="img/Bandeiras/Usa.png" alt="" id="img2"></a>
        </div>
        <div>
            <a href="#" class="jap"><img src="img/Bandeiras/Japao.png" alt="" id="img3"></a>
        </div>
        <div>
            <a href="#" class="esp"><img src="img/Bandeiras/Espanha.png" alt="" id="img4"></a>
        </div>
    </div>
    <div class="wrapper">
        <div class="form-box login">
            <h2 id="login">Logar</h2>
            <form action="#">
                <div class="input-box">
                    <input type="text" required>
                    <label id="email">E-mail</label>
                </div>
                <div class="input-box">
                    <input type="password" required>
                    <label id="senha">Senha</label>
                </div>
                <div class="remember">
                    <label id="lembre"><input type="checkbox"> Lembre de mim</label>
                </div>
                <div>

                </div>
                <button type="submit" class="btn" id="submitlogin">Logar</button>
                <div class="login-register">
                    <p id="cadastrese">Não tem uma conta? <a href="#" class="register-link">Cadastre-se</a></p>
                </div>
                <div class="forgot-link">
                    <p id="esqueceu"><a href="#" class="forgot-link">Esqueceu a senha</a></p>
                </div>
            </form>
        </div>

        <div class="form-box register">
            <h2 id="cadastro">Cadastre-se</h2>
            <form action="#">
                <div class="input-box">
                    <input type="text" required>
                    <label id="nome">Nome de usuário</label>
                </div>
                <div class="input-box">
                    <input type="text" required>
                    <label id="email">E-mail</label>
                </div>
                <div class="input-box">
                    <input type="number" required>
                    <label>CPF</label>
                </div>
                <div class="input-box">
                    <input type="password" required>
                    <label id="senha">Senha</label>
                </div>
                <div class="input-box">
                    <input type="password" required>
                    <label id="confirmar">Cofirmar Senha</label>
                </div>
                <div class="remember">
                    <label id="concordo"><input type="checkbox"> Concordo com os termos & condições</label>
                </div>
                <button type="submit" class="btn" id="submitregistro">Registre-se</button>
                <div class="login-register">
                    <p id="conta">Já tem uma conta?<a href="#" class="login-link"> Login</a></p>
                </div>
            </form>
        </div>

        <div class="form-box forgot">
            <h2 id="esqueceutitulo">Esqueceu a senha</h2>
            <p id="esqueceutexto"> Siga as instruções para redefinir sua senha por e-mail ou telefone não esqueca de criar uma nova senha forte e memorize-a ou anote-a em um local seguro.</p>
            <form action="#">
                <div class="input-box">
                    <input type="text" required>
                    <label id="email">E-mail</label>
                </div>
                <div class="input-box">
                    <input type="number" required>
                    <label id="numero">Número</label>
                </div>
                <button type="submit" class="btn" id="submitesqueceu">Enviar</button>
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