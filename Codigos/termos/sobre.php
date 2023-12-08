
<?php
// Inclui o cabeçalho
include 'C:\xampp\htdocs\Sprint-3\Codigos\navbar\navbar.php';
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar</title>
    <link rel="stylesheet" href="C:\xampp\htdocs\Sprint-3\Codigos\navbar\navbar.css">
    <link rel="stylesheet" href="C:\xampp\htdocs\Sprint-3\Codigos\footer\footer.css">
</head>

<body>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    .privacy-policy {
        max-width: 800px;
        margin-right: 10px;
        margin: 2px auto;
        padding: 20px;
        text-align: center;
        border-radius: 5%;
        
    }

    .outer-rectangle {
       
        padding: 1px; /* Espaçamento interno */
        background-color: rgb(0, 0, 0); /* Cor de fundo do retângulo interno */
        max-width: 250px;
        margin-left: 260px;
        margin-top: -80px;
        border-radius: 10%;
        padding: 22px;
        

    }

    .inner-rectangle {

        padding: 10px; /* Espaçamento interno */
        margin-bottom: 20px; /* Espaçamento inferior */
        border-radius: 20%;
     
    background-color:rgba(248,223,105,1); /* Fundo amarelo */
    max-width: 300px;
    margin-left: 245px;
    }

    .privacy-policy h2 {
        color: #ffffff;
        margin-bottom: 10px; /* Espaçamento inferior para separar do retângulo interno */
        
    }

    h3, p {
        color: #000000;
    }

    /* Adicione mais estilos conforme necessário */
</style>

    <div class="privacy-policy">
        <div class="inner-rectangle">
            <h2>Política de Privacidade</h2>
        </div>
        <div class="outer-rectangle">
        </div>
        <br><br><br>
     
        <p>
            A BableB é uma empresa especializada em oferecer aulas de idiomas de forma dinâmica e eficiente. Com uma equipe de professores altamente qualificados, proporcionamos um ambiente acolhedor e motivador para que nossos alunos possam aprender de maneira divertida e interativa. Nosso método inovador utiliza tecnologia de ponta e materiais atualizados para garantir resultados rápidos e sólidos. Na BubbleB, acreditamos que aprender um novo idioma é abrir portas para novas oportunidades e expandir horizontes. Venha fazer parte da nossa boa linguística e descubra um mundo de possibilidades!
        </p>
    </div>

    <?php
// Inclui o cabeçalho
include '../footer/footer.php';
?>

</body>
</html
