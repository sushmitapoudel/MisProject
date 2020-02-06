package com.sushmita.onlineassignmentsystem.repository;

import com.sushmita.onlineassignmentsystem.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface QuestionRepository extends JpaRepository <Question,Long> {
    List<Question> findAllByTeacher_Id(long id);
    List<Question> findAllBySubject_NameAndSubject_GradeAndDeadLineAfter(String subject, String grade, LocalDate today);
    List<Question> findAllBySubject_GradeAndSubject_Faculty(String subject, String grade);
}
