import {BookComponent} from "./BookComponent";
import pythonBookImage from '../../Images/BooksImages/book-1000.png';
import cSharpBookImage from '../../Images/BooksImages/new-book-1.png';
import machineLearningBookImage from '../../Images/BooksImages/new-book-2.png';
import {ImageRenderComponent} from "./ImageRenderComponent";

export const Carousel = () => {

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
                    <div className='carousel-item active'>
                        <div className='row d-flex justify-content-center
                            align-items-center'>
                            <BookComponent source={pythonBookImage} alt={'Python Book'}
                                           name={'Crash Course in Python'}/>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center
                            align-items-center'>
                            <BookComponent source={cSharpBookImage} alt={'C# Book'}
                                           name={'Advanced Techniques in C#'}/>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center
                            align-items-center'>
                            <BookComponent source={machineLearningBookImage} alt={'Machine Learning Book'}
                                           name={'The Expert Guide to Machine Learning'}/>
                        </div>
                    </div>
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
                        source={pythonBookImage}
                        alt={'Python Book'}
                        name={'Python Crash Course'}
                    />
                </div>
                <div className='homepage-carousel-title mt-3'>
                    <a href="#" className='btn btn-outline-secondary btn-lg'>View More</a>
                </div>
            </div>
        </div>
    );
}