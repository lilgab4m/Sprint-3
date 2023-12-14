<?php
include '../navbar/navbar.php'
?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="navbar.css">
    <link rel="stylesheet" href="C:\xampp\htdocs\Sprint-3\Codigos\footer\footer.php">

    <style>
        /* Estilo para o contêiner da imagem */
        .image-container {
            position: relative;
            width: 70%;
        }

        /* Estilo para a imagem */
        .background-image {
            width: 100%;
            height: auto;
            border-radius: 15px; /* Arredonda as bordas do retângulo */
        }

        /* Estilo para o retângulo amarelo */
        .yellow-rectangle {
            position: absolute;
            bottom: 50px; /* Posicionamento na parte inferior */
            left: 50px; /* Ajuste a posição horizontal do retângulo */
            width: 720px;
            height: 180px;
            top: 90%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgb(255, 208, 0);
            z-index: 1; /* Garante que fique acima da imagem */
            padding: 20px;
            box-sizing: border-box;
            text-align: center; /* Centraliza o texto */
            border-radius: 15px; /* Arredonda as bordas do retângulo */
            font-family: 'Encode Sans Condensed', sans-serif; /* Altera a fonte do texto */
        }

        /* Estilo para o texto dentro do retângulo */
        .text-inside {
            color: black;
            text-align: center;


        }

    }

/* Estilo para o texto dentro do retângulo */
.text-inside {
    color: black;
}

    </style>

<link href="https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@400;700&display=swap" rel="stylesheet">
</head>

<body>
 
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-image: none;

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


<br>
<br>
<center>
<div class="image-container">
    <img class="background-image" src="img\crianças.png" alt="Imagem de fundo">


        <div class="yellow-rectangle">
            <p class="text-inside">Os mascotes nas escolas de inglês têm um papel significativo no desenvolvimento das crianças. Eles criam um ambiente acolhedor e amigável, ajudando os alunos a se sentirem mais confortáveis e confiantes durante as aulas. Além disso, os mascotes podem ser usados como uma ferramenta educacional, estimulando o interesse pelo idioma e facilitando a compreensão de conceitos por meio de atividades interativas e jogos.</p>
        </div>
    </div>
</center>

<center>
<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
    <a href="kids.php" >   <img src="img/bablekids.png" width="1200" class="d-block w-200" alt="..."></div></a>
      
    </div>
    
</div>
</center>




</body>
<?php
include '../footer/footer.php'
?>

</html>