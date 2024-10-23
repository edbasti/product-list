import React from "react";

interface ProgressBarProps {
    bgColor: string;
    progress: number
}

const ProgressBar = ({ bgColor, progress }: ProgressBarProps) => {
  const containerStyles = {
    height: 8,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 2,
  };

  const fillerStyles = {
    height: "100%",
    width: `${progress * 100}%`,
    backgroundColor: bgColor,
    borderRadius: "inherit",
    textAlign: "right" as const
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold"
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};

export default ProgressBar;
