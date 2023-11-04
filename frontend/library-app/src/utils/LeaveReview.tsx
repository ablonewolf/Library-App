import React, { useState } from "react";
import { ReviewChoice } from "./ReviewChoice";
import { StarsReview } from "./StarsReview";
import { publishReview } from "../APIConsumMethods/publishReview";
import { ReviewRequestModel } from "../models/entities/ReviewRequestModel";
import { AuthState } from "@okta/okta-auth-js/lib/types/AuthState";

export const LeaveReview: React.FC<{
  authState: AuthState | undefined;
  bookId: number | undefined;
  setIsReviewLeft: (value: boolean) => void;
}> = (props) => {
  const [starInput, setStarInput] = useState(0);
  const [displayInput, setDisplayInput] = useState(false);
  const [reviewDescription, setReviewDescription] = useState("");

  const starValue = (value: number) => {
    setStarInput(value);
    setDisplayInput(true);
  };
  const options = [];
  for (let index = 0; index <= 5; index += 0.5) {
    options.push(
      <li>
        <ReviewChoice value={index} starValue={starValue} />
      </li>,
    );
  }
  const reviewRequest: ReviewRequestModel = {
    rating: starInput,
    bookId: props.bookId,
    description: reviewDescription,
  };
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
      {displayInput && (
        <form method="POST" action="#">
          <hr />
          <div className="mb-3">
            <label className="form-label" htmlFor="submitReviewDescription">
              Description
            </label>
            <textarea
              id="submitReviewDescription"
              rows={3}
              placeholder={`Optional`}
              className="form-control"
              onChange={(e) => setReviewDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button
              type="button"
              onClick={() =>
                publishReview(
                  props.authState,
                  reviewRequest,
                  props.setIsReviewLeft,
                )
              }
              className="btn btn-primary mt-3"
            >
              Submit Review
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
