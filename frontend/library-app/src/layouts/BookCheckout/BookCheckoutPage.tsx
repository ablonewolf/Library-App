import {useEffect, useState} from "react";
import {BookModel} from "../../models/entities/BookModel";
import {fetchSingleBook} from "../../APIConsumMethods/fetchSingleBook";
import {SpinnerLoading} from "../../utils/SpinnerLoading";

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
            {book ?
                (
                    <>
                        <h3 className='text-center'>
                            Name of the book : {book?.title}
                        </h3>
                        <p className='text-center'>
                            Write of the book: <b>{book.author}</b> <br/>
                            Copies available: <b>{book.copiesAvailable}</b> <br/>
                            Category of the book: <b>{book.category}</b> <br/>
                        </p>
                    </>

                ) :
                (
                    <>
                    </>
                )
            }

        </div>
    );
}