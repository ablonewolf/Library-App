import { ReviewModel } from "../models/entities/ReviewModel";
import { BaseURL } from "../models/constants/BaseURL";
import { ReviewsByBookIdURL } from "../models/constants/ReviewsByBookIdURL";

export const fetchReviewsByBookId = async (
  setReviews: (reviews: ReviewModel[]) => void,
  setIsLoadingReview: (isLoadingReview: boolean) => void,
  setAverageRating: (averageRating: number) => void,
  bookId?: number,
) => {
  let apiURL = ``;
  if (bookId) {
    apiURL = `${BaseURL}${ReviewsByBookIdURL}${bookId}`;
    const reviewResponses = await fetch(apiURL);
    if (!reviewResponses.ok) {
      throw new Error(`Something went wrong fetching reviews of this book.`);
    }
    const reviewResponsesJson = await reviewResponses.json();
    const responseData = reviewResponsesJson?.content;
    let totalRating = 0;
    const loadedReviews: ReviewModel[] = [];
    for (const key in responseData) {
      loadedReviews.push({
        id: responseData[key].id,
        userEmail: responseData[key].userEmail,
        date: responseData[key].date,
        rating: responseData[key].rating,
        bookId: bookId,
        reviewDescription: responseData[key].reviewDescription,
      });
      totalRating += responseData[key].rating;
    }
    const avgRating = totalRating / loadedReviews.length;
    setReviews(loadedReviews);
    setIsLoadingReview(false);
    setAverageRating(avgRating);
  }
};
