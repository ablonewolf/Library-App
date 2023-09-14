import {BookModel} from "../../models/entities/BookModel";
import {Link} from "react-router-dom";
import {AuthState} from "@okta/okta-auth-js/lib/types/AuthState"
import {useEffect, useState} from "react";

export const CheckoutAndReviewBox: React.FC<{
    book: BookModel | undefined,
    mobile: boolean,
    currentBooksCheckoutCount: number,
    isBookCheckedOut: boolean,
    authState: AuthState | null
}> = (props) => {
    const [buttonString, setButtonString] = useState("Sign in")
    const [isButtonDisabled, setIsButtonDisabled] = useState("");
    const changeCheckOutButtonString = () => {
        if (props.authState?.isAuthenticated) {
            if (props.isBookCheckedOut) {
                setButtonString("Book Already Checked out. Enjoy");
                setIsButtonDisabled("disabled")
            } else if (props.currentBooksCheckoutCount === 5) {
                setButtonString("Too many books checked out.");
                setIsButtonDisabled("disabled")
            } else {
                setButtonString("Check out");
            }
        }
    }
    useEffect(() => {
        changeCheckOutButtonString();
    }, [props, buttonString, isButtonDisabled]);

    return (
        <div className={props.mobile ? 'card d-flex mt-5' : 'card col-3 container d-flex mb-5'}>
            <div className='card-body container'>
                <div className='mt-3'>
                    <p>
                        <b>
                            {props.currentBooksCheckoutCount}/5
                        </b> books checked out

                    </p>
                    <hr/>
                    {
                        props.book && props.book.copiesAvailable && props.book.copiesAvailable > 0 ?
                            <h4 className='text-success'>
                                Available
                            </h4>
                            :
                            <h4 className='text-danger'>
                                Wait List
                            </h4>
                    }
                    <div className='row'>
                        <p className='col-6 lead'>
                            <b>
                                {props.book?.copies} copies
                            </b>
                        </p>
                        <p className='col-6 lead'>
                            <b>
                                {props.book?.copiesAvailable} copies available
                            </b>
                        </p>
                    </div>
                </div>
                <Link to="#" className={`btn btn-success btn-lg ${isButtonDisabled}`}>
                    {buttonString}
                </Link>
                <hr/>
                <p className='mt-3'>
                    This number can change until placing order is complete.
                </p>
                <p>
                    Sign in to leave a review.
                </p>
            </div>
        </div>
    )
}