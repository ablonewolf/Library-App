import {BookDetailsComponent} from "./BookDetailsComponent";
import React from "react";
import {BookModel} from "../../../models/entities/BookModel";

export const BookComponent: React.FC<{ book: BookModel }> = (props) => {
    return (
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <BookDetailsComponent
                book={props.book}
            />
        </div>
    );
}