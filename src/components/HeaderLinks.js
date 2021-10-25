import React from "react";
import { HeaderLink } from "../styled-components/HeaderStyle";

export default function HeaderLinks(props) {
  return (
    <div>
      <HeaderLink to={props.linkData.path}>{props.linkData.name}</HeaderLink>
    </div>
  );
}
