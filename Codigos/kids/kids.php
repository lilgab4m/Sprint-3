<?php
include '../navbar/navbar.php'

?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="navbar.css">









    <style>
        body {
            margin: 0;
            padding: 0;
          background-image: url "img/fundo.png" ;
            background-size: cover;
            background-position: center;
            font-family: Arial, sans-serif;
            color: #000000; /* Cor do texto */
            background-image: url(img/fundo.png);
          
        }

        #container {
            position: relative;
            width: 100%;
            height: 100vh;
        }

        #main-rectangle {
            position: absolute;
            top: 200px;
            right: 200px;
            width: 550px;
            height: 250px;
            background-color: #ffffff; /* Cor do retângulo branco */
            margin-right: 150px;
            margin-top: -350px;
            padding: 20px;
            box-sizing: border-box;
            border: 2px solid #ffcc00; /* Cor da borda amarela */
            border-radius: 10px;
            

        
        }

        #title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
            margin-right: 300px;
        }

        #button {
            background-color: #ffffff; /* Cor do botão branco */
            color: #ffcc00; /* Cor do texto do botão */
            border: 2px solid #ffcc00; /* Cor da borda amarela */
            padding: 10px 15px;
            font-size: 14px;
            cursor: pointer;
            border-radius: 5px;
     
            margin-right: 310px;
          
           
        }

        #small-rectangle {
            position: absolute;
            top: 300px;
            right: 100px;
            width: 300px;
            height: 200px;
            background-color: #ffcc00; /* Cor do retângulo amarelo */
            padding: 10px;
            box-sizing: border-box;
            border-radius: 5px;
            margin-top: -450px;
            margin-right: 250px;
     
      
            
        }

        #small-rectangle-text {
            font-size: 12px;
            font-weight: bold;
            color: #ffffff; /* Cor do texto dentro do retângulo amarelo */
        }

        /* Estilos para o card */
        .card {
            width: 600px;
            background-color: rgb(255, 208, 1);
            padding: 10x;
            border-radius: 8px;
            box-shadow: 0 4px 0px rgba(0, 0, 0, 0.1);
        }

        .card img {
            width: 100%;
            height: auto;
           border: 0px solid #333;
            border-radius: 8px 8px 0  0;
        }
        
    </style>











</head>

<body>
 
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-image: none;
            background-image: url(img/fundo.png);

        }

        .navbar {

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
        .belinha{

    background-size: 150% auto; /* Ajuste o valor percentual conforme necessário */
 margin-top: -400px;



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
         
            height: auto;
            margin-left: 5px;
        }
    </style>
<br>



<center>
<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="img/kids.png" class="d-block w-100" alt="...">
      </div>

      <div id="container">
        <div id="main-rectangle"><BR><BR>
 <div id="title">Seja Bem-Vindo!</div><br><br><br><br> <br>
 <a href="kids2.php" >    <button id="button">Matricule-se</button></a>
        </div>
        <div id="small-rectangle">
            <div id="small-rectangle-text"><br><BR><BR>Existem vários benfícios de fazer inglês na infância, isso pode abrir portas para oportunidades educacionais, culturais e profissionais no futuro. Na BableB você pode aprender tudo isso e maito mais! </div>
                
        </div>
        
    </div>
    <div class="belinha">
    <a href="kids2.php" > <img src="img/bablekids-removebg-preview.png" alt=""></a>

    </div>
  </div>
</center>




<center>


<div class="card">
    <img src="img\kids2.png" alt="Imagem">
    <br>
   
    <p>Além dos livros da BableB, também existem materiais de inglês infantil como jogos educativos, flashcards com imagens e palavras em inglês, músicas e vídeos com letras e atividades interativas, que tornam o aprendizado do idioma mais divertido e envolvente para as crianças. Esses materiais são especialmente projetados para atender às necessidades e interesses das crianças em diferentes faixas etárias, estimulando a curiosidade e o interesse pelo inglês desde cedo. 
        <br>
    </p>
</div>

</center>










<div class="content">
    <!-- Seu conteúdo principal aqui -->
</div>




</body>
<?php
include '../footer/footer.php'
?>
</html>