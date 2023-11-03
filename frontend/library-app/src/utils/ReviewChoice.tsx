import React from "react";

export const ReviewChoice: React.FC<{
  value: number;
  starValue: (value: number) => void;
}> = (props) => {
  return (
    <button
      onClick={() => props.starValue(props.value)}
      className="dropdown-item"
    >
      {props.value} {props.value > 1 ? "stars" : "star"}
    </button>
  );
};
