package com.sushmita.onlineassignmentsystem.repository;

import com.sushmita.onlineassignmentsystem.model.Student;
import com.sushmita.onlineassignmentsystem.model.Teacher;
import com.sushmita.onlineassignmentsystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository <Student,Long> {
    Optional<Student> findByUser(User user);
}
