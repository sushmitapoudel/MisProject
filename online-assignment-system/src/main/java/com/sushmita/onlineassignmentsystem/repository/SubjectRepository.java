package com.sushmita.onlineassignmentsystem.repository;

import com.sushmita.onlineassignmentsystem.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Long> {
    List<Subject> findByGradeAndFaculty(String grade, String faculty);
}
