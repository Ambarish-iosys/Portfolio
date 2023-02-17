import React from "react";

const OneCol = ({ title, subtitle, desc }) => {
  return (
    <div className="one__col">
      <h2 className="sub-title">{subtitle}</h2>
      <h1 className="title">{title}</h1>
      <p className="desc">{desc}</p>
    </div>
  );
};

export default OneCol;
