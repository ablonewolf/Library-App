package com.arka99.OnlineLibrary.service;

import com.arka99.OnlineLibrary.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ReviewService {
    Page<Review> findReviewByBook(Long bookId, Pageable pageable);
}
