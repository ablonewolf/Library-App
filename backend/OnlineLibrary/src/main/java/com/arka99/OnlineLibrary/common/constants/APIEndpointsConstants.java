package com.arka99.OnlineLibrary.common.constants;

public class APIEndpointsConstants {
    private APIEndpointsConstants() {

    }

    public static final String CROSS_ORIGIN_URL = "http://localhost:3000";
    private static final String API_END_POINT_INITIAL = "/api";
    public static final String BOOK_ENDPOINT = API_END_POINT_INITIAL + "/books";
    public static final String SECURE_CHECKOUT_ENDPOINT = "/secure/checkout";
    public static final String IS_BOOK_CHECKOUT_BY_USER = "/secure/isCheckoutByUser";
    public static final String COUNT_CURRENT_CHECKOUTS = "/secure/currentCheckouts/count";
}
