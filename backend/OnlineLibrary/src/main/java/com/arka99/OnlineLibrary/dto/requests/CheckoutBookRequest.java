package com.arka99.OnlineLibrary.dto.requests;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CheckoutBookRequest(
    @NotBlank
    String userEmail,
    @NotNull
    Long bookId
) {
}
