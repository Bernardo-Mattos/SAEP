import { useState } from "react";
import "./App.css";
import data from "./database/db.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Simulação de verificação de credenciais
    const professor = data.professores.find(
      (prof) => prof.nome === username && prof.cpf === password
    );

    if (professor) {
      // Login bem-sucedido
      setError("Credenciais corretas");
      console.log("Login bem-sucedido!");
      await new Promise((resolve) => setTimeout(resolve, 500));
      navigate(`/home/${professor.nome}`);
    } else {
      setError(
        "Credenciais erradas, por favor insira seu nome como login e seu CPF como senha"
      );
    }
  };

  return (
    <div className="container form-group">
      <h1>Tela de Login</h1>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            UserName
          </span>
        </div>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            Senha
          </span>
        </div>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>
        Entrar
      </button>
      {error && (
        <div
          className={
            error.includes("corretas")
              ? "alert alert-success mt-3"
              : "alert alert-danger mt-3"
          }
          role="alert"
        >
          {error}
        </div>
      )}
    </div>
  );
}

export default App;
