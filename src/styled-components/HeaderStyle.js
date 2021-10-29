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
  justify-content: center;
  text-decoration: none;
  width: 100%;
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

export const SiteTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 100px;
`;
