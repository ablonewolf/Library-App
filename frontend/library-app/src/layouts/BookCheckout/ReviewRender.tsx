import React from "react";
import { AuthState } from "@okta/okta-auth-js/lib/types/AuthState";
import { LeaveReview } from "../../utils/LeaveReview";

export const ReviewRender: React.FC<{
  authState: AuthState | null;
  isReviewLeft: boolean;
}> = (props: any) => {
  if (props.authState?.isAuthenticated && !props.isReviewLeft) {
    return (
      <p>
        <LeaveReview />
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
