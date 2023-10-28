import {useEffect, useState} from "react";
import {BookModel} from "../../models/entities/BookModel";
import {fetchBooks} from "../../APIConsumMethods/fetchBooks";
import {SpinnerLoading} from "../../utils/SpinnerLoading";
import {SearchBook} from "./components/SearchBook";
import {Pagination} from "../../utils/Pagination";
import {CategoryMappings} from "../../models/constants/CategoryMappings";
import {Link} from "react-router-dom";

export const SearchBooksPage = () => {

    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setBooksPerPage] = useState(2);
    const [totalAmountOfBooks, setTotalAmountOfBooks] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState('');
    const [searchUrl, setSearchUrl] = useState('');
    const [categorySelection, setCategorySelection] = useState('Book Category');

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
    }, [currentPage, searchUrl, booksPerPage])

    if (isLoading) {
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
    const indexOfLastBook: number = currentPage * booksPerPage;
    const indexOfFirstBook: number = indexOfLastBook - booksPerPage;
    let lastItem = booksPerPage * currentPage <= totalAmountOfBooks ?
                   booksPerPage * currentPage : totalAmountOfBooks;

    const handleChangeInSearchBox = () => {
        setCurrentPage(1);
        setBooksPerPage(2);
        if (search === '') {
            setSearchUrl('');
        } else {
            setSearchUrl(`/search/findBookByTitleContaining?title=${search}&page=<pageNumber>&size=${booksPerPage}`)
        }
        setCategorySelection('Book Category');
    }


    const handleCategorySelection = (value: string) => {
        setBooksPerPage(2);
        setCurrentPage(1);
        if (
            value.toLowerCase() === 'fe' ||
            value.toLowerCase() === 'be' ||
            value.toLowerCase() === 'devops' ||
            value.toLowerCase() === 'database' ||
            value.toLowerCase() === 'linux'
        ) {
            setCategorySelection(CategoryMappings[value]);
            setSearchUrl(`/search/findBookByCategory?category=${value}&page=<pageNumber>&size=${booksPerPage}`);
        } else {
            setCategorySelection('All');
            setSearchUrl(`?page=0&size=${booksPerPage}`);
        }
        setSearch('');

    }
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className='container'>
                <div>
                    <div className='row g-2 mt-5'>
                        <div className="col-md-6 col-sm-12">
                            <div className='d-flex'>
                                <input type="search"
                                       className="form-control me-2"
                                       placeholder='Search Books By Title'
                                       aria-labelledby='Search'
                                       onChange={e => setSearch(e.target.value)}
                                       value={search}
                                />
                                <button
                                    className='btn btn-outline-success'
                                    onClick={handleChangeInSearchBox}>
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12 d-flex justify-content-start'>
                            <div className='dropdown me-3'>
                                <button
                                    className='btn btn-secondary dropdown-toggle'
                                    type='button'
                                    id='dropdownMenuButton1'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                >
                                    {categorySelection}
                                </button>
                                <ul className="dropdown-menu"
                                    aria-labelledby='dropdownMenuButton1'>
                                    <li onClick={() => handleCategorySelection('All')}>
                                        <Link to='#' className="dropdown-item">
                                            ALL
                                        </Link>
                                    </li>
                                    <li onClick={() => handleCategorySelection('be')}>
                                        <Link to="#" className="dropdown-item">
                                            Back-End
                                        </Link>
                                    </li>
                                    <li onClick={() => handleCategorySelection('fe')}>
                                        <Link to="#" className="dropdown-item">
                                            Front-End
                                        </Link>
                                    </li>
                                    <li onClick={() => handleCategorySelection('database')}>
                                        <Link to="#" className="dropdown-item">
                                            Database
                                        </Link>
                                    </li>
                                    <li onClick={() => handleCategorySelection('devops')}>
                                        <Link to="#" className="dropdown-item">
                                            DevOps
                                        </Link>
                                    </li>
                                    <li onClick={() => handleCategorySelection('linux')}>
                                        <Link to="#" className="dropdown-item">
                                            Linux
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='dropdown'>
                                <button
                                    className='btn btn-secondary dropdown-toggle'
                                    type='button'
                                    id='dropdownMenuButton2'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                >
                                    Books Per Page: {booksPerPage}
                                </button>
                                <ul className="dropdown-menu"
                                    aria-labelledby='dropdownMenuButton2'>
                                    <li onClick={() => setBooksPerPage(2)}>
                                        <Link to='#' className="dropdown-item">
                                            2
                                        </Link>
                                    </li>
                                    <li onClick={() => setBooksPerPage(3)}>
                                        <Link to='#' className="dropdown-item">
                                            3
                                        </Link>
                                    </li>
                                    <li onClick={() => setBooksPerPage(4)}>
                                        <Link to="#" className="dropdown-item">
                                            4
                                        </Link>
                                    </li>
                                    <li onClick={() => setBooksPerPage(5)}>
                                        <Link to="#" className="dropdown-item">
                                            5
                                        </Link>
                                    </li>
                                    <li onClick={() => setBooksPerPage(6)}>
                                        <Link to="#" className="dropdown-item">
                                            6
                                        </Link>
                                    </li>
                                    <li onClick={() => setBooksPerPage(7)}>
                                        <Link to="#" className="dropdown-item">
                                            7
                                        </Link>
                                    </li>
                                    <li onClick={() => setBooksPerPage(8)}>
                                        <Link to="#" className="dropdown-item">
                                            8
                                        </Link>
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
                         <Link
                             to="/search"
                             type='button'
                             className='btn main-color btn-md px-4 me-md-2 fw-bold text-white'
                         >
                             Library Services
                         </Link>
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