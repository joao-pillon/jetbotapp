import { Container } from "./style.js";
import logo from "../../assets/logoverde.png";
import Nav from "../Nav/index.jsx";

const Header = () => {


  return (
    <Container>
      <Nav/>
      <section id="home">
        <img src={logo} width="140px" alt="" />
      </section>
    </Container>
  );
};

export default Header;
