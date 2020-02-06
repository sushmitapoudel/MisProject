package com.sushmita.onlineassignmentsystem.service.impl;

import com.sushmita.onlineassignmentsystem.model.Teacher;
import com.sushmita.onlineassignmentsystem.model.User;
import com.sushmita.onlineassignmentsystem.repository.TeacherRepository;
import com.sushmita.onlineassignmentsystem.repository.UserRepository;
import com.sushmita.onlineassignmentsystem.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class TeacherServiceImpl implements TeacherService {
    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private UserRepository userRepository;
    @Override
    public List<Teacher> getAllTeacher() {
        return teacherRepository.findAll();
    }

    @Override
    public Teacher saveOrUpdateTeacher(Teacher teacher) {

        User user = userRepository.save(teacher.getUser());
        teacher.setUser(user);
        return teacherRepository.save(teacher);
    }

    @Override
    public Teacher getById(long id) {
        return teacherRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
    public void delete(long id) {
        teacherRepository.deleteById(id);
    }

    @Override
    public double countAll() {
        return teacherRepository.count();
    }

    @Override
    public Teacher findById(long id) {
        return teacherRepository.findById(id).orElseThrow(() ->  new RuntimeException("Not Found"));

    }
}
