package com.ezgibuseisik.todolistmyfinals.controller;

import com.ezgibuseisik.todolistmyfinals.model.ToDo;
import com.ezgibuseisik.todolistmyfinals.service.IToDoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("http://localhost:3000") //allowing client application to consume the backed
@RestController
@RequestMapping("/todos")
@RequiredArgsConstructor

public class ToDoController {
    private final IToDoService ToDoService;
    @GetMapping
    public ResponseEntity<List<ToDo>> getToDos(){
        return new ResponseEntity<>(ToDoService.getToDos(), HttpStatus.FOUND);
    }
    @PostMapping
    public ToDo addToDo(@RequestBody ToDo ToDo){
        return ToDoService.addToDo(ToDo);
    }
    @PutMapping("/update/{id}")
    public ToDo updateToDo(@RequestBody ToDo ToDo, @PathVariable Long id){
        return ToDoService.updateToDo(ToDo, id);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteToDo(@PathVariable Long id){
        ToDoService.deleteToDo(id);
    }
    @GetMapping("/todo/{id}")
    public ToDo getToDoById(@PathVariable Long id){
        return ToDoService.getToDoById(id);
    }
    @DeleteMapping("/deleteAll")
    public void deleteAllToDos() { ToDoService.deleteAllToDos(); }
}
