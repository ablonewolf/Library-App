package com.arka99.OnlineLibrary.exceptions;

import com.arka99.OnlineLibrary.common.constants.ExceptionConstants;

public class ResourceNotAvailableException extends ApplicationException {
    public ResourceNotAvailableException(ExceptionConstants ex) {
        super(ex.name(), ex.getMessage());
    }
}
