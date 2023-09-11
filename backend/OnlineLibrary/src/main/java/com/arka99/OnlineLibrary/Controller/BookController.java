package com.arka99.OnlineLibrary.Controller;

import com.arka99.OnlineLibrary.dto.requests.CheckoutBookRequest;
import com.arka99.OnlineLibrary.entity.Book;
import com.arka99.OnlineLibrary.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.arka99.OnlineLibrary.common.constants.APIEndpointsConstants.BOOK_ENDPOINT;
import static com.arka99.OnlineLibrary.common.constants.APIEndpointsConstants.CROSS_ORIGIN_URL;
import static com.arka99.OnlineLibrary.common.constants.APIEndpointsConstants.SECURE_CHECKOUT_ENDPOINT;

@CrossOrigin(CROSS_ORIGIN_URL)
@RestController
@RequestMapping(BOOK_ENDPOINT)
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;

    @PutMapping(SECURE_CHECKOUT_ENDPOINT)
    public Book checkoutBook(@RequestBody CheckoutBookRequest checkoutBookRequest) {
        return bookService.checkoutBook(checkoutBookRequest);
    }

}
