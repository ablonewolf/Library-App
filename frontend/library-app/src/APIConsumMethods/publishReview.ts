import { AuthState } from "@okta/okta-auth-js/lib/types/AuthState";
import { BaseURL } from "../models/constants/BaseURL";
import { ReviewRequestModel } from "../models/entities/ReviewRequestModel";

export const publishReview = async (
  authState: AuthState | undefined,
  reviewRequest: ReviewRequestModel,
  setIsReviewLeft: (value: boolean) => void,
) => {
  if (
    authState?.isAuthenticated &&
    reviewRequest.bookId &&
    reviewRequest.rating
  ) {
    const apiURL = `${BaseURL}/reviews/secure/create`;
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authState.accessToken?.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewRequest),
    };
    const reviewRequestResponse = await fetch(apiURL, requestOptions);
    if (!reviewRequestResponse.ok) {
      throw new Error("Error checking out book.");
    }
    setIsReviewLeft(true);
  }
};
