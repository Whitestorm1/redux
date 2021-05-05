import React from "react";
import GenericBtn from "./genericBtn.tsx";

const GenBtn = ({ label, color, height, radius, width }) => {
  return (
    <GenericBtn
      style={{
        backgroundColor: color,

        borderRadius: radius,
        height,
        width,
        label,
      }}
    >
      {label}
      {label}
      {label}
    </GenericBtn>
    
  );
};

export default GenBtn;
