<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página com Carrossel e Formulários</title>
    <link rel="stylesheet" href="prematricula.css">
    <style>
        /* Adicione estilos CSS conforme necessário */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        .carousel-container {
            width: 100%;
            max-width: 800px;
            margin: auto;
            overflow: hidden;
        }

        .carousel {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }

        .carousel img {
            width: 100%;
            height: auto;
        }

        .about-me {
            background-color: yellow;
            padding: 20px;
        }

        .form-container {
            max-width: 600px;
            margin: auto;
        }

        .form-section {
            margin-bottom: 20px;
        }

        .language-selector {
            margin-top: 20px;
        }
    </style>
</head>
<body>

<!-- Carrossel de Imagens -->
<div class="carousel-container">
    <div class="carousel">
        <img src="imagem1.jpg" alt="Imagem 1">
        <img src="imagem2.jpg" alt="Imagem 2">
        <img src="imagem3.jpg" alt="Imagem 3">
        <!-- Adicione mais imagens conforme necessário -->
    </div>
</div>

<!-- Sobre Mim -->
<div class="about-me">
    <h2>Sobre Mim</h2>
    <p>Seu texto sobre você vai aqui...</p>
</div>

<!-- Formulários -->
<div class="form-container">
    <h2>Informações Pessoais</h2>
    <div class="form-section">
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>
    </div>

    <div class="form-section">
        <label for="nome">Nome Completo:</label>
        <input type="text" id="nome" name="nome" required>
    </div>

    <div class="form-section">
        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" required>
    </div>

    <div class="form-section">
        <label for="cep">CEP:</label>
        <input type="text" id="cep" name="cep" required>
    </div>

    <!-- Informações sobre a Unidade -->
    <h2>Unidade</h2>
    <div class="form-section">
        <label for="pais">País:</label>
        <input type="text" id="pais" name="pais" required>
    </div>

    <div class="form-section">
        <label for="cidade">Cidade:</label>
        <input type="text" id="cidade" name="cidade" required>
    </div>

    <div class="form-section">
        <label for="bairro">Bairro:</label>
        <input type="text" id="bairro" name="bairro" required>
    </div>

    <div class="form-section">
        <label for="rua">Rua:</label>
        <input type="text" id="rua" name="rua" required>
    </div>

    <div class="form-section">
        <label for="numero">Número da Casa:</label>
        <input type="text" id="numero" name="numero" required>
    </div>

    <!-- Sobre o Curso -->
    <h2>Sobre o Curso</h2>
    <div class="language-selector">
        <label for="lingua">Língua Desejada:</label>
        <select id="lingua" name="lingua" required>
            <option value="ingles">Inglês</option>
            <option value="espanhol">Espanhol</option>
            <option value="portugues">Português</option>
            <option value="japones">Japonês</option>
        </select>
    </div>

    <div class="form-section">
        <label>Dias da Semana:</label>
        <input type="checkbox" name="dias_semana[]" value="segunda"> Segunda-feira
        <input type="checkbox" name="dias_semana[]" value="terca"> Terça-feira
        <input type="checkbox" name="dias_semana[]" value="quarta"> Quarta-feira
        <input type="checkbox" name="dias_semana[]" value="quinta"> Quinta-feira
        <input type="checkbox" name="dias_semana[]" value="sexta"> Sexta-feira
    </div>
</div>

</body>
</html>
 <!-- #region -->