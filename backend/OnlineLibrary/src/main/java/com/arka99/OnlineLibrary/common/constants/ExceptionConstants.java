package com.arka99.OnlineLibrary.common.constants;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ExceptionConstants {
    BOOK_NOT_FOUND("Book does not exist"),
    ALREADY_CHECKOUT("Book is already checkout by the user"),
    BOOK_NOT_AVAILABLE("Book is not available at this moment");
    private final String message;
}
