import {BookModel} from "../../models/entities/BookModel";
import {Link} from "react-router-dom";
import {AuthState} from "@okta/okta-auth-js/lib/types/AuthState"

export const CheckoutAndReviewBox: React.FC<{
    book: BookModel | undefined,
    mobile: boolean,
    currentBooksCheckoutCount: number,
    authState: AuthState | null
}> = (props) => {
    console.log(props.currentBooksCheckoutCount);
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
                {props.authState?.isAuthenticated ?
                    (
                        <Link to='#' className='btn btn-success btn-lg'>
                            Check Out
                        </Link>
                    ) :
                    (
                        <Link to='#' className='btn btn-success btn-lg'>
                            Sign in
                        </Link>
                    )
                }
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