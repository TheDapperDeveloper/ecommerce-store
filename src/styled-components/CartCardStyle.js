import styled from "styled-components";

export const RemoveFromCartButton = styled.button`
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

export const AddSubtractButton = styled.button`
  text-align: center;
  margin: 5px;
  height: 40px;
  width: 40px;
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