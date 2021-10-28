import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Cards = styled.div`
  background-color: #49327a;
  text-align: center;
  border-radius: 10px;
  color: #65cfda;
  font-family: "Changa", sans-serif;
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

  font-family: "Noto Sans Display", sans-serif;
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
