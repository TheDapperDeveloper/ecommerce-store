import React from "react";
import InventoryContainer from "./InventoryContainer";

export default function Inventory(props) {
  return (
    <div>
      <InventoryContainer car={props.car} />
    </div>
  );
}
