-- Tabela de Professores
CREATE TABLE Professores (
    professor_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    idioma VARCHAR(50)
);

-- Inserção de professores para cada idioma
INSERT INTO Professores (nome, idioma) VALUES
    ('Prof1_Inglês', 'Inglês'),
    ('Prof2_Inglês', 'Inglês'),
    ('Prof3_Inglês', 'Inglês'),
    ('Prof4_Inglês', 'Inglês'),
    ('Prof5_Inglês', 'Inglês'),
    ('Prof6_Inglês', 'Inglês'),

    ('Prof1_Espanhol', 'Espanhol'),
    ('Prof2_Espanhol', 'Espanhol'),
    ('Prof3_Espanhol', 'Espanhol'),
    ('Prof4_Espanhol', 'Espanhol'),
    ('Prof5_Espanhol', 'Espanhol'),
    ('Prof6_Espanhol', 'Espanhol'),

    ('Prof1_Português', 'Português'),
    ('Prof2_Português', 'Português'),
    ('Prof3_Português', 'Português'),
    ('Prof4_Português', 'Português'),
    ('Prof5_Português', 'Português'),
    ('Prof6_Português', 'Português'),

    ('Prof1_Japonês', 'Japonês'),
    ('Prof2_Japonês', 'Japonês'),
    ('Prof3_Japonês', 'Japonês'),
    ('Prof4_Japonês', 'Japonês'),
    ('Prof5_Japonês', 'Japonês'),
    ('Prof6_Japonês', 'Japonês');

-- Tabela de Agendamentos
CREATE TABLE Agendamentos (
    agendamento_id INT PRIMARY KEY AUTO_INCREMENT,
    professor_id INT,
    data_hora DATETIME,
    aluno_nome VARCHAR(100),
    FOREIGN KEY (professor_id) REFERENCES Professores(professor_id)
);

-- Inserção de agendamentos para cada idioma
INSERT INTO Agendamentos (professor_id, data_hora, aluno_nome) VALUES
    -- Inglês
    (1, '2023-12-14 10:00:00', 'Aluno A'),
    (2, '2023-12-14 11:30:00', 'Aluno B'),
    (3, '2023-12-14 13:00:00', 'Aluno C'),
    (4, '2023-12-14 14:30:00', 'Aluno D'),
    (5, '2023-12-14 16:00:00', 'Aluno E'),
    (6, '2023-12-14 17:30:00', 'Aluno F'),

    -- Espanhol
    (7, '2023-12-15 09:00:00', 'Aluno G'),
    (8, '2023-12-15 10:30:00', 'Aluno H'),
    (9, '2023-12-15 12:00:00', 'Aluno I'),
    (10, '2023-12-15 13:30:00', 'Aluno J'),
    (11, '2023-12-15 15:00:00', 'Aluno K'),
    (12, '2023-12-15 16:30:00', 'Aluno L'),

    -- Português
    (13, '2023-12-16 10:00:00', 'Aluno M'),
    (14, '2023-12-16 11:30:00', 'Aluno N'),
    (15, '2023-12-16 13:00:00', 'Aluno O'),
    (16, '2023-12-16 14:30:00', 'Aluno P'),
    (17, '2023-12-16 16:00:00', 'Aluno Q'),
    (18, '2023-12-16 17:30:00', 'Aluno R'),

    -- Japonês
    (19, '2023-12-17 09:00:00', 'Aluno S'),
    (20, '2023-12-17 10:30:00', 'Aluno T'),
    (21, '2023-12-17 12:00:00', 'Aluno U'),
    (22, '2023-12-17 13:30:00', 'Aluno V'),
    (23, '2023-12-17 15:00:00', 'Aluno W'),
    (24, '2023-12-17 16:30:00', 'Aluno X');