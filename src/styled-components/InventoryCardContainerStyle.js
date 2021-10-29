import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  grid-template-rows: repeat(5, 550px);
  grid-gap: 100px;
  justify-content: space-evenly;
  @media only screen and (device-width: 1024px) and (device-height: 1366px) {
    display: grid;
    grid-template-columns: repeat(2, 300px);
    grid-template-rows: repeat(5, 550px);
    grid-gap: 100px;
    justify-content: space-evenly;
  }
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Cards = styled.div`
  background-color: #49327a;
  text-align: center;
  border-radius: 10px;
  color: #65cfda;
  font-family: "Amatic SC", cursive;
  font-size: 20px;

  margin-bottom: 50px;
`;

export const Images = styled.img`
  width: 290px;
  height: 300px;
`;

export const AddToCartButton = styled.button`
  text-align: center;
  margin: auto;
  height: 40px;
  width: 150px;
  background-color: #004d40;
  background-image: -webkit-linear-gradient(bottom right, #65cfda, #00acea);
  border: none;
  color: #181818;
  border-radius: 20px;

  font-family: "Amatic SC", cursive;
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 5px;
  margin-top: 10px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SubTitle = styled.h3`
  padding: 20px;
`;
