package com.arka99.OnlineLibrary.common.constants;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ExceptionConstants {
    BOOK_NOT_FOUND("Book does not exist"),
    ALREADY_CHECKEDOUT("Book is already checkout by the user");
    private final String message;
    }
