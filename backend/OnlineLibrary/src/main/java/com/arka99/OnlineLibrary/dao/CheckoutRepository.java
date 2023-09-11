package com.arka99.OnlineLibrary.dao;

import com.arka99.OnlineLibrary.entity.Checkout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CheckoutRepository extends JpaRepository<Checkout, Long> {

    Boolean existsCheckoutByUserEmailAndBookId(String userEmail, Long bookId);
}
