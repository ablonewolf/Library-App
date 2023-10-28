package com.arka99.OnlineLibrary.dto.requests;

import jakarta.validation.constraints.NotNull;

public record CheckoutBookRequest(
        @NotNull
        Long bookId
) {
}
