package com.sushmita.onlineassignmentsystem.service;

import com.sushmita.onlineassignmentsystem.model.Student;

import java.util.List;
public interface StudentService {

    List<Student> getAllStudent();

    Student saveOrUpdateStudent(Student student);

    Student getById(long id);

    void  delete(long id);

    double countAll();

    Student findById(long id);
}
