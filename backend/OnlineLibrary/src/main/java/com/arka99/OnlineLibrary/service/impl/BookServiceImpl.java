package com.arka99.OnlineLibrary.service.impl;


import com.arka99.OnlineLibrary.dao.BookRepository;
import com.arka99.OnlineLibrary.dao.CheckoutRepository;
import com.arka99.OnlineLibrary.dto.requests.CheckoutBookRequest;
import com.arka99.OnlineLibrary.entity.Book;
import com.arka99.OnlineLibrary.entity.Checkout;
import com.arka99.OnlineLibrary.exceptions.ApplicationException;
import com.arka99.OnlineLibrary.exceptions.ResourceAlreadyExistsException;
import com.arka99.OnlineLibrary.exceptions.ResourceNotAvailableException;
import com.arka99.OnlineLibrary.exceptions.ResourceNotFoundException;
import com.arka99.OnlineLibrary.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Optional;

import static com.arka99.OnlineLibrary.common.constants.ExceptionConstants.ALREADY_CHECKOUT;
import static com.arka99.OnlineLibrary.common.constants.ExceptionConstants.BOOK_NOT_AVAILABLE;
import static com.arka99.OnlineLibrary.common.constants.ExceptionConstants.BOOK_NOT_FOUND;

@Service
@Transactional
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {
    private final BookRepository bookRepository;
    private final CheckoutRepository checkoutRepository;

    @Override
    public Book checkoutBook(String userEmail, CheckoutBookRequest checkoutBookRequest) throws ApplicationException {
        Optional<Book> book = bookRepository.findById(checkoutBookRequest.bookId());
        Boolean isBookCheckedOutByUser = isBookCheckOutByUser(userEmail, checkoutBookRequest.bookId());
        if (book.isEmpty()) {
            throw new ResourceNotFoundException(BOOK_NOT_FOUND);
        } else if (isBookCheckedOutByUser) {
            throw new ResourceAlreadyExistsException(ALREADY_CHECKOUT);
        } else if (book.get().getCopiesAvailable() == 0) {
            throw new ResourceNotAvailableException(BOOK_NOT_AVAILABLE);
        } else {
            Integer copiesAvailable = book.get().getCopiesAvailable();
            copiesAvailable -= 1;
            book.get().setCopiesAvailable(copiesAvailable);
            bookRepository.save(book.get());
            Checkout checkout = Checkout.builder().userEmail(userEmail).checkoutDate(LocalDate.now().toString()).returnDate(LocalDate.now().plusDays(7).toString()).book(book.get()).build();

            checkoutRepository.save(checkout);
            return book.get();
        }
    }

    @Override
    public Boolean isBookCheckOutByUser(String userEmail, Long bookId) {
        return checkoutRepository.existsAllByBookIdAndUserEmail(bookId, userEmail);
    }

    @Override
    public Integer currentCheckoutBooksCount(String userEmail) {
        return checkoutRepository.findCheckoutsByUserEmail(userEmail).size();
    }

    @Override
    public Page<Book> findBookByTitleContaining(String title, Pageable pageable) {
        return bookRepository.findBookByTitleContaining(title, pageable);
    }

    @Override
    public Page<Book> findBookByCategory(String category, Pageable pageable) {
        return bookRepository.findBookByCategory(category, pageable);
    }

    @Override
    public Page<Book> findAllBooks(Pageable pageable) {
        return bookRepository.findAll(pageable);
    }

    @Override
    public Book findBookByID(Long bookId) {
        return bookRepository.findById(bookId).orElseThrow(() -> new ResourceNotAvailableException(BOOK_NOT_FOUND));
    }
}
