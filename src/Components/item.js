import React from "react";

export const Item = (item) => {
  return (
    <div className="item-card">
      <img src={item.item} alt="" srcset="" width="100%" />
    </div>
  );
};
