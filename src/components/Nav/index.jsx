import { Container } from "./style.js";

const Nav = () => {
  return (
    <Container>
      <div className="sign-in">
        <button>Entrar</button>
        <button>Criar conta</button>
      </div>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#simulacao">Simulação</a>
        </li>
        <li>
          <a href="#dados">Dados</a>
        </li>

        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </Container>
  );
};

export default Nav;
