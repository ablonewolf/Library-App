package com.arka99.OnlineLibrary.exceptions;

import com.arka99.OnlineLibrary.common.constants.ExceptionConstants;

public class ResourceAlreadyExistsException extends ApplicationException {
    public ResourceAlreadyExistsException(ExceptionConstants ex) {
        super(ex.name(), ex.getMessage());
    }
}
