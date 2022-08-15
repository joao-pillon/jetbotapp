import { Container } from "./style.js";
import React from "react";

const Footer = () => {
  return (
    <Container>
      <footer>
        <a href="#home" className="footer-logo">
          JetBov
        </a>
        <ul className="permalinks">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#simulacao">SIMULAÇÃO</a>
          </li>
          <li>
            <a href="#dados">DADOS</a>
          </li>
          <li>
            <a href="#sobre">SOBRE</a>
          </li>
        </ul>

        <div className="copyright">
          <small>&copy; 2022</small>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
