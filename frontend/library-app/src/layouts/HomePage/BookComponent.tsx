import {BookImage} from "../../Types/BookImage";

export const BookComponent = (bookImage: BookImage) => {
    return (
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='text-center'>
                <img
                    src={bookImage.source}
                    width='151'
                    height='233'
                    alt={bookImage.alt}
                />
                <h6 className="mt-2">Book</h6>
                <p>{bookImage.name}</p>
                <a href="#" className="btn main-color text-white">Reserve</a>
            </div>
        </div>
    );
}