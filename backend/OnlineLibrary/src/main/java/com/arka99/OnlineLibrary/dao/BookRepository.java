package com.arka99.OnlineLibrary.dao;

import com.arka99.OnlineLibrary.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Page<Book> findBookByTitleContaining(String title, Pageable pageable);

    Page<Book> findBookByCategory(String category, Pageable pageable);

    Page<Book> findAll(Pageable pageable);

}
