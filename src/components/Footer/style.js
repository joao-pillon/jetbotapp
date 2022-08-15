import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  background: var(--verde);
  height: 180px;

  footer {
    background: var(--color-primary);
    padding-top: 15px;
    text-align: center;
    font-size: 15px;
  }

  footer a {
    color: var(--color-bg);
  }

  .footer-logo {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 2rem;
    display: inline-block;
  }

  .permalinks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
    margin: 0 auto 2rem;
  }

  .footer-copyright {
    color: var(--color-bg);
  }
  @media only screen and (max-width: 768px) {
    height: 120px;
    footer {
      font-size: 12px;
    }
    .footer-logo {
      font-size: 15px;
      margin-bottom: 1rem;
    }

    .permalinks {
      gap: 2rem;
      margin: 0 auto 1rem;
    }
  }
`;
