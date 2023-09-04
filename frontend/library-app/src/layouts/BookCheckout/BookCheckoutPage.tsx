import {useEffect, useState} from "react";
import {BookModel} from "../../models/entities/BookModel";
import {fetchSingleBook} from "../../APIConsumMethods/fetchSingleBook";
import {SpinnerLoading} from "../../utils/SpinnerLoading";
import {CategoryMappings} from "../../models/constants/CategoryMappings";
import genericBookImg from '../../Images/BooksImages/book-1000.png';
import {StarsReview} from "../../utils/StarsReview";

export const BookCheckoutPage = () => {

    const [book, setBook] = useState<BookModel>();
    const [isLoadingBook, setIsLoadingBook] = useState(true);
    const [httpError, setHttpError] = useState(null);

    // grab the book ID from the URL
    const bookId = Number((window.location.pathname).split('/')[2]);
    console.log(bookId);

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
    }, [bookId])
    if (isLoadingBook) {
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
            <div className='container d-none d-lg-block'>
                <div className='row mt-5'>
                    <div className="col-md-2">
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
                    <div className='col-4 container'>
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
                            <StarsReview
                                rating={4}
                                size={32}
                            />
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
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
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    );
}