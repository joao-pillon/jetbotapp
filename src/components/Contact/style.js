import styled from "styled-components";

export const Container = styled.div`
  padding-top: 25px;
  background-color: var(--cinza-900);
  height: 550px;

  h2,
  h5 {
    text-align: center;
    color: var(--branco-200);
  }

  button {
    margin-top: 10px;
    height: 35px;
    width: 170px;

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

  .container-contact {
    display: grid;
    grid-template-columns: 25% 40%;
    gap: 30%;
    margin: 50px 150px 0px 250px;
  }

  .options {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .options-container {
    background: var(--verde);
    padding: 15px;
    text-align: center;
    border-radius: 1.2rem;
    text-align: center;
    border: 1px solid transparent;
    transition: var(--transition);
  }

  .contact-option:hover {
    background: transparent;
    border-color: var(--verde);
  }

  .contact-option-icon {
    font-size: 30px;
    margin-bottom: 10px;
  }

  a:hover {
    cursor: pointer;
  }

  h2 {
    font-size: 20px;
    text-transform: uppercase;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid var(--verde);
    font-size: 15px;
    color: var(--branco-200);
  }

  @media only screen and (max-width: 768px) {
    height: 330px;

    .container-contact {
      grid-template-columns: 20% 30%;
      gap: 30%;
      margin: 25px 0px 0px 0px;
    }
    .options-container {
      background: var(--verde);
      width: 150px;
      margin-left: 15px;
      padding: 0px;
      height: 120px;
      font-size: 9px;
    }
    .options {
      margin-left: 25px;
    }

    .contact-option-icon {
      font-size: 20px;
      margin-top: 20px;
    }
    button {
      margin-top: 0px;
      height: 25px;
      width: 120px;
      font-size: 9px;
    }

    h2 {
      font-size: 14px;
    }

    input,
    textarea {
      padding: 10px;
      font-size: 10px;
    }
  }
`;
