import styled from "styled-components";

export const Container = styled.div`
  height: 625px;
  text-align: center;
  box-shadow: 0px 0px 15px 5px rgba(158, 158, 158, 0.75);
  -webkit-box-shadow: 0px 0px 15px 5px rgba(158, 158, 158, 0.75);
  -moz-box-shadow: 0px 0px 15px 5px rgba(158, 158, 158, 0.75);

  .banner1 {
    display: flex;
    padding: 20px;

    h1 {
      font-size: 19px;
      margin-top: 50px;
    }

    img {
      z-index: 1;
      height: 120px;
      width: 20%;
      margin-left: 12.5%;
      margin-right: 30%;
    }
  }

  .banner2 {
    height: 300px;

    img {
      height: 300px;
      width: 100%;
      box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.15);
      -webkit-box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.15);
    }
  }

  #sobre {
    padding-top: 50px;
    height: 170px;
    background: #c0c0c0;
    background: linear-gradient(90deg, #c0c0c0 0%, #4f4f4f 10%);
    background: -webkit-linear-gradient(90deg, #c0c0c0 0%, #4f4f4f 10%);
    background: -moz-linear-gradient(90deg, #c0c0c0 0%, #4f4f4f 10%);

    h2 {
      color: var(--branco-100);
      line-height: 1.8;
      font-size: 18px;
      text-align: center;
      text-shadow: 2px 2px 2px var(--cinza-1000);
      text-transform: upperCase;
    }
  }

  @media only screen and (max-width: 768px) {
    height: 480px;
    .banner1 {
      padding: 20px auto;

      h1 {
        font-size: 13px;
        margin: 30px 30px 0px 10px;
      }

      img {
        margin: 30px 15px 0px 0px;
        z-index: 1;
        height: 80px;
        width: 40%;
      }
    }

    .banner2 {
      height: 180px;

      img {
        height: 180px;
      }
    }
    #sobre {
      height: 100px;

      h2 {
        font-size: 13px;
        margin-left: 25px;
        margin-right: 25px;
      }
    }
  }
`;
