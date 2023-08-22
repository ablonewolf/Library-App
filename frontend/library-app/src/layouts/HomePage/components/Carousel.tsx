import {BookComponent} from "./BookComponent";
import {ImageRenderComponent} from "./ImageRenderComponent";
import {useEffect, useState} from "react";
import {BookModel} from "../../../models/entities/BookModel";
import {SpinnerLoading} from "../../../utils/SpinnerLoading";
import {fetchBooks} from "../../../utils/fetchbooks";

export const Carousel = () => {

    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);


    useEffect(() => {
        fetchBooks(setBooks, setIsLoading, 9).catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, [])


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

    return (
        <div className='container mt-5' style={{height: 550}}>
            <div className='homepage-carousel-title'>
                <h3>
                    Find your next "I stayed up too late reading" book.
                </h3>
            </div>
            <div id='carouselExampleControls' className='carousel carousel-dark
                 slide mt-5 d-lg-block d-none' data-bs-interval='false'>

                {/*{For Desktop}*/}
                <div className='carousel-inner'>
                    {books.map((book, index) => (
                        index % 3 === 0 && (
                            <div className={index < 3 ? `carousel-item active` : 'carousel-item'} key={index}>
                                <div className='row d-flex justify-content-center align-items-center'>
                                    {books.slice(index, index + 3).map(book => (
                                        <BookComponent book={book} key={book.id}/>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                    <button className='carousel-control-prev' type='button'
                            data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Previous</span>
                    </button>
                    <button className='carousel-control-next' type='button'
                            data-bs-target='#carouselExampleControls' data-bs-slide='next'>
                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Next</span>
                    </button>
                </div>
            </div>

            {/*For Mobile*/}
            <div className='d-lg-none mt-3 mb-3'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <ImageRenderComponent
                        book={books[6]}
                    />
                </div>
                <div className='homepage-carousel-title mt-3'>
                    <a href="#" className='btn btn-outline-secondary btn-lg'>View More</a>
                </div>
            </div>
        </div>
    );
}