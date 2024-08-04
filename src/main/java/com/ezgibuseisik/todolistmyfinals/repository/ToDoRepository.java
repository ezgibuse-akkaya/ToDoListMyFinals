package com.ezgibuseisik.todolistmyfinals.repository;

import com.ezgibuseisik.todolistmyfinals.model.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ToDoRepository extends JpaRepository<ToDo, Long> {
    Optional<ToDo> findByEmail(String email);
    @Modifying
    @Query("DELETE FROM ToDo t WHERE t.done = true")
    void deleteByDone(boolean done);
}
