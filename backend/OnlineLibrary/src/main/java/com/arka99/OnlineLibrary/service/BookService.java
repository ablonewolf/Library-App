package com.arka99.OnlineLibrary.service;

import com.arka99.OnlineLibrary.dto.requests.CheckoutBookRequest;
import com.arka99.OnlineLibrary.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BookService {
    Book checkoutBook(String userEmail, CheckoutBookRequest checkoutBookRequest);

    Boolean isBookCheckOutByUser(String userEmail, Long bookId);

    Integer currentCheckoutBooksCount(String userEmail);

    Page<Book> findBookByTitleContaining(String title, Pageable pageable);

    Page<Book> findBookByCategory(String category, Pageable pageable);

    Page<Book> findAllBooks(Pageable pageable);

    Book findBookByID(Long bookId);

}
