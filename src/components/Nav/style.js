import styled from "styled-components";

export const Container = styled.div`

  align-content: center;
  text-align: center;
  width: 100%;

  .sign-in {
    position: absolute;
    top: 3%;
    right: 2%;

    button {
      height: 35px;
      width: 120px;
      margin-left: 25px;

      font-size: 14px;
      text-transform: uppercase;
      color: var(--cinza-200);

      background: transparent;
      border: 2px solid var(--cinza-200);
      border-radius: 5px;
    }


    button:hover {
        cursor:pointer;
        background-color:var(--cinza-100);
        color:var(--cinza-900);
  }
  }
  .permalinks {
    position: absolute;
    display: flex;
    top:4%;
    margin-left: 20px;

    a{
    font-size:16px;
    margin: 15px;
    color: #f1f1f1;

}

    a:link {
      text-decoration: none;
    }

    a:visited {
      text-decoration: none;
    }

    a:hover {
      text-decoration: none;
  
    }

    a:active {
      text-decoration: none;
    }
  }

  @media only screen and (max-width: 768px) {
    a {
      display: none ;
    }
    .sign-in {
    display:flex;
    flex-wrap: wrap;
    width: 150px ;
    position: absolute;
    top: 4%;
    right: 0%;

    button {
      height: 20px;
      width: 100px;
      margin-bottom: 12px;

      font-size: 12px;
      text-transform: uppercase;
    }
  }
  }
  
`;
