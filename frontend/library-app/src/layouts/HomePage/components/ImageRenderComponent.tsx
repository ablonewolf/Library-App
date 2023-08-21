import {BookImage} from "../../../models/Types/BookImage";

export const ImageRenderComponent = (bookImage: BookImage) => {
    return (
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
    )
}