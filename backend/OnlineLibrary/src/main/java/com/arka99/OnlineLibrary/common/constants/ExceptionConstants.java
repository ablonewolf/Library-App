package com.arka99.OnlineLibrary.common.constants;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ExceptionConstants {
    BOOK_NOT_FOUND("Book does not exist"),
    ALREADY_CHECKOUT("Book is already checkout by the user"),
    BOOK_NOT_AVAILABLE("Book is not available at this moment"),
    REVIEW_ALREADY_EXISTS("There is already a review on this book by this user");
    private final String message;
}
