import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  background-color: var(--verde);
  height: 80px;
  

  img {
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom: var(--cinza-700) 2px solid;
    z-index:2;
  }
  @media only screen and (max-width: 768px) {
      img {
      width:120px ;
    }
    height: 90px;
  }


`;
