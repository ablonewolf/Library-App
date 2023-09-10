package com.arka99.OnlineLibrary.exceptions;

import com.arka99.OnlineLibrary.common.constants.ExceptionConstants;

public class ResourceNotFoundException extends ApplicationException {

    public ResourceNotFoundException(ExceptionConstants ex) {
        super(ex.name(), ex.getMessage());
    }

}