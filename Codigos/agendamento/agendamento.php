<?php
// Conexão com o banco de dados
$servername = "sprint-3 ";
$username = "root";
$dbname = "escola_idiomas";
$password = "";

$conn = new mysqli($servername, $username,$password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Consulta para obter os horários disponíveis
$sql = "SELECT p.nome AS professor, h.dia_semana, h.hora_inicio, h.hora_fim, h.disponivel
        FROM horarios_disponiveis h
        JOIN professores p ON h.id_professor = p.id
        ORDER BY p.nome, h.dia_semana, h.hora_inicio";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $status = $row['disponivel'] ? 'disponivel' : 'indisponivel';

        echo "<div class='horario-item $status'>";
        echo "<strong>{$row['professor']}</strong> - {$row['dia_semana']} {$row['hora_inicio']} - {$row['hora_fim']}";
        echo "</div>";
    }
} else {
    echo "Nenhum horário disponível encontrado.";
}

$conn->close();
?>
