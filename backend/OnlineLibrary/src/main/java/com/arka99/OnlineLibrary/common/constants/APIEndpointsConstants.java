package com.arka99.OnlineLibrary.common.constants;

public class APIEndpointsConstants {
    public static final String CROSS_ORIGIN_URL = "http://localhost:3000";
    public static final String SEARCH_ENDPOINT = "/search";
    public static final String FIND_BOOK_BY_TITLE = SEARCH_ENDPOINT + "/findBookByTitleContaining";
    public static final String FIND_BOOK_BY_CATEGORY = SEARCH_ENDPOINT + "findBookByCategory";
    public static final String FIND_REVIEWS_BY_BOOK_ID = SEARCH_ENDPOINT + "/findReviewByBookId";
    public static final String SECURE_CHECKOUT_ENDPOINT = "/secure/checkout";
    public static final String IS_BOOK_CHECKOUT_BY_USER = "/secure/isCheckoutByUser";
    public static final String CREATE_REVIEW = "/secure/create";
    public static final String REVIEW_EXISTS = "/secure/exists";
    public static final String COUNT_CURRENT_CHECKOUTS = "/secure/currentCheckouts/count";
    private static final String API_END_POINT_INITIAL = "/api";
    public static final String BOOK_ENDPOINT = API_END_POINT_INITIAL + "/books";
    public static final String REVIEW_ENDPOINT = API_END_POINT_INITIAL + "/reviews";

    private APIEndpointsConstants() {

    }
}
