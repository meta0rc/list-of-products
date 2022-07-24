import styled from "styled-components";

export const ContainerProducts = styled.div`
  max-width: 1920px;
  margin: 25px auto;
`;
export const ContainerList = styled.div`
  max-width: 1920px;
  margin: 0 5%;
`;
export const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
export const Headding = styled.h1`
  margin-right: 50px;

  media(max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`

export const HeaderProducts = styled.div`
  display: flex;
  margin: 2% 9%;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
