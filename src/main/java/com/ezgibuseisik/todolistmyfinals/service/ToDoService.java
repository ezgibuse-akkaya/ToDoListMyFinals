
package com.ezgibuseisik.todolistmyfinals.service;

import com.ezgibuseisik.todolistmyfinals.exception.ToDoAlreadyExistsException;
import com.ezgibuseisik.todolistmyfinals.exception.ToDoNotFoundException;
import com.ezgibuseisik.todolistmyfinals.model.ToDo;
import com.ezgibuseisik.todolistmyfinals.repository.ToDoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class ToDoService implements IToDoService{
    private final ToDoRepository toDoRepository;

    @Override
    public List<ToDo> getToDos() {
        return toDoRepository.findAll();
    }
    @Override
    public ToDo addToDo(ToDo toDo) {
        if (ToDoAlreadyExists(toDo.getEmail())){
            throw  new ToDoAlreadyExistsException(toDo.getEmail()+ " already exists!");
        }
        return toDoRepository.save(toDo);
    }


    @Override
    public ToDo updateToDo(ToDo toDo, Long id) {
        return toDoRepository.findById(id).map(st -> {
            st.setFirstName(toDo.getFirstName());
            st.setLastName(toDo.getLastName());
            st.setEmail(toDo.getEmail());
            st.setToDoExplanation(toDo.getToDoExplanation());
            return toDoRepository.save(st);
        }).orElseThrow(() -> new ToDoNotFoundException("Sorry, this ToDo could not be found"));
    }

    @Override
    public ToDo getToDoById(Long id) {
        return toDoRepository.findById(id)
                .orElseThrow(() -> new ToDoNotFoundException("Sorry, no ToDo found with the Id :" +id));
    }

    @Override
    public void deleteToDo(Long id) {
        if (!toDoRepository.existsById(id)){
            throw new ToDoNotFoundException("Sorry, ToDo not found");
        }
        toDoRepository.deleteById(id);
    }
    private boolean ToDoAlreadyExists(String email) {
        return toDoRepository.findByEmail(email).isPresent();
    }
    public void deleteAllToDos() {
        toDoRepository.deleteAll();
    }

}

