package com.arka99.OnlineLibrary.service.impl;

import com.arka99.OnlineLibrary.dao.ReviewRepository;
import com.arka99.OnlineLibrary.entity.Review;
import com.arka99.OnlineLibrary.service.BookService;
import com.arka99.OnlineLibrary.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
}
