package com.ezgibuseisik.todolistmyfinals.exception;


public class ToDoAlreadyExistsException extends RuntimeException {
    public ToDoAlreadyExistsException(String message) {
        super(message);
    }
}
