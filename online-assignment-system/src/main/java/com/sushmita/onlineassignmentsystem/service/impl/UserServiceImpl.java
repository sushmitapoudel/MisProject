package com.sushmita.onlineassignmentsystem.service.impl;

import com.sushmita.onlineassignmentsystem.model.User;
import com.sushmita.onlineassignmentsystem.repository.StudentRepository;
import com.sushmita.onlineassignmentsystem.repository.TeacherRepository;
import com.sushmita.onlineassignmentsystem.repository.UserRepository;
import com.sushmita.onlineassignmentsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Object getByUsernameAndPassword(String username, String password) {
        User user = userRepository.findByUsernameAndPassword(username, password)
                .orElseThrow(() -> new RuntimeException("Error found"));
        if(user.getRole().equalsIgnoreCase("Teacher"))
            return teacherRepository.findByUser(user).orElseThrow(() -> new RuntimeException("Error found"));

        else if(user.getRole().equalsIgnoreCase("Student"))
            return studentRepository.findByUser(user).orElseThrow(() -> new RuntimeException("Error found"));
        else
           return user;
    }
}
