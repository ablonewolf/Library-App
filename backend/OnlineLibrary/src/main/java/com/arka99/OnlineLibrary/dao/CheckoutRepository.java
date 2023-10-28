package com.arka99.OnlineLibrary.dao;

import com.arka99.OnlineLibrary.entity.Checkout;
import java.util.List;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CheckoutRepository extends JpaRepository<Checkout, Long> {

    @EntityGraph(attributePaths = {"book"})
    Boolean existsCheckoutByUserEmailAndBookId(String userEmail, Long bookId);

    @EntityGraph(attributePaths = {"book"})
    Boolean existsAllByBookIdAndUserEmail(Long book_id, String userEmail);

    List<Checkout> findCheckoutsByUserEmail(String userEmail);
}
