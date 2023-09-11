package com.arka99.OnlineLibrary.service;


import com.arka99.OnlineLibrary.dao.BookRepository;
import com.arka99.OnlineLibrary.dao.CheckoutRepository;
import com.arka99.OnlineLibrary.dto.requests.CheckoutBookRequest;
import com.arka99.OnlineLibrary.entity.Book;
import com.arka99.OnlineLibrary.entity.Checkout;
import com.arka99.OnlineLibrary.exceptions.ApplicationException;
import com.arka99.OnlineLibrary.exceptions.ResourceAlreadyExistsException;
import com.arka99.OnlineLibrary.exceptions.ResourceNotAvailableException;
import com.arka99.OnlineLibrary.exceptions.ResourceNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Objects;
import java.util.Optional;

import static com.arka99.OnlineLibrary.common.constants.ExceptionConstants.ALREADY_CHECKOUT;
import static com.arka99.OnlineLibrary.common.constants.ExceptionConstants.BOOK_NOT_AVAILABLE;
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
            throw new ResourceAlreadyExistsException(ALREADY_CHECKOUT);
        } else if (book.get().getCopiesAvailable() == 0) {
            throw new ResourceNotAvailableException(BOOK_NOT_AVAILABLE);
        } else {
            Integer copiesAvailable = book.get().getCopiesAvailable();
            copiesAvailable -= 1;
            book.get().setCopiesAvailable(copiesAvailable);
            bookRepository.save(book.get());
            Checkout checkout = Checkout.builder()
                .userEmail(checkoutBookRequest.userEmail())
                .checkoutDate(LocalDate.now().toString())
                .returnDate(LocalDate.now().plusDays(7).toString())
                .book(book.get())
                .build();

            checkoutRepository.save(checkout);
            return book.get();
        }
    }

    public Boolean isBookCheckOutByUser(CheckoutBookRequest checkoutBookRequest) {
        return checkoutRepository.existsCheckoutByUserEmailAndBookId(checkoutBookRequest.userEmail(),
            checkoutBookRequest.bookId());
    }
}
