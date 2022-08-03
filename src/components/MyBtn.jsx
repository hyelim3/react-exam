import React from "react";

const MyBtn = ({ text, fontSize, isChecked, alertMsg, padding }) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "skyblue",
          color: "white",
          padding: `${padding}`,
          border: 0,
          borderRadius: 10,
          margin: "10px",
          fontSize: `${fontSize}`,
          textDecoration: isChecked ? "line-through" : "none",
        }}
        onClick={() => {
          alert(alertMsg);
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default MyBtn;
