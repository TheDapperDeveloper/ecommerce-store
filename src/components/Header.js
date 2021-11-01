import React from "react";

import {
  SiteTitle,
  TitleIcon,
  LogoTitle,
} from "../styled-components/HeaderStyle";
import logoicon from "../styled-components/traffic-jam.png";

export default function Header() {
  return (
    <LogoTitle>
      <SiteTitle>The Shop</SiteTitle>
      <TitleIcon src={logoicon} alt="" />
    </LogoTitle>
  );
}
