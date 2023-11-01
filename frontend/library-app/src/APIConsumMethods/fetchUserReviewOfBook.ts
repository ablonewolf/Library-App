import {AuthState} from "@okta/okta-auth-js/lib/types/AuthState";
import {BaseURL} from "../models/constants/BaseURL";
import {userReviewOfBook} from "../models/constants/UserReviewOfBook";

export const fetchUserReviewOfBook = async (
    authState: AuthState | null,
    bookId: number | undefined,
    setIsReviewLeft: (isReviewLeft: boolean) => void,
    setIsLoadingUserReview: (isLoadingUserReview: boolean) => void
) => {
    if (authState?.isAuthenticated && bookId) {
        const url = `${BaseURL}${userReviewOfBook}${bookId}`;
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authState.accessToken?.accessToken}`,
                'Content-Type': 'application/json'
            }
        }
        const userReview = await fetch(url, requestOptions);
        if (!userReview.ok) {
            throw new Error('Something went wrong');
        }

        const userReviewResponse = await userReview.json();
        setIsReviewLeft(userReviewResponse);
    }
    setIsLoadingUserReview(false);
}