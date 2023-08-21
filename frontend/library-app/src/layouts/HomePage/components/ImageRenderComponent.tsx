import React from "react";
import {BookModel} from "../../../models/entities/BookModel";

export const ImageRenderComponent: React.FC<{ book: BookModel }> = (props) => {
    return (
        <div className='text-center'>
            {props.book.img ?
                (<img
                    src={props.book.img}
                    width='151'
                    height='233'
                    alt={props.book.title}
                />)
                : (<> </>)}

            <h6 className="mt-2">{props.book.title}</h6>
            <p>{props.book.author}</p>
            <a href="#" className="btn main-color text-white">Reserve</a>
        </div>
    )
}