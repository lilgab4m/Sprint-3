<?php
include "../navbar/navbar.php"

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
        <h3>Coleta de Informações</h3>
        <p>
            Podemos coletar informações pessoais, como nome, endereço de e-mail, localização e outras informações que você fornecer voluntariamente ao se cadastrar em nosso site ou ao usar nossos serviços.
        </p>

        <h3>Uso das Informações</h3>
        <p>
            As informações pessoais coletadas podem ser usadas para fornecer os serviços de ensino de inglês online, personalizar o conteúdo do curso, melhorar a experiência do usuário e entrar em contato sobre atualizações ou novidades relacionadas ao Bableb. Não compartilharemos suas informações pessoais com terceiros sem o seu consentimento, exceto quando exigido por lei.
        </p>


        <h3>Contato</h3>
        <p>
            Se você tiver alguma dúvida ou preocupação sobre nossa Política de Privacidade, entre em contato conosco através das informações fornecidas em nosso site.
        </p>

        <p>
            Esta Política de Privacidade foi atualizada em 2023.
        </p>
    </div> 
    <br><br><br><br><br>

</body>
<?php
include '../footer/footer.php'

?>
</html>
