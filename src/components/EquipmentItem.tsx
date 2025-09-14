import React from "react";
import { EquipmentData } from "../types";

interface EquipmentItemProps {
  equipment: EquipmentData;
}

const EquipmentItem: React.FC<EquipmentItemProps> = ({ equipment }) => {
  return (
    <div className="equipment-item">
      {equipment.name}
      <span className="equipment-tooltip">{equipment.tooltip}</span>
    </div>
  );
};

export default EquipmentItem;
