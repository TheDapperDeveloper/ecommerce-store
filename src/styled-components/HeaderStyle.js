import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderLink = styled(Link)`
  list-style-type: none;
  margin: 0;
  margin-bottom: 50px;
  margin-top: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
  font-family: "Noto Sans Display", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 10%;
  &:hover {
    transform: scale(1.1);
  }
  @media only screen and (device-width: 1024px) and (device-height: 1366px) {
    list-style-type: none;
    margin: 0;
    margin-bottom: 50px;
    margin-top: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-decoration: none;
    font-family: "Noto Sans Display", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 100%;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    list-style-type: none;
    margin: 0;
    margin-bottom: 50px;
    margin-top: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-decoration: none;
    font-family: "Noto Sans Display", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 100%;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const HeaderIcons = styled.img`
  width: 100px;
  height: 100px;
`;

export const TitleIcon = styled.img`
  width: 100px;
  height: 100px;
`;

export const SiteTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 100px;
  margin-right: 10px;
`;

export const LinkTitle = styled.p`
  display: flex;
  justify-content: center;
  font-size: 25px;
  text-decoration: none;
`;

export const LogoTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: black solid 2px;
`;
