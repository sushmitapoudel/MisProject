package com.sushmita.onlineassignmentsystem.service.impl;

import com.sushmita.onlineassignmentsystem.model.Student;
import com.sushmita.onlineassignmentsystem.model.User;
import com.sushmita.onlineassignmentsystem.repository.StudentRepository;
import com.sushmita.onlineassignmentsystem.repository.UserRepository;
import com.sushmita.onlineassignmentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private UserRepository userRepository;
    @Override
    public List<Student> getAllStudent() {
        return studentRepository.findAll();
    }

    @Override
    public Student saveOrUpdateStudent(Student student) {
        User user = userRepository.save(student.getUser());
        student.setUser(user);
        return studentRepository.save(student);
    }

    @Override
    public Student getById(long id) {
        return studentRepository.findById(id).orElseThrow(() -> new RuntimeException("Student Not Found"));
    }

    @Override
    public void delete(long id) {
        studentRepository.deleteById(id);
    }

    @Override
    public double countAll() {
        return studentRepository.count();
    }

    @Override
    public Student findById(long id) {
        return studentRepository.findById(id).orElseThrow(() ->  new RuntimeException("Not Found"));

    }
}
