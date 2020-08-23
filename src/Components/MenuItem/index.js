import React from "react";
import "./index.scss";
const MenuItem = (props) => {
  const { title, imageUrl, size } = props;
  return (
    <div className={`${size} menuItem`}>
      <div
      className="backgroundImage"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <span className="subTitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
