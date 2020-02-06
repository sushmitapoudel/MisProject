package com.sushmita.onlineassignmentsystem.repository;

import com.sushmita.onlineassignmentsystem.model.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer,Long> {

    List<Answer> findByStudent_Id(long id);

    List<Answer> findAllByQuestion_Teacher_Id(long id);
}
