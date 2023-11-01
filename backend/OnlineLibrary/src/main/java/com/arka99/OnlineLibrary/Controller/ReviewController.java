package com.arka99.OnlineLibrary.Controller;

import com.arka99.OnlineLibrary.dto.requests.ReviewRequest;
import com.arka99.OnlineLibrary.entity.Review;
import com.arka99.OnlineLibrary.exceptions.CustomAuthenticationResponse;
import com.arka99.OnlineLibrary.service.ReviewService;
import com.arka99.OnlineLibrary.utils.ExtractJWT;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import static com.arka99.OnlineLibrary.common.constants.APIEndpointsConstants.*;
import static com.arka99.OnlineLibrary.common.constants.ExceptionConstants.AUTHENTICATION_TOKEN_MISSING;
import static com.arka99.OnlineLibrary.common.constants.ExceptionConstants.USER_EMAIL_MISSING;

@CrossOrigin(CROSS_ORIGIN_URL)
@RestController
@RequestMapping(REVIEW_ENDPOINT)
@RequiredArgsConstructor
public class ReviewController {
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

    @PostMapping(CREATE_REVIEW)
    public void postReview(
            @RequestHeader(value = "Authorization")
            String token,
            @RequestBody
            ReviewRequest reviewRequest) {
        if (Objects.isNull(token)) {
            throw new CustomAuthenticationResponse(AUTHENTICATION_TOKEN_MISSING);
        }
        String userEmail = ExtractJWT.extractValueFromPayload(token, "sub");
        if (Objects.isNull(userEmail)) {
            throw new CustomAuthenticationResponse(USER_EMAIL_MISSING);
        }
        reviewService.postReview(userEmail, reviewRequest);
    }

    @GetMapping(REVIEW_EXISTS)
    public Boolean userReviewExists(
            @RequestHeader(value = "Authorization")
            String token,
            @RequestParam
            Long bookId) {
        if (Objects.isNull(token)) {
            throw new CustomAuthenticationResponse(AUTHENTICATION_TOKEN_MISSING);
        }
        String userEmail = ExtractJWT.extractValueFromPayload(token, "sub");
        return reviewService.userReviewListed(userEmail, bookId);
    }


}
