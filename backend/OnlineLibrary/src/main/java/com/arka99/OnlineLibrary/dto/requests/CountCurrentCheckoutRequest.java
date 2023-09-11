package com.arka99.OnlineLibrary.dto.requests;

import jakarta.validation.constraints.NotBlank;

public record CountCurrentCheckoutRequest(
    @NotBlank
    String userEmail
) {
}
