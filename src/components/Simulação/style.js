import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 0px 25px 0px;
  height: 350px;
  text-align: center;
  background-color: var(--cinza-300);
  position: inherit;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  button {
    margin-top: 15px;
    height: 35px;
    width: 100px;
    margin-left: 0px;
    font-size: 12px;
    text-transform: uppercase;

    background-color: var(--verde);
    color: var(--cinza-200);

    border: transparent;
    border-radius: 5px;
  }

  button:hover {
    cursor: pointer;
    color: var(--cinza-800);
    border: 2px solid var(--verde);
    background: transparent;
  }

  @media only screen and (max-width: 768px) {
    position: inherit;
    display: flex;
    flex-direction: column;
    height: 280px;
  }
`;

export const SimulaçãoContainer = styled.div`
  width: 40vw;
  background: rgba(255, 255, 255, 0);
`;

export const Fazenda = styled.div`
  position: relative;
  justify-content: center;
  align-itens: center;
  display: grid;
  grid-template:
    "a a"
    "b b";

  img {
    width: 150px;
    margin: 0px;
    padding: 0px;
    border-radius: 15%;
  }

  .animal1,
  .animal2,
  .animal3,
  .animal4,
  .animal5,
  .animal6 {
    -webkit-transition: transform 1.2s ease-in-out;
    position: absolute;
    width: 60px;
  }
  .animal1 {
    left: 37%;
    top: 1%;
    z-index: 9;
  }
  .animal2 {
    top: 2%;
    left: 30%;
  }
  .animal3 {
    top: 10%;
    left: 26%;
    z-index: 2;
  }
  .animal4 {
    top: 25%;
    left: 35%;
  }
  .animal5 {
    top: 25%;
    left: 26%;
  }
  .animal6 {
    top: 15%;
    left: 35%;
  }

  @media only screen and (max-width: 768px) {
    img {
      width: 100px;
    }

    .animal1 {
      left: 0%;
      top: 0%;
    }
    .animal2,
    .animal3,
    .animal4,
    .animal5,
    .animal6 {
      display: none;
    }
  }
`;

export const Explicação = styled.div`
  margin-left: 190px;
  margin-right: 110px;
  width: 32vw;

  h4 {
    text-align: center;
    margin: 0px 30px 50px 30px;
  }

  h5 {
    font-weight: 400;
    text-align: left;
  }

  p {
    text-align: left;
    line-height: 1.5;
    font-size: 15px;
  }

  @media only screen and (max-width: 1024px) {
    margin-left: 30px;
    margin-right: 10px;
    text-align: left;
    p {
      font-size: 13px;
      margin-top: 15px;
    }
    h4{
      text-align: left;
      margin: 0px;
      font-size:14px;
    }

    h5 {
      display: none;
    }
    .container-rotacao {
      display: flex;
      margin: 15px 30px 15px 30px;
    }
  }
`;
