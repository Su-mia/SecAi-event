import React from "react";

export default function FogEffect({ size, color, coordinates }) {
  const styles = {
    width: `${size}rem`,
    height: `${size}rem`,
    top: `${coordinates.top}rem`,
    right: `${coordinates.right}rem`,
    bottom: `${coordinates.bottom}rem`,
    left: `${coordinates.left}rem`,
    background: `radial-gradient(circle, ${
      color === "blue" ? "#1673FF" : "#3E0854"
    }  0%, transparent 50%, transparent 100%)`,
  };
  return (
    <div
      className={`animate-pulse opacity-60 overflow-visible`}
      style={styles}
    ></div>
  );
}




