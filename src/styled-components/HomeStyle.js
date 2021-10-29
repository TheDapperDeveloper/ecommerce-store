import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainImage = styled.img`
  height: 300px;
  width: 300px;
`;

export const SliderDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ExploreLink = styled(Link)`
  text-align: center;
  margin: auto;
  text-decoration: none;
  background-color: #004d40;
  background-image: -webkit-linear-gradient(bottom right, #65cfda, #00acea);
  color: #181818;
  border-radius: 20px;
  font-family: "Amatic SC", cursive;

  font-weight: bolder;
  font-size: 50px;
  margin-bottom: 5px;
  margin-top: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  width: 100px;
  &:hover {
    transform: scale(1.1);
  }
`;
