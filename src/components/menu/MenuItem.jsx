import React from "react";

const MenuItem = ({ image, title, price }) => {
  return (
    <div className="flex gap-6 items-center">
      <img
        src={image}
        alt={title}
        className="w-20 h-20 rounded-xl object-cover"
      />

      <div className="flex-1 flex items-center">
        <p className="text-[#123a3d] text-lg">
          {title}
        </p>

        <div className="flex-1 border-b border-dotted border-[#123a3d]/40 mx-4" />

        <span className="text-[#123a3d] text-lg">
          {price}
        </span>
      </div>
    </div>
  );
};

export default MenuItem;