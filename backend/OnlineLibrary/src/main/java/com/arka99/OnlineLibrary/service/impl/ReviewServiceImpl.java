package com.arka99.OnlineLibrary.service.impl;

import com.arka99.OnlineLibrary.dao.ReviewRepository;
import com.arka99.OnlineLibrary.dto.requests.ReviewRequest;
import com.arka99.OnlineLibrary.entity.Review;
import com.arka99.OnlineLibrary.exceptions.ResourceAlreadyExistsException;
import com.arka99.OnlineLibrary.service.BookService;
import com.arka99.OnlineLibrary.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.time.LocalDate;

import static com.arka99.OnlineLibrary.common.constants.ExceptionConstants.REVIEW_ALREADY_EXISTS;

@Service
@Transactional
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final BookService bookService;

    @Override
    public Page<Review> findReviewByBook(Long bookId, Pageable pageable) {
        return reviewRepository.findAllByBook_Id(bookId, pageable);
    }

    @Override
    public void postReview(String userEmail, ReviewRequest reviewRequest) {
        if (userReviewListed(userEmail, reviewRequest.bookId())) {
            throw new ResourceAlreadyExistsException(REVIEW_ALREADY_EXISTS);
        } else {
            Review review = Review.builder()
                    .book(bookService.findBookByID(reviewRequest.bookId()))
                    .rating(reviewRequest.rating())
                    .userEmail(userEmail)
                    .reviewDescription(reviewRequest.description())
                    .date(Date.valueOf(LocalDate.now()))
                    .build();
            reviewRepository.save(review);
        }
    }

    @Override
    public boolean userReviewListed(String userEmail, Long bookId) {
        return reviewRepository.existsByBookIdAndUserEmail(bookId, userEmail);
    }
}
