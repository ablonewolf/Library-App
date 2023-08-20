import {BookImage} from "../../Types/BookImage";
import {ImageRenderComponent} from "./ImageRenderComponent";

export const BookComponent = (bookImage: BookImage) => {
    return (
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <ImageRenderComponent
                source={bookImage.source}
                alt={bookImage.alt}
                name={bookImage.name}
            />
        </div>
    );
}