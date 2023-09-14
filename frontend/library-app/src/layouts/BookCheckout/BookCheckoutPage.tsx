import {useEffect, useState} from "react";
import {BookModel} from "../../models/entities/BookModel";
import {fetchSingleBook} from "../../APIConsumMethods/fetchSingleBook";
import {SpinnerLoading} from "../../utils/SpinnerLoading";
import {CategoryMappings} from "../../models/constants/CategoryMappings";
import genericBookImg from '../../Images/BooksImages/book-1000.png';
import {StarsReview} from "../../utils/StarsReview";
import {CheckoutAndReviewBox} from "./CheckoutAndReviewBox";
import {ReviewModel} from "../../models/entities/ReviewModel";
import {fetchReviewsByBookId} from "../../APIConsumMethods/fetchReviewsByBookId";
import {LatestReviews} from "./LatestReviews";
import {useOktaAuth} from "@okta/okta-react";
import {fetchUserCurrentCheckoutBookCount} from "../../APIConsumMethods/fetchUserCurrentCheckoutBookCount";
import {checkIfBookCheckedOut} from "../../APIConsumMethods/checkIfBookCheckedOut";

export const BookCheckoutPage = () => {

    const {authState} = useOktaAuth();
    // books state
    const [book, setBook] = useState<BookModel>();
    const [isLoadingBook, setIsLoadingBook] = useState(true);
    const [httpError, setHttpError] = useState(null);
    // reviews state
    const [reviews, setReviews] = useState<ReviewModel[]>([]);
    const [isLoadingReviews, setIsLoadingReviews] = useState(true);
    const [averageRating, setAverageRating] = useState(0);
    // current book checkout state
    const [currentCheckoutBookCount, setCurrentCheckoutBookCount]
        = useState(0);
    const [isLoadingCurrentCheckoutBookCount, setIsLoadingCurrentCheckoutBookCount]
        = useState(true);
    // is the book checked out
    const [isBookCheckedOut, setIsBookCheckedOut] = useState(false);
    const [isLoadingBookCheckedOut, setIsLoadingBookCheckedOut] =
        useState(false);

    // grab the book ID from the URL
    const bookId = Number((window.location.pathname).split('/')[2]);


    // fetch a book by its id
    useEffect(() => {
        fetchSingleBook(
            setBook,
            setIsLoadingBook,
            bookId
        )
            .catch((error: any) => {
                setIsLoadingBook(false);
                setHttpError(error.message);
            })
    }, [bookId, isBookCheckedOut])

    // fetch reviews of a book by the book Id
    useEffect(() => {
        fetchReviewsByBookId(
            setReviews,
            setIsLoadingReviews,
            setAverageRating,
            bookId
        )
            .catch((error: any) => {
                setIsLoadingReviews(false);
                setHttpError(error.message);
            })
    }, [bookId]);

    // fetch current checkout books count
    useEffect(() => {
        fetchUserCurrentCheckoutBookCount(
            authState,
            setCurrentCheckoutBookCount,
            setIsLoadingCurrentCheckoutBookCount
        )
            .catch((error: any) => {
                setIsLoadingCurrentCheckoutBookCount(false);
                setHttpError(error.message);
            })
    }, [authState, isBookCheckedOut]);

    // check if the current book is checked out by the user
    useEffect(() => {
        checkIfBookCheckedOut(
            authState,
            setIsBookCheckedOut,
            setIsLoadingBookCheckedOut,
            bookId
        )
            .catch((error: any) => {
                setIsLoadingBookCheckedOut(false);
                setHttpError(error.message);
            })
    }, [authState, bookId, isBookCheckedOut]);
    if (isLoadingBook || isLoadingReviews || isLoadingCurrentCheckoutBookCount || isLoadingBookCheckedOut) {
        return (
            <SpinnerLoading/>
        );
    }

    if (httpError) {
        return (
            <div className='container m-5'>
                <p>
                    {httpError}
                </p>
            </div>
        )
    }

    return (
        <div>

            {/*for larger screens*/}
            <div className='container d-none d-lg-block'>
                <div className='row mt-5'>
                    <div className="col-md-2 col-sm-2">
                        {
                            book?.img ?
                                (
                                    <img
                                        src={book?.img}
                                        width='226'
                                        height='349'
                                        alt='book'
                                    />
                                ) :
                                (
                                    <img
                                        src={genericBookImg}
                                        width='226'
                                        height='349'
                                        alt='book'
                                    />
                                )
                        }
                    </div>
                    <div className='col-4 col-md-4 container'>
                        <div className="ml-2">
                            <h2>
                                {book?.title}
                            </h2>
                            <h5 className='text-primary'>
                                {book?.author}
                            </h5>
                            <h5 className='text-black'>
                                {`Book for ${CategoryMappings[book?.category?.toLowerCase() ?? 'Does not have a labelled category.']}`}
                            </h5>
                            <p className='lead'>
                                {book?.description}
                            </p>
                            <h3 className='d-inline-block text-black'>
                                Average Rating
                            </h3>
                            <StarsReview
                                rating={averageRating}
                                size={32}
                            />
                        </div>
                    </div>
                    <CheckoutAndReviewBox
                        book={book}
                        mobile={false}
                        currentBooksCheckoutCount={currentCheckoutBookCount}
                        isBookCheckedOut={isBookCheckedOut}
                        setIsBookCheckedOut={setIsBookCheckedOut}
                        authState={authState}
                    />
                </div>
                <hr/>
                <LatestReviews
                    reviews={reviews}
                    bookId={bookId}
                    mobile={false}
                />
            </div>

            {/*for mobile device*/}
            <div className='container d-lg-none mt-5'>
                <div className='d-flex justify-content-center align-items-center'>
                    {
                        book?.img ?
                            (
                                <img
                                    src={book?.img}
                                    width='226'
                                    height='349'
                                    alt='book'
                                />
                            ) :
                            (
                                <img
                                    src={genericBookImg}
                                    width='226'
                                    height='349'
                                    alt='book'
                                />
                            )
                    }
                </div>
                <div className='mt-4'>
                    <div className='ml-2'>
                        <h2>
                            {book?.title}
                        </h2>
                        <h5 className='text-primary'>
                            {book?.author}
                        </h5>
                        <p className='lead'>
                            {book?.description}
                        </p>
                        <h3 className='d-inline-block text-black'>
                            Average Rating
                        </h3>
                        <StarsReview
                            rating={averageRating}
                            size={32}
                        />
                    </div>
                </div>
                <CheckoutAndReviewBox
                    book={book}
                    mobile={true}
                    currentBooksCheckoutCount={currentCheckoutBookCount}
                    isBookCheckedOut={isBookCheckedOut}
                    setIsBookCheckedOut={setIsBookCheckedOut}
                    authState={authState}
                />
                <hr/>
                <LatestReviews
                    reviews={reviews}
                    bookId={bookId}
                    mobile={true}
                />
            </div>
        </div>
    );
}