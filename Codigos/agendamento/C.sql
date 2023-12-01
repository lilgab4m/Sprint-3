-- Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS escola_idiomas;
USE escola_idiomas;

-- Tabela de Professores
CREATE TABLE IF NOT EXISTS professores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    idioma VARCHAR(20) NOT NULL
);

-- Tabela de Horários Disponíveis
CREATE TABLE IF NOT EXISTS horarios_disponiveis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_professor INT,
    dia_semana VARCHAR(15) NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fim TIME NOT NULL,
    disponivel BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (id_professor) REFERENCES professores(id)
);

-- Exemplo de Inserção de Dados
INSERT INTO professores (nome, idioma) VALUES
('Professor Inglês 1', 'Inglês'),
('Professor Inglês 2', 'Inglês'),
('Professor Espanhol 1', 'Espanhol'),
('Professor Japonês 1', 'Japonês');

INSERT INTO horarios_disponiveis (id_professor, dia_semana, hora_inicio, hora_fim) VALUES
(1, 'Segunda-feira', '09:00:00', '11:00:00'),
(1, 'Quarta-feira', '14:00:00', '16:00:00'),
(2, 'Terça-feira', '10:00:00', '12:00:00'),
(3, 'Quinta-feira', '15:00:00', '17:00:00'),
(4, 'Sexta-feira', '13:00:00', '15:00:00');
