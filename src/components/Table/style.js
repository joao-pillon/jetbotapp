import styled from "styled-components";

export const Container = styled.div`
  width: 192vh;
  height: 100%;

  margin: 40px auto;
  padding-bottom: 60px;
  padding-top: 9px;

  background-color: var(--cinza-200);
  border-left: 3px solid var(--verde);
  box-shadow: 1px px 5px 0px green;

  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;

  table {
    margin: 0px auto;
    width: 170vh;
    height: 50vh;

    text-transform: upperCase;
    text-shadow: 0px 1px 1px rgba(88, 88, 88, 0.2);
    text-align: left;
    vertical-align: baseline;
    justify-content: left;
  }

  td,
  tr,
  table {
    background-color: var(--cinza-200);
    justify-items: center;
    border: 1px solid var(--cinza-400);
  }

  th {
    padding: 10px;
    padding-left: 20px;
    font-size: 14px;
  }

  td {
    padding-left: 20px;
    font-size: 13px;
  }

  h3 {
    padding-top: 15px;
    font-size: 15px;
    text-align: center;
  }


  @media only screen and (max-width: 1024px) {
    margin: 20px auto;
    width: 95%;
    table {
      width: 80%;
    }

    th {
      padding: 10px;
      padding-left: 5px;
      font-size: 13px;
    }
    td {
      padding-left: 20px;
      font-size: 12px;
    }
    h3 {
      padding-top: 20px;
      font-size: 12px;
      text-align: center;
    }
  }
`;

export const TableContainer = styled.div`
  width: 190vh;
  height: 50vh;
  margin-left: 5px;

  background-color: var(--branco);
  border-radius: 5px;

  box-shadow: 0px 0px 5px 0px rgba(169, 169, 169, 0.4);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(169, 169, 169, 0.4);
  -moz-box-shadow: 0px 0px 5px 0px rgba(169, 169, 169, 0.4);

  @media only screen and (max-width: 1024px) {
    width: 95%;
  }
`;
