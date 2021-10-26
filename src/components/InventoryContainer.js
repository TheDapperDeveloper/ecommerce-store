import React from "react";
import InventoryCards from "./InventoryCards";
import { useSelector } from "react-redux";
import { CardContainer } from "../styled-components/InventoryCardContainerStyle";
import { Cards } from "../styled-components/InventoryCardContainerStyle";

export default function InventoryContainer(props) {
  return (
    <div>
      <CardContainer>
        {props.carInfo.map((car) => (
          <InventoryCards cars={car} />
        ))}
      </CardContainer>
    </div>
  );
}
