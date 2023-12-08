<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="navbar.css">
</head>

<body>
    <nav class="navbar">
        <div class="logo-container">
            <img src="../../img/logo/1.jpg" alt="Logo">
        </div>
        <div class="logo-container1">
            <img src="../../img/BabelB-Branco 2.png" alt="Logo">
        </div>

        <ul class="nav-links">
            <li><a href="#kids">Kids</a></li>
            <li><a href="#fale-conosco">Fale Conosco</a></li>
            <li><a href=C:\xampp\htdocs\Sprint-3\Codigos\termos\sobre.html>Sobre</a></li>
            <li><a href="#agendamento">Agendamento</a></li>
            <li class="login-container">
                <a href="../login/login.php">Login</a>
                <img src="C:\xampp\htdocs\Sprint-3\img\login.png">
            </li>
        </ul>
    </nav>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-image: none;

        }

        .navbar {
            z-index: 100;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgb(0, 0, 0);
            background: linear-gradient(140deg, rgba(0, 0, 0, 1) 0%, rgba(54, 37, 9, 1) 30%, rgba(248, 223, 105, 1) 30%, rgba(252, 224, 87, 1) 100%);
        }

        .logo-container img {
            width: 50px;
            /* ajuste conforme necessário */
            height: auto;
            border-radius: 50%;
        }

        .logo-container1 img {
            width: 40px;
            /* ajuste conforme necessário */


            margin-right: 650px;
        }

        .nav-links {
            list-style: none;
            display: flex;
            align-items: center;
            text-align: left;
        }

        .nav-links li {
            margin-right: 15px;
        }

        .nav-links a {
            text-decoration: none;
            color: #000000;
        }

        .login-container {
            display: flex;
            align-items: center;
            color: #fff;
        }

        .login-container img {
            width: 20px;
            /* ajuste conforme necessário */
            height: auto;
            margin-left: 5px;
        }
    </style>
</body>

</html>