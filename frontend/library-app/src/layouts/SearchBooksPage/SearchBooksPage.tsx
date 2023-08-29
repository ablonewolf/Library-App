import {useState, useEffect} from "react";
import {BookModel} from "../../models/entities/BookModel";
import {fetchBooks} from "../../utils/fetchBooks";
import {SpinnerLoading} from "../../utils/SpinnerLoading";
import {SearchBook} from "./components/SearchBook";
import {Pagination} from "../../utils/Pagination";

export const SearchBooksPage = () => {

    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(5);
    const [totalAmountOfBooks, setTotalAmountOfBooks] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState('');
    const [searchUrl, setSearchUrl] = useState('');

    useEffect(() => {
        fetchBooks(
            setBooks,
            setIsLoading,
            booksPerPage,
            currentPage - 1,
            setTotalAmountOfBooks,
            setTotalPages,
            searchUrl
        )
            .catch((error: any) => {
                setIsLoading(false);
                setHttpError(error.message);
            })
        window.scrollTo(0, 0);
    }, [currentPage, searchUrl])

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
    const indexOfLastBook: number = currentPage * booksPerPage;
    const indexOfFirstBook: number = indexOfLastBook - booksPerPage;
    let lastItem = booksPerPage * currentPage <= totalAmountOfBooks ?
        booksPerPage * currentPage : totalAmountOfBooks;

    const handleChangeInSearchBox = () => {
        if (search === '') {
            setSearchUrl('');
        } else {
            setSearchUrl(`/search/findBookByTitleContaining?title=${search}&page=0&size=${booksPerPage}`)
        }
    }
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
                                       onChange={e => setSearch(e.target.value)}
                                />
                                <button
                                    className='btn btn-outline-success'
                                    onClick={handleChangeInSearchBox}>
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
                    {totalAmountOfBooks > 0 ?
                        <>
                            <div className="mt-3">
                                <h5>
                                    Number of results: {totalAmountOfBooks}
                                </h5>
                            </div>
                            <p>
                                {indexOfFirstBook + 1} to {lastItem} out of {totalAmountOfBooks} items:
                            </p>
                            {books.map((book, index) => (
                                <SearchBook
                                    book={book}
                                    key={index}
                                />
                            ))}
                        </>
                        :
                        <div className='m-5'>
                            <h3>
                                Can't find what you are looking for
                            </h3>
                            <a
                                href="#"
                                type='button'
                                className='btn main-color btn-md px-4 me-md-2 fw-bold text-white'
                            >
                                Library Services
                            </a>
                        </div>
                    }

                    {totalPages > 1 &&
                        <Pagination
                            currentPage={currentPage}
                            totalPage={totalPages}
                            paginate={paginate}
                        />
                    }
                </div>
            </div>
        </div>
    );
}