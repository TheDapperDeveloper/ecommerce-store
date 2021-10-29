import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderDiv,
  HeaderIcons,
  HeaderLink,
} from "../styled-components/HeaderStyle";

export default function HeaderLinks(props) {
  return (
    <div>
      <HeaderDiv>
        <HeaderLink to={props.linkData.path}>{props.linkData.name}</HeaderLink>
        <HeaderIcons src={props.linkData.image} alt="" />
      </HeaderDiv>
      {/* <a href={props.linkData.path}>
          <HeaderIcons src={props.linkData.image} alt="" />
        </a>
      
      <Link to={props.linkData.path} /> */}
    </div>
  );
}
