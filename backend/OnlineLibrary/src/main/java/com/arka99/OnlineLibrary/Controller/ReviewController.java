package com.arka99.OnlineLibrary.Controller;

import com.arka99.OnlineLibrary.entity.Review;
import com.arka99.OnlineLibrary.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import static com.arka99.OnlineLibrary.common.constants.APIEndpointsConstants.*;

@CrossOrigin(CROSS_ORIGIN_URL)
@RestController
@RequestMapping(REVIEW_ENDPOINT)
@RequiredArgsConstructor
public
class ReviewController {
    private final ReviewService reviewService;

    @GetMapping(FIND_REVIEWS_BY_BOOK_ID)
    public Page<Review> findReviewByBookId(
            @RequestParam
            Long bookId,
            @RequestParam(defaultValue = "1")
            Integer page,
            @RequestParam(defaultValue = "10")
            Integer size) {
        return reviewService.findReviewByBook(bookId, PageRequest.of(page - 1,
                                                                     size));
    }
}
