package com.arka99.OnlineLibrary.repositories;

import com.arka99.OnlineLibrary.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    Page<Review> findReviewByBookId(@RequestParam("book_id") Long bookId, Pageable pageable);
}
