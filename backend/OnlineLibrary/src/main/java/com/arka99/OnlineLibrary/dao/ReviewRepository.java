package com.arka99.OnlineLibrary.dao;

import com.arka99.OnlineLibrary.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    @EntityGraph(attributePaths = {"book"})
    Page<Review> findAllByBook_Id(Long bookId, Pageable pageable);

    @EntityGraph(attributePaths = {"book"})
    Boolean existsByBookIdAndUserEmail(Long bookId, String userEmail);
}
