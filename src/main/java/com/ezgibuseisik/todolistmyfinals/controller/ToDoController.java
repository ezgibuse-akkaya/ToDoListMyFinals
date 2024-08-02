package com.ezgibuseisik.todolistmyfinals.controller;

import com.ezgibuseisik.todolistmyfinals.model.ToDo;
import com.ezgibuseisik.todolistmyfinals.service.IToDoService;
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

    @GetMapping
    public ResponseEntity<List<ToDo>> getToDos() {
        return new ResponseEntity<>(toDoService.getToDos(), HttpStatus.OK);
    }

    @PostMapping
    public ToDo addToDo(@RequestBody ToDo toDo) {
        return toDoService.addToDo(toDo);
    }

    @PutMapping("/update/{id}")
    public ToDo updateToDo(@RequestBody ToDo toDo, @PathVariable Long id) {
        return toDoService.updateToDo(toDo, id);
    }

    @PutMapping("/updateStatus/{id}")
    public ToDo updateCompletionStatus(@PathVariable Long id, @RequestParam boolean done) {
        return toDoService.updateCompletionStatus(id, done);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteToDo(@PathVariable Long id) {
        toDoService.deleteToDo(id);
    }

    @GetMapping("/todo/{id}")
    public ToDo getToDoById(@PathVariable Long id) {
        return toDoService.getToDoById(id);
    }

    @DeleteMapping("/deleteAll")
    public void deleteAllToDos() {
        toDoService.deleteAllToDos();
    }
}
