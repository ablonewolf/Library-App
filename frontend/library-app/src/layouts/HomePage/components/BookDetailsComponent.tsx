import React from "react";
import { BookModel } from "../../../models/entities/BookModel";
import { ImageRenderComponent } from "./ImageRenderComponent";
import { Link } from "react-router-dom";

export const BookDetailsComponent: React.FC<{ book: BookModel }> = (props) => {
  return (
    <div className="text-center">
      <ImageRenderComponent book={props.book} width="151" height="233" />

      <h6 className="mt-2">{props.book.title}</h6>
      <p>{props.book.author}</p>
      <Link
        to={`checkout/${props.book.id}`}
        className="btn main-color text-white"
      >
        Reserve
      </Link>
    </div>
  );
};
