import {useState, useEffect} from "react";
import {BookModel} from "../../models/entities/BookModel";
import {fetchBooks} from "../../utils/fetchbooks";
import {SpinnerLoading} from "../../utils/SpinnerLoading";
import {SearchBook} from "./components/SearchBook";

export const SearchBooksPage = () => {

    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        fetchBooks(setBooks, setIsLoading, 5).catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, [])

    if (isLoading) {
        return (
            <SpinnerLoading/>
        );
    }
    console.log(books)
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
            <div className='container'>
                <div>
                    <div className='row mt-5'>
                        <div className="col-6">
                            <div className='d-flex'>
                                <input type="search"
                                       className="form-control me-2"
                                       placeholder='Search'
                                       aria-labelledby='Search'
                                />
                                <button className='btn btn-outline-success'>
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='dropdown'>
                                <button className='btn btn-secondary dropdown-toggle'
                                        type='button'
                                        id='dropdownMenuButton1'
                                        data-bs-toggle='dropdown'
                                        aria-expanded='false'
                                >
                                    Category
                                </button>
                                <ul className="dropdown-menu"
                                    aria-labelledby='dropdownMenuButton1'>
                                    <li>
                                        <a href='#' className="dropdown-item">
                                            ALL
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item">
                                            Back-End
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item">
                                            Front-End
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item">
                                            Database
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item">
                                            DevOps
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h5>Number of results:{books.length}</h5>
                    </div>
                    <p>
                        1 to 5 of 22 items:
                    </p>
                    {books.map(book => (
                        <SearchBook book={book} key={book.id}/>
                    ))}
                </div>
            </div>
        </div>
    );
}