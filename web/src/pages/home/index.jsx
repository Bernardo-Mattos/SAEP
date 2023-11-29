import React from "react";
import data from "../../database/db.json";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { nome } = useParams();
  const handleLogout = () => {
    navigate("/");
  };
  const handleRemove = (turma_id) => {
    const newTurmas = data.turmas.filter((turma) => turma.turma_id !== turma_id);
    data.turmas = newTurmas;
    console.log(data);
   };
  return (
    <div>
      <header className="container">
        <h1>ola, {nome}</h1>
        <button className="btn btn-outline btn-danger" onClick={handleLogout}>
          Sair
        </button>
      </header>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID Turma</th>
            <th scope="col">Nome</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
          {data.turmas.map((turma, index) => {
            return (
              <tr key={index}>
                <td>{turma.turma_id}</td>
                <td>{turma.descricao}</td>
                <td>
                  <button className="btn btn-primary">Editar</button>
                  <button  onClick={() => handleRemove(turma.turma_id)} className="btn btn-danger">Remover</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
