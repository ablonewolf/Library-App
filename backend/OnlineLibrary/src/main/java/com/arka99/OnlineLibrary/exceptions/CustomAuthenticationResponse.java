package com.arka99.OnlineLibrary.exceptions;

import com.arka99.OnlineLibrary.common.constants.ExceptionConstants;

public class CustomAuthenticationResponse extends ApplicationException {
    public CustomAuthenticationResponse(ExceptionConstants ex) {
        super(ex.name(), ex.getMessage());
    }
}
