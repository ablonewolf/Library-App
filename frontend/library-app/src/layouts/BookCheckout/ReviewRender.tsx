import React from "react";
import { AuthState } from "@okta/okta-auth-js/lib/types/AuthState";

export const ReviewRender: React.FC<{
  authState: AuthState | null;
  isReviewLeft: boolean;
}> = (props: any) => {
  if (props.authState?.isAuthenticated && !props.isReviewLeft) {
    return <p>Leave a Review Here.</p>;
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
