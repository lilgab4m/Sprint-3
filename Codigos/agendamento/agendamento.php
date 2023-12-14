<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sprint3";

// Cria uma conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Inserção de professores
$professores = [
    ['Prof1_Inglês', 'Inglês'],
    ['Prof2_Inglês', 'Inglês'],
    ['Prof3_Inglês', 'Inglês'],
    ['Prof4_Inglês', 'Inglês'],
    ['Prof5_Inglês', 'Inglês'],
    ['Prof6_Inglês', 'Inglês'],

    ['Prof1_Espanhol', 'Espanhol'],
    ['Prof2_Espanhol', 'Espanhol'],
    ['Prof3_Espanhol', 'Espanhol'],
    ['Prof4_Espanhol', 'Espanhol'],
    ['Prof5_Espanhol', 'Espanhol'],
    ['Prof6_Espanhol', 'Espanhol'],

    ['Prof1_Português', 'Português'],
    ['Prof2_Português', 'Português'],
    ['Prof3_Português', 'Português'],
    ['Prof4_Português', 'Português'],
    ['Prof5_Português', 'Português'],
    ['Prof6_Português', 'Português'],

    ['Prof1_Japonês', 'Japonês'],
    ['Prof2_Japonês', 'Japonês'],
    ['Prof3_Japonês', 'Japonês'],
    ['Prof4_Japonês', 'Japonês'],
    ['Prof5_Japonês', 'Japonês'],
    ['Prof6_Japonês', 'Japonês']
];

foreach ($professores as $professor) {
    $nome = $professor[0];
    $idioma = $professor[1];

    $sql = "INSERT INTO Professores (nome, idioma) VALUES ('$nome', '$idioma')";

    if ($conn->query($sql) === FALSE) {
        echo "Erro ao inserir professor: " . $conn->error;
    }
}

// Inserção de agendamentos
$agendamentos = [
    [1, '2023-12-14 10:00:00', 'Aluno A'],
    [2, '2023-12-14 11:30:00', 'Aluno B'],
    // ... Adicione mais agendamentos conforme necessário
];

foreach ($agendamentos as $agendamento) {
    $professor_id = $agendamento[0];
    $data_hora = $agendamento[1];
    $aluno_nome = $agendamento[2];

    $sql = "INSERT INTO Agendamentos (CodProf, dataHora, alunoNome) VALUES ($professor_id, '$data_hora', '$aluno_nome')";

    if ($conn->query($sql) === FALSE) {
        echo "Erro ao inserir agendamento: " . $conn->error;
    }
}

// Fecha a conexão
$conn->close();
?>