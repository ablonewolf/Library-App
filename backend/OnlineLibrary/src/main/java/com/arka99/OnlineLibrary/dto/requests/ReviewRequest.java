package com.arka99.OnlineLibrary.dto.requests;

import jakarta.validation.constraints.NotNull;

public record ReviewRequest(
        @NotNull
        double rating,
        @NotNull
        Long bookId,
        String description
) {
}
