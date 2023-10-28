package com.arka99.OnlineLibrary.entity;

import com.arka99.OnlineLibrary.common.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "checkout")
public class Checkout extends BaseEntity {
    @Column(name = "user_email")
    private String userEmail;
    @Column(name = "checkout_date")
    private String checkoutDate;
    @Column(name = "return_date")
    private String returnDate;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "book_id", nullable = false)
    private Book book;

}
