import styled from "styled-components";

export const Container = styled.div`
  height: 165px;
  align-content: center;
  text-align: center;
  background-color: var(--verde-500);
  img {
    height: 165px;
    align-content: center;
  }
  img:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;
