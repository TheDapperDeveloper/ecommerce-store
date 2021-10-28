import React from "react";
import { Link } from "react-router-dom";
import { SiteTitle } from "../styled-components/HeaderStyle";
import HeaderLinks from "./HeaderLinks";

import { headerdata } from "./HeaderLinksData";

export default function Header(props) {
  return (
    <div>
      <SiteTitle>The Shop</SiteTitle>
      {headerdata?.map((linkData) => (
        <HeaderLinks linkData={linkData} />
      ))}
    </div>
  );
}
