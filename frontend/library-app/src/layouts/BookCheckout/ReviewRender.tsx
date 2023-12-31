import React from "react";
import { AuthState } from "@okta/okta-auth-js/lib/types/AuthState";
import { LeaveReview } from "../../utils/LeaveReview";

export const ReviewRender: React.FC<{
  authState: AuthState | null;
  bookId: number | undefined;
  isReviewLeft: boolean;
  setIsReviewLeft: (value: boolean) => void;
}> = (props: any) => {
  if (props.authState?.isAuthenticated && !props.isReviewLeft) {
    return (
      <p>
        <LeaveReview
          authState={props.authState}
          bookId={props.bookId}
          setIsReviewLeft={props.setIsReviewLeft}
        />
      </p>
    );
  } else if (props.authState?.isAuthenticated && props.isReviewLeft) {
    return (
      <p>
        <b>Thanks for your review!</b>
      </p>
    );
  } else {
    return (
      <div>
        <hr />
        <p>Sign in to leave a review</p>
      </div>
    );
  }
};
