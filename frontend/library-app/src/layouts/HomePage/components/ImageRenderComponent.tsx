import React from "react";
import {BookModel} from "../../../models/entities/BookModel";
import genericBookImage from "../../../Images/BooksImages/book-1000.png";

export const ImageRenderComponent: React.FC<{ book: BookModel, width: string, height: string }> = (props) => {
    return (
        <>
            {props.book.img ?
             (
                 <img
                     src={props.book.img}
                     width={props.width}
                     height={props.height}
                     alt='Book'
                 />
             )
                            :
             (
                 <img src={genericBookImage}
                      width={props.width}
                      height={props.height}
                      alt='Book'
                 />
             )
            }
        </>

    );
}