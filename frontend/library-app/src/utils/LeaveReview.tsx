import React, { useState } from "react";
import { ReviewChoice } from "./ReviewChoice";
import { StarsReview } from "./StarsReview";

export const LeaveReview: React.FC<{}> = (props) => {
  const [starInput, setStarInput] = useState(0);

  const starValue = (value: number) => {
    setStarInput(value);
  };
  const options = [];
  for (let index = 0; index <= 5; index += 0.5) {
    options.push(
      <li>
        <ReviewChoice value={index} starValue={starValue} />
      </li>,
    );
  }
  return (
    <div className="dropdown" style={{ cursor: "pointer" }}>
      <h5
        className="dropdown-toggle"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
      >
        Leave a Review?
      </h5>
      <ul
        id="submitReviewRating"
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton1"
      >
        {options}
      </ul>
      <StarsReview rating={starInput} size={32} />
    </div>
  );
};
