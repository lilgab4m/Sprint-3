<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
        <link rel='stylesheet' type='text/css' media='screen' href='login.css'>
    </head>
    <body>
        <div class="text">
            <p class="title.login">Bem-vindo novamente</p>
            <p class="title.register">Comece agora</p>
        </div>
        <div class="wrapper">
                <div class="form-box login">
                    <h2>Login</h2>
                    <form action="#">
                        <div class="input-box">
                            <input type="email" required>
                            <label>E-mail</label>
                        </div>
                        <div class="input-box">
                            <input type="password" required>
                            <label>Senha</label>
                        </div>
                        <div class="remember-forgot">
                            <label><input type="checkbox"> Lembre de mim</label>
                        </div>
                        <div>
                            
                        </div>
                        <button type="submit" class="btn">Login</button>
                        <div class="login-register">
                            <p>Não tem uma conta?<a href="#" class="register-link"> Cadastre-se</a></p>
                        </div>
                    </form>
                </div>

                <div class="form-box register">
                    <h2>Registre-se</h2>
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
                        <div class="remember-forgot">
                            <label><input type="checkbox"> Concordo com os termos & condições</label>
                        </div>
                        <button type="submit" class="btn">Registre-se</button>
                        <div class="login-register">
                            <p>Já tem uma conta?<a href="#" class="login-link"> Login</a></p>
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