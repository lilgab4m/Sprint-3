<?PHP
include '../navbar/navbar.php'

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="C:\xampp\htdocs\Sprint-3\Codigos\navbar\navbar.css">
      <link rel="stylesheet" href="CONTATO.CSS">
     
 
  <title>Contato</title>


</head>
<body>
<br><br><br><br><br>



<div class="logo">
      <img src="login.png" alt="">
</div>

<section>
    <header>
        <h1>CONTATO</h1>
      </header>
    <form action="#" method="post">

      
     
      <input type="text" id="nome" name="nome" placeholder="Nome Completo" required>


      <input type="email" id="Email" name="Email" placeholder="E-mail" required>

      <input type="nivel" name="Nivel" rows="Nivel" placeholder="Nivel" required> 
      <input type="text" id="nome" name="nome" placeholder="Telefone" required>

      <h4>COMENTARIO</h4>
      <textarea id="Contato" name="Contato" rows="Contato" required class="textarea"></textarea><br>
      <button>Enviar</button>
    </form>
  </section>


 

</body>
<?php
include '../footer/footer.php'
?>
</html>
