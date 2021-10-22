import React from "react";

const LifePath = (props) => {
  const { pathNumber, title, description } = props;
  return (
    <div
      style={{
        padding: "1em 2em",
        margin: "2em 4em",
        backgroundColor: "white",
        borderRadius: "10px",
      }}
    >
      <h1>{pathNumber}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default LifePath;
