import React from "react";
import data from "../../database/db.json";

export default function Home() {
  return (
    <div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID Professor</th>
            <th scope="col">Nome</th>
          </tr>
        </thead>
        <tbody>
          {data.professores.map((professor, index) => {
            return (
              <tr key={index}>
                <td>{professor.professor_id}</td>
                <td>{professor.nome}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
