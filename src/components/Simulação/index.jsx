import { Container, SimulaçãoContainer, Fazenda, Explicação } from "./style.js";
import pasto from "../../assets/images/grass.png";
import animal from "../../assets/images/boi.png";

const Simulação = () => {
  let A1 = true;
  let A2 = false;
  let A3 = false;
  let A4 = false;
  let fazenda = [A1, A2, A3, A4];
  let cicle = false;

  const rotate = () => {
    if (A1 == true) {
      return moveA2();
    }
    if (A2 == true) {
      return moveA3();
    }
    if (A3 == true) {
      return moveA4();
    }
    if (A4 == true) {
      return moveA1();
    }

    function moveA2() {
      document.getElementsByClassName("area-1")[0].style.filter =
        "brightness(0.70)";
      document.getElementsByClassName("area-2")[0].style.filter =
        "brightness(1)";
      if (cicle == true) {
        document.getElementsByClassName("area-4")[0].style.filter =
          "brightness(0.9)";
        document.getElementsByClassName("area-3")[0].style.filter =
          "brightness(0.8)";
      }
      document.getElementsByClassName("animal1")[0].style.transform =
        "translateX(200%)";
      document.getElementsByClassName("animal2")[0].style.transform =
        "translateX(250%)";
      document.getElementsByClassName("animal3")[0].style.transform =
        "translateX(250%)";
      document.getElementsByClassName("animal4")[0].style.transform =
        "translateX(250%)";
      document.getElementsByClassName("animal5")[0].style.transform =
        "translateX(250%)";
      document.getElementsByClassName("animal6")[0].style.transform =
        "translateX(250%)";
      A1 = false;
      A2 = true;
    }

    function moveA3() {
      document.getElementsByClassName("area-1")[0].style.filter =
        "brightness(0.8)";
      document.getElementsByClassName("area-2")[0].style.filter =
        "brightness(0.70)";

      if (cicle == true) {
        document.getElementsByClassName("area-3")[0].style.filter =
          "brightness(1)";
        document.getElementsByClassName("area-4")[0].style.filter =
          "brightness(0.8)";
      }

      document.getElementsByClassName("animal1")[0].style.transform =
        "translateY(200%) translateX(200%)";
      document.getElementsByClassName("animal2")[0].style.transform =
        "translateY(200%) translateX(250%) ";
      document.getElementsByClassName("animal3")[0].style.transform =
        "translateY(210%) translateX(250%) ";
      document.getElementsByClassName("animal4")[0].style.transform =
        "translateY(240%) translateX(250%) ";
      document.getElementsByClassName("animal5")[0].style.transform =
        "translateY(220%) translateX(250%) ";
      document.getElementsByClassName("animal6")[0].style.transform =
        "translateY(150%) translateX(250%) ";
      A2 = false;
      A3 = true;
    }

    function moveA4() {
      document.getElementsByClassName("area-1")[0].style.filter =
        "brightness(0.9)";
      document.getElementsByClassName("area-2")[0].style.filter =
        "brightness(0.8)";

      if (cicle == true) {
        document.getElementsByClassName("area-3")[0].style.filter =
          "brightness(0.7)";
        document.getElementsByClassName("area-4")[0].style.filter =
          "brightness(1)";
      }

      document.getElementsByClassName("animal1")[0].style.transform =
        " translateY(200%)  translateX(0%)";
      document.getElementsByClassName("animal2")[0].style.transform =
        " translateY(200%) translateX(0%)";
      document.getElementsByClassName("animal3")[0].style.transform =
        " translateY(210%) translateX(0%)";
      document.getElementsByClassName("animal4")[0].style.transform =
        " translateY(240%) translateX(0%)";
      document.getElementsByClassName("animal5")[0].style.transform =
        " translateY(220%) translateX(0%)";
      document.getElementsByClassName("animal6")[0].style.transform =
        " translateY(150%) translateX(0%)";
      A3 = false;
      A4 = true;
      cicle = true;
    }

    function moveA1() {
      document.getElementsByClassName("area-1")[0].style.filter =
        "brightness(1)";
      document.getElementsByClassName("area-2")[0].style.filter =
        "brightness(0.9)";
      document.getElementsByClassName("area-3")[0].style.filter =
        "brightness(0.8)";
      document.getElementsByClassName("area-4")[0].style.filter =
        "brightness(0.70)";

      document.getElementsByClassName("animal1")[0].style.transform =
        "translateY(0%)";
      document.getElementsByClassName("animal2")[0].style.transform =
        "translateY(0%)";
      document.getElementsByClassName("animal3")[0].style.transform =
        "translateY(0%)";
      document.getElementsByClassName("animal4")[0].style.transform =
        "translateY(0%)";
      document.getElementsByClassName("animal5")[0].style.transform =
        "translateY(0%)";
      document.getElementsByClassName("animal6")[0].style.transform =
        "translateY(0%)";
      A4 = false;
      A1 = true;
    }
  };

  return (
    <>
      {" "}
      <section id="simulacao">
        <Container>
          <Explicação>
            <h4>
              Com o nosso aplicativo você pode ter controle do gado e realizar a
              gestão de sua fazenda sem complicação!
            </h4>
            <p>Ao lado simulamos uma prática de Pastejo Rotacionado.</p>

            <br></br>

            <h5>
              A partir desta demonstração e com auxílio de nosso software você
              terá o controle do ganho de peso diário (GMD) dos seus animais na
              palma da mão.
            </h5>
          </Explicação>
          <SimulaçãoContainer>
            <Fazenda>
              <div className="area-1">
                {" "}
                <img src={pasto} alt="" />
              </div>
              <div className="area-2">
                {" "}
                <img src={pasto} alt="" />{" "}
              </div>
              <div className="area-4">
                {" "}
                <img src={pasto} alt="" />{" "}
              </div>
              <div className="area-3">
                {" "}
                <img src={pasto} alt="" />
              </div>

              <img src={animal} className="animal1" />
              <img src={animal} className="animal2" />
              <img src={animal} className="animal3" />
              <img src={animal} className="animal4" />
              <img src={animal} className="animal5" />
              <img src={animal} className="animal6" />
            </Fazenda>
            <button onClick={rotate}>Rotacionar</button>
          </SimulaçãoContainer>
        </Container>{" "}
      </section>
    </>
  );
};

export default Simulação;
