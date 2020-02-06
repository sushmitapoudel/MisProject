package com.sushmita.onlineassignmentsystem.service;

import com.sushmita.onlineassignmentsystem.model.Teacher;
import java.util.List;

public interface TeacherService {
    List<Teacher> getAllTeacher();

    Teacher saveOrUpdateTeacher(Teacher teacher);

    Teacher getById(long id);

    void  delete(long id);

    double countAll();

    Teacher findById(long id);
}
