package com.arka99.OnlineLibrary.dao;

import com.arka99.OnlineLibrary.entity.Checkout;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CheckoutRepository extends JpaRepository<Checkout, Long> {

    @EntityGraph(attributePaths = {"book"})
    Boolean existsCheckoutByUserEmailAndBookId(String userEmail, Long bookId);

    @EntityGraph(attributePaths = {"book"})
    Boolean existsAllByBookIdAndUserEmail(Long book_id, String userEmail);

    List<Checkout> findCheckoutsByUserEmail(String userEmail);
}
