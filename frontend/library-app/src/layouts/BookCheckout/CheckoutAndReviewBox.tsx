import { BookModel } from "../../models/entities/BookModel";
import { Link } from "react-router-dom";
import { AuthState } from "@okta/okta-auth-js/lib/types/AuthState";
import { useEffect, useState } from "react";
import { checkOutBook } from "../../APIConsumMethods/checkOutBook";

export const CheckoutAndReviewBox: React.FC<{
  book: BookModel | undefined;
  mobile: boolean;
  currentBooksCheckoutCount: number;
  isBookCheckedOut: boolean;
  setIsBookCheckedOut: (isCheckedOut: boolean) => void;
  authState: AuthState | null;
  isReviewLeft: boolean;
}> = (props) => {
  const [buttonString, setButtonString] = useState("Sign In");
  const [isButtonDisabled, setIsButtonDisabled] = useState("");
  const defaultReviewText = "Sign in to Leave a Review.";
  const [reviewText, setReviewText] = useState("");

  const changeCheckOutButtonString = () => {
    if (props.authState?.isAuthenticated) {
      if (props.isBookCheckedOut) {
        setButtonString("Book Already Checked out. Enjoy");
        setIsButtonDisabled("disabled");
      } else if (props.currentBooksCheckoutCount === 5) {
        setButtonString("Too many books checked out.");
        setIsButtonDisabled("disabled");
      } else {
        setButtonString("Check out");
      }
    }
  };

  const changeReviewText = () => {
    if (props.authState?.isAuthenticated) {
      if (props.isReviewLeft) {
        setReviewText("Thanks for your review");
      } else {
        setReviewText("Please Leave a Review");
      }
    } else {
      setReviewText(defaultReviewText);
    }
  };

  useEffect(() => {
    changeCheckOutButtonString();
    changeReviewText();
  }, [
    props.authState,
    props.isBookCheckedOut,
    props.currentBooksCheckoutCount,
    buttonString,
    isButtonDisabled,
    props.isReviewLeft,
  ]);

  return (
    <div
      className={
        props.mobile ? "card d-flex mt-5" : "card col-3 container d-flex mb-5"
      }
    >
      <div className="card-body container">
        <div className="mt-3">
          <p>
            <b>{props.currentBooksCheckoutCount}/5</b> books checked out
          </p>
          <hr />
          {props.book &&
          props.book.copiesAvailable &&
          props.book.copiesAvailable > 0 ? (
            <h4 className="text-success">Available</h4>
          ) : (
            <h4 className="text-danger">Wait List</h4>
          )}
          <div className="row">
            <p className="col-6 lead">
              <b>{props.book?.copies} copies</b>
            </p>
            <p className="col-6 lead">
              <b>{props.book?.copiesAvailable} copies available</b>
            </p>
          </div>
        </div>
        <Link
          to="#"
          className={`btn btn-success btn-lg ${isButtonDisabled}`}
          onClick={() =>
            checkOutBook(
              props.authState,
              props.book?.id,
              props.setIsBookCheckedOut,
            )
          }
        >
          {buttonString}
        </Link>
        <hr />
        <p className="mt-3">
          This number can change until placing order is complete.
        </p>
        <p>{reviewText}</p>
      </div>
    </div>
  );
};
