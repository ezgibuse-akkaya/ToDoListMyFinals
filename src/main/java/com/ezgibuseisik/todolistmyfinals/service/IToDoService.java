package com.ezgibuseisik.todolistmyfinals.service;
import com.ezgibuseisik.todolistmyfinals.model.ToDo;
import java.util.List;

public interface IToDoService {
    ToDo addToDo(ToDo toDo);
    List<ToDo> getToDos();
    ToDo updateToDo(ToDo toDo, Long id);
    ToDo getToDoById(Long id);
    void deleteToDo(Long id);
    void deleteAllToDos();
}