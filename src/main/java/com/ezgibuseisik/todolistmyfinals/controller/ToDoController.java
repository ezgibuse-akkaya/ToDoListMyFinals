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
    public ResponseEntity<ToDo> addToDo(@RequestBody ToDo toDo) {
        ToDo createdToDo = toDoService.addToDo(toDo);
        return new ResponseEntity<>(createdToDo, HttpStatus.CREATED);
    }

    @Operation(summary = "Update an existing todo", description = "Update the details of an existing todo item")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Todo successfully updated"),
            @ApiResponse(responseCode = "404", description = "Todo not found")
    })
    @PutMapping("/update/{id}")
    public ResponseEntity<ToDo> updateToDo(@RequestBody ToDo toDo, @PathVariable Long id) {
        ToDo updatedToDo = toDoService.updateToDo(toDo, id);
        return new ResponseEntity<>(updatedToDo, HttpStatus.OK);
    }

    @Operation(summary = "Update completion status", description = "Update the completion status of a todo item")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Completion status successfully updated"),
            @ApiResponse(responseCode = "404", description = "Todo not found")
    })
    @PutMapping("/updateStatus/{id}")
    public ResponseEntity<ToDo> updateCompletionStatus(@PathVariable Long id, @RequestParam boolean done) {
        ToDo updatedToDo = toDoService.updateCompletionStatus(id, done);
        return new ResponseEntity<>(updatedToDo, HttpStatus.OK);
    }

    @Operation(summary = "Delete a todo", description = "Delete a todo item by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Todo successfully deleted"),
            @ApiResponse(responseCode = "404", description = "Todo not found")
    })
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteToDo(@PathVariable Long id) {
        toDoService.deleteToDo(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Operation(summary = "Get a todo by ID", description = "Retrieve a todo item by its ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful retrieval of todo"),
            @ApiResponse(responseCode = "404", description = "Todo not found")
    })
    @GetMapping("/todo/{id}")
    public ResponseEntity<ToDo> getToDoById(@PathVariable Long id) {
        ToDo todo = toDoService.getToDoById(id);
        return new ResponseEntity<>(todo, HttpStatus.OK);
    }

    @Operation(summary = "Delete all todos", description = "Delete all todo items")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "All todos successfully deleted")
    })
    @DeleteMapping("/deleteAll")
    public ResponseEntity<Void> deleteAllToDos() {
        toDoService.deleteAllToDos();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @Operation(summary = "Delete all done todos", description = "Delete all todo items that are marked as done")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "All done todos successfully deleted")
    })
    @DeleteMapping("/deleteDone")
    public ResponseEntity<Void> deleteDone() {
        toDoService.deleteDone();
        return ResponseEntity.noContent().build();
    }
}
