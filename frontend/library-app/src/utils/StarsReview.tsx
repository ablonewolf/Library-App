import React from "react";
import { FullStar } from "./stars/FullStar";
import { HalfStar } from "./stars/HalfStar";
import { EmptyStar } from "./stars/EmptyStar";

export const StarsReview: React.FC<{ rating: number; size: number }> = (
  props,
) => {
  let fullStars = Math.floor(props.rating);
  const fractionValue = props.rating - fullStars;
  let halfStars = 0;
  let emptyStars = 5 - Math.ceil(props.rating);
  if (fractionValue > 0) {
    if (fractionValue > 0.25 && fractionValue < 0.75) {
      halfStars = 1;
    } else if (fractionValue >= 0.75) {
      fullStars += 1;
    } else {
      emptyStars += 1;
    }
  }

  return (
    <div>
      {Array.from({ length: fullStars }, (_, i) => (
        <FullStar key={i} size={props.size} />
      ))}
      {halfStars > 0 ? <HalfStar size={props.size} /> : <></>}
      {Array.from({ length: emptyStars }, (_, i) => (
        <EmptyStar key={i} size={props.size} />
      ))}
    </div>
  );
};
