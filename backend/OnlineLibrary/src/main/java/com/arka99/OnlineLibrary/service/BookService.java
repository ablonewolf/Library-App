package com.arka99.OnlineLibrary.service;


import com.arka99.OnlineLibrary.dao.BookRepository;
import com.arka99.OnlineLibrary.dao.CheckoutRepository;
import com.arka99.OnlineLibrary.dto.requests.CheckoutBookRequest;
import com.arka99.OnlineLibrary.entity.Book;
import com.arka99.OnlineLibrary.entity.Checkout;
import com.arka99.OnlineLibrary.exceptions.ApplicationException;
import com.arka99.OnlineLibrary.exceptions.ResourceAlreadyExistsException;
import com.arka99.OnlineLibrary.exceptions.ResourceNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.Optional;

import static com.arka99.OnlineLibrary.common.constants.ExceptionConstants.ALREADY_CHECKEDOUT;
import static com.arka99.OnlineLibrary.common.constants.ExceptionConstants.BOOK_NOT_FOUND;

@Service
@Transactional
@AllArgsConstructor
public class BookService {
    private final BookRepository bookRepository;
    private final CheckoutRepository checkoutRepository;

    public Book checkoutBook(CheckoutBookRequest checkoutBookRequest) throws ApplicationException {
        Optional<Book> book = bookRepository.findById(checkoutBookRequest.bookId());
        Checkout validatedCheckout = checkoutRepository.findCheckoutByUserEmailAndBookId(checkoutBookRequest.userEmail()
            , checkoutBookRequest.bookId());
        if (book.isEmpty()) {
            throw new ResourceNotFoundException(BOOK_NOT_FOUND);
        } else if (Objects.nonNull(validatedCheckout)) {
            throw new ResourceAlreadyExistsException(ALREADY_CHECKEDOUT);
        }
        return null;
    }
}
