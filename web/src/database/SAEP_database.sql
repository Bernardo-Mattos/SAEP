-- Criar tabelas
CREATE TABLE Professor (
    professor_id SERIAL PRIMARY KEY,
    materia_id INT REFERENCES Materia(materia_id),
    nome VARCHAR(255),
    idade INT,
    cpf VARCHAR(14)
);

CREATE TABLE Aluno (
    aluno_id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    idade INT,
    matricula VARCHAR(10),
    turma_id INT REFERENCES Turma(turma_id)
);

CREATE TABLE Turma (
    turma_id SERIAL PRIMARY KEY,
    descricao VARCHAR(255)
);

CREATE TABLE Materia (
    materia_id SERIAL PRIMARY KEY,
    descricao VARCHAR(255),
);

CREATE TABLE Atividade (
    atividade_id SERIAL PRIMARY KEY,
    descricao VARCHAR(255),
    aluno_id INT REFERENCES Aluno(aluno_id),
    materia_id INT REFERENCES Materia(materia_id)
);

-- Inserir dados
-- Professores
INSERT INTO Professor ( nome, idade, cpf) VALUES
('Professor 1', 35, '123.456.789-01'),
('Professor 2', 40, '987.654.321-02');

-- Turmas
INSERT INTO Turma (descricao) VALUES
('Turma A'),
('Turma B');

-- Alunos
INSERT INTO Aluno (nome, idade, matricula, turma_id) VALUES
('Aluno 1', 20, 'M12345', 1),
('Aluno 2', 22, 'M54321', 2);

-- Matérias
INSERT INTO Materia (descricao) VALUES
('Matéria 1'),
('Matéria 2');

-- Atividades
INSERT INTO Atividade (descricao, aluno_id, materia_id) VALUES
('Atividade 1', 1, 1),
('Atividade 2', 2, 2);