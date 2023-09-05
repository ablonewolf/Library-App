import {ReviewModel} from "../models/entities/ReviewModel";
import {BaseURL} from "../models/constants/BaseURL";
import {ReviewsByBookIdURL} from "../models/constants/ReviewsByBookIdURL";

export const fetchReviewsByBookId = async(setReview: (reviews: ReviewModel[]) => void,
                                          setIsLoadingReview: (isLoadingReview: boolean)=> void,
                                          bookId?: number) => {
    let apiURL = ``;
    if (bookId) {
        apiURL = `${BaseURL}${ReviewsByBookIdURL}${bookId}`;
        const reviewResponses = await fetch(apiURL);
        if (!reviewResponses.ok) {
            throw new Error(`Something went wrong`);
        }
        const reviewResponsesJson = await reviewResponses.json();
        const responseData = reviewResponsesJson?._embedded?.reviews;
        const loadedReviews: ReviewModel[] = [];
        for (const key in responseData) {
            loadedReviews.push({
                id: responseData[key].id,
                userEmail: responseData[key].userEmail,
                date: responseData[key].date,
                rating: responseData[key].rating,
                bookId: bookId,
                reviewDescription: responseData[key].reviewDescription
            })
        }
        setReview(loadedReviews);
        setIsLoadingReview(false);
    }

}