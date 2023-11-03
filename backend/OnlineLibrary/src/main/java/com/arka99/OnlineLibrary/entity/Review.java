package com.arka99.OnlineLibrary.entity;

import com.arka99.OnlineLibrary.common.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "review")
public class Review extends BaseEntity {
    @Column(name = "user_email")
    private String userEmail;
    @Column(name = "date")
    private Date date;
    @Column(name = "rating")
    private Double rating;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "book_id", nullable = false)
    private Book book;
    @Column(name = "review_description")
    private String reviewDescription;
}
