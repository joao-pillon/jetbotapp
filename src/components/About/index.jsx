import { Container } from "./style.js";
import banner from "../../assets/images/banner.png";
import banner2 from "../../assets/images/banner2.jpeg";
const About = () => {
  return (
    <Container>
      <div className="banner1">
        <img src={banner} alt="" />
        <h1>
          Experimente uma gestão completa <br></br>para sua fazenda de bovinos.
        </h1>
      </div>
      <div className="banner2">
        <img src={banner2} alt="" />
      </div>

      <section id="sobre">
        <div>
          <h2> Difícil controlar o ganho de peso do seu rebanho?</h2>
          <h2>Com a JetBov isso fica fácil.</h2>
        </div>
      </section>
    </Container>
  );
};

export default About;
