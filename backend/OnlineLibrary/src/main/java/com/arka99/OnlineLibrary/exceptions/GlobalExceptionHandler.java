package com.arka99.OnlineLibrary.exceptions;

import com.arka99.OnlineLibrary.dto.responses.ExceptionResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.MissingRequestHeaderException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(RuntimeException.class)
    public ExceptionResponse handleRuntimeException(RuntimeException e) {
        return new ExceptionResponse("INTERNAL_SERVER_ERROR", e.getMessage());
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(ResourceNotFoundException.class)
    public ExceptionResponse handleResourceNotFoundException(ResourceNotFoundException e) {
        return new ExceptionResponse(e.getCode(), e.getMessage());
    }

    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ExceptionHandler(ResourceAlreadyExistsException.class)
    public ExceptionResponse handleResourceAlreadyExistsException(ResourceAlreadyExistsException e) {
        return new ExceptionResponse(e.getCode(), e.getMessage());
    }

    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ExceptionHandler(AuthenticationException.class)
    public ExceptionResponse handleAuthenticationException(AuthenticationException e) {
        return new ExceptionResponse("AUTHENTICATION_FAILED", e.getMessage());
    }

    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ExceptionHandler(MissingRequestHeaderException.class)
    public ExceptionResponse handleNoAuthenticationHeaderResponse(MissingRequestHeaderException e) {
        return new ExceptionResponse("AUTHENTICATION_HEADER_MISSING", e.getMessage());
    }

    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ExceptionHandler(CustomAuthenticationResponse.class)
    public ExceptionResponse handleNoUserEmailException(CustomAuthenticationResponse e) {
        return new ExceptionResponse(e.getCode(), e.getMessage());
    }

    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ExceptionHandler(ResourceNotAvailableException.class)
    public ExceptionResponse handleResourceNotAvailableException(ResourceNotAvailableException e) {
        return new ExceptionResponse(e.getCode(), e.getMessage());
    }
}
