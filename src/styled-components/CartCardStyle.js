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
  font-weight: bolder;
  font-family: "Amatic SC", cursive;
  font-size: 20px;
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

  font-weight: bolder;
  margin-bottom: 5px;
  margin-top: 10px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SubTitle = styled.h3`
  padding: 20px;
  font-size: 35px;
`;

export const SubTitleDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const EmptyCartDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const CartCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  @media only screen and (device-width: 1024px) and (device-height: 1366px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const CardDisplay = styled.div`
  background-color: #49327a;
  text-align: center;
  border-radius: 10px;
  color: #65cfda;

  margin-bottom: 50px;
  @media only screen and (device-width: 1024px) and (device-height: 1366px) {
    background-color: #49327a;
    text-align: center;
    border-radius: 10px;
    color: #65cfda;

    margin-bottom: 50px;
  }
  @media only screen and (device-width: 375px) and (device-height: 812px) {
    background-color: #49327a;
    text-align: center;
    border-radius: 10px;
    color: #65cfda;

    margin-bottom: 50px;
  }
`;

export const EmptyCartImage = styled.img`
  @media only screen and (device-width: 375px) and (device-height: 812px) {
    height: 300px;
    width: 300px;
  }
`;
