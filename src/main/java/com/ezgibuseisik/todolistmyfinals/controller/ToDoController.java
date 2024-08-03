package com.ezgibuseisik.todolistmyfinals.controller;

import com.ezgibuseisik.todolistmyfinals.model.ToDo;
import com.ezgibuseisik.todolistmyfinals.service.IToDoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/todos")
@RequiredArgsConstructor
public class ToDoController {
    private final IToDoService toDoService;

    @Operation(summary = "Get all todos", description = "Retrieve a list of all todos")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful retrieval of todos"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @GetMapping
    public ResponseEntity<List<ToDo>> getToDos() {
        return new ResponseEntity<>(toDoService.getToDos(), HttpStatus.OK);
    }

    @Operation(summary = "Add a new todo", description = "Create a new todo item")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Todo successfully created"),
            @ApiResponse(responseCode = "400", description = "Invalid input")
    })
    @PostMapping
    public ToDo addToDo(@RequestBody ToDo toDo) {
        return toDoService.addToDo(toDo);
    }

    @Operation(summary = "Update an existing todo", description = "Update the details of an existing todo item")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Todo successfully updated"),
            @ApiResponse(responseCode = "404", description = "Todo not found")
    })
    @PutMapping("/update/{id}")
    public ToDo updateToDo(@RequestBody ToDo toDo, @PathVariable Long id) {
        return toDoService.updateToDo(toDo, id);
    }

    @Operation(summary = "Update completion status", description = "Update the completion status of a todo item")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Completion status successfully updated"),
            @ApiResponse(responseCode = "404", description = "Todo not found")
    })
    @PutMapping("/updateStatus/{id}")
    public ToDo updateCompletionStatus(@PathVariable Long id, @RequestParam boolean done) {
        return toDoService.updateCompletionStatus(id, done);
    }

    @Operation(summary = "Delete a todo", description = "Delete a todo item by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Todo successfully deleted"),
            @ApiResponse(responseCode = "404", description = "Todo not found")
    })
    @DeleteMapping("/delete/{id}")
    public void deleteToDo(@PathVariable Long id) {
        toDoService.deleteToDo(id);
    }

    @Operation(summary = "Get a todo by ID", description = "Retrieve a todo item by its ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful retrieval of todo"),
            @ApiResponse(responseCode = "404", description = "Todo not found")
    })
    @GetMapping("/todo/{id}")
    public ToDo getToDoById(@PathVariable Long id) {
        return toDoService.getToDoById(id);
    }

    @Operation(summary = "Delete all todos", description = "Delete all todo items")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "All todos successfully deleted")
    })
    @DeleteMapping("/deleteAll")
    public void deleteAllToDos() {
        toDoService.deleteAllToDos();
    }
}
