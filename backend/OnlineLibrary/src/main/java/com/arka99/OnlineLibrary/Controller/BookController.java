package com.arka99.OnlineLibrary.Controller;

import com.arka99.OnlineLibrary.dto.requests.CheckoutBookRequest;
import com.arka99.OnlineLibrary.entity.Book;
import com.arka99.OnlineLibrary.exceptions.CustomAuthenticationResponse;
import com.arka99.OnlineLibrary.service.BookService;
import com.arka99.OnlineLibrary.utils.ExtractJWT;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import static com.arka99.OnlineLibrary.common.constants.APIEndpointsConstants.*;
import static com.arka99.OnlineLibrary.common.constants.ExceptionConstants.AUTHENTICATION_TOKEN_MISSING;

@CrossOrigin(CROSS_ORIGIN_URL)
@RestController
@RequestMapping(BOOK_ENDPOINT)
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;

    @GetMapping
    public Page<Book> findAllBooks(
            @RequestParam(defaultValue = "1")
            Integer page,
            @RequestParam
            Integer size) {
        return bookService.findAllBooks(PageRequest.of(page, size));
    }

    @PutMapping(SECURE_CHECKOUT_ENDPOINT)
    public Book checkoutBook(
            @RequestHeader(value = "Authorization")
            String token,
            @RequestBody
            CheckoutBookRequest checkoutBookRequest) {
        if (!Objects.nonNull(token)) {
            throw new CustomAuthenticationResponse(AUTHENTICATION_TOKEN_MISSING);
        }
        String userEmail = ExtractJWT.extractValueFromPayload(token, "sub");
        return bookService.checkoutBook(userEmail, checkoutBookRequest);
    }

    @GetMapping(IS_BOOK_CHECKOUT_BY_USER)
    public Boolean isBookCheckoutByUser(
            @RequestHeader(value = "Authorization")
            String token,
            @RequestParam
            Long bookId) {
        if (!Objects.nonNull(token)) {
            throw new CustomAuthenticationResponse(AUTHENTICATION_TOKEN_MISSING);
        }
        String userEmail = ExtractJWT.extractValueFromPayload(token, "sub");
        return bookService.isBookCheckOutByUser(userEmail, bookId);
    }

    @GetMapping(COUNT_CURRENT_CHECKOUTS)
    public Integer currentCheckoutBooksCount(
            @RequestHeader(value = "Authorization")
            String token) {
        if (!Objects.nonNull(token)) {
            throw new CustomAuthenticationResponse(AUTHENTICATION_TOKEN_MISSING);
        }
        String userEmail = ExtractJWT.extractValueFromPayload(token, "sub");
        return bookService.currentCheckoutBooksCount(userEmail);
    }

    @GetMapping(FIND_BOOK_BY_TITLE)
    public Page<Book> findBookByTitle(
            @RequestParam
            String title,
            @RequestParam(defaultValue = "0")
            Integer page,
            @RequestParam
            Integer size) {
        return bookService.findBookByTitleContaining(title, PageRequest.of(page, size));
    }

    @GetMapping(FIND_BOOK_BY_CATEGORY)
    public Page<Book> findBookByCategory(
            @RequestParam
            String category,
            @RequestParam(defaultValue = "0")
            Integer page,
            @RequestParam
            Integer size) {
        return bookService.findBookByCategory(category, PageRequest.of(page, size));
    }

}
