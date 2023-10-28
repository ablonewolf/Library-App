package com.arka99.OnlineLibrary.entity;

import com.arka99.OnlineLibrary.common.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "book")
public class Book extends BaseEntity {
    private String title;
    private String author;
    private String description;
    private Integer copies;
    private Integer copiesAvailable;
    private String category;
    private String img;
}
