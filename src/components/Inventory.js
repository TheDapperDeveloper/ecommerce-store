import React from "react";

import InventoryContainer from "./InventoryContainer";

export default function Inventory(props) {
  return (
    <div>
      <InventoryContainer carInfo={props.carInfo} />
    </div>
  );
}
