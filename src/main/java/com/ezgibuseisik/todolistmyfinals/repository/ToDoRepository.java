package com.ezgibuseisik.todolistmyfinals.repository;

import com.ezgibuseisik.todolistmyfinals.model.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface ToDoRepository extends JpaRepository<ToDo, Long> {
    Optional<ToDo> findByEmail(String email);
}
