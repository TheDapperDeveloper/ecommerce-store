import React from "react";
import { Link } from "react-router-dom";
import { HeaderLink } from "../styled-components/HeaderStyle";

export default function HeaderLinks(props) {
  return (
    <div>
      <div>
        <HeaderLink to={props.linkData.path}>{props.linkData.name}</HeaderLink>
        <img src={props.linkData.image} alt="" />
      </div>
    </div>
  );
}
