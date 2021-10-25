import React from "react";
import { HeaderLink } from "../styled-components/HeaderStyle";

import { headerdata } from "./HeaderLinksData";

export default function Header(props) {
  return (
    <div>
      {headerdata?.map((linkData) => (
        <HeaderLink linkData={linkData} />
      ))}
    </div>
  );
}
