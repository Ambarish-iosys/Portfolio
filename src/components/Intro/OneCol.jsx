import React from "react";

const OneCol = ({ title, subtitle, desc }) => {
  return (
    <div className="one__col">
      <h3 className="sub-title">{subtitle}</h3>
      <h3 className="title">{title}</h3>
      <p className="desc">{desc}</p>
    </div>
  );
};

export default OneCol;
