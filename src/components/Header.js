import React from "react";
import { Link } from "react-router-dom";
import HeaderLinks from "./HeaderLinks";

import { headerdata } from "./HeaderLinksData";

export default function Header(props) {
  return (
    <div>
      {headerdata?.map((linkData) => (
        <HeaderLinks linkData={linkData} />
      ))}
    </div>
  );
}
