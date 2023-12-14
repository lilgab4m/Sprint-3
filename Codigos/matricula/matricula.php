<?php
include '../navbar/navbar.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' type='text/css' media='screen' href='matricula.css'>
    <title>Matricula</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>
    <div class="banner">
        <img src="../../img/matricula.png">
        <h1>Pre-Matricula</h1>
    </div>
    <div class="forms">
        <div>
            <h1>Sobre Voce</h1>
        </div>
        <div>
            <div class="input-box">
                <input type="email" required>
                <label id="email">E-mail</label>
            </div>
            <div class="input-box">
                <input type="text" required>
                <label id="nome">Nome</label>
            </div>
            <div class="input-box">
                <input type="number" required>
                <label id="numero">Numero</label>
            </div>
            <div class="input-box">
                <input type="Number" required>
                <label id="cep">CEP</label>
            </div>
        </div>
    </div>
    <div class="forms">
        <div>
            <h1>UNIDADE</h1>
        </div>
        <div>
            <div class="input-box">
                <input type="text" required>
                <label id="email">País</label>
            </div>
            <div class="input-box">
                <input type="text" required>
                <label id="nome">Cidade</label>
            </div>
            <div class="input-box">
                <input type="number" required>
                <label id="numero">Bairro</label>
            </div>
            <div class="input-box">
                <input type="Number" required>
                <label id="cep">Rua e número</label>
            </div>
        </div>
    </div>
    <div class="forms">
        <div>
            <h1>Sobre o curso </h1>
        </div>
        <div>
            <div class="input-box">
                <input type="text" required>
                <label id="email">Língua</label>
            </div>
            <div class="dia">
                <div>
                    <input type="radio" class="btn-check" name="options-base" id="option1" autocomplete="off" checked>
                    <label class="btn" for="option1">Dom</label>
                </div>
                <div>
                    <input type="radio" class="btn-check" name="options-base" id="option2" autocomplete="off">
                    <label class="btn" for="option2">Seg</label>
                </div>
                <div>
                    <input type="radio" class="btn-check" name="options-base" id="option3" autocomplete="off">
                    <label class="btn" for="option3">Ter</label>
                </div>
                <div>
                    <input type="radio" class="btn-check" name="options-base" id="option4" autocomplete="off">
                    <label class="btn" for="option4">Qua</label>
                </div>
                <div>
                    <input type="radio" class="btn-check" name="options-base" id="option5" autocomplete="off">
                    <label class="btn" for="option5">Qui</label>
                </div>
                <div>
                    <input type="radio" class="btn-check" name="options-base" id="option6" autocomplete="off">
                    <label class="btn" for="option6">Sex</label>
                </div>
                <div>
                    <input type="radio" class="btn-check" name="options-base" id="option7" autocomplete="off">
                    <label class="btn" for="option7">Sáb</label>
                </div>
            </div>
        </div>
    </div>
    <div class="botao">
        <button type="submit" class="button">Efetuar</button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>

</html>
<?php
include '../footer/footer.php';
?>