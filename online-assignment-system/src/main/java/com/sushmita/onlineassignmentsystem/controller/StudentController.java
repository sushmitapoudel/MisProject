package com.sushmita.onlineassignmentsystem.controller;

import com.sushmita.onlineassignmentsystem.model.Student;
import com.sushmita.onlineassignmentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")

public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/list")
    public List<Student> getAll(){
        return studentService.getAllStudent();
    }

    @PostMapping("/save")
    public Student addStudent(@RequestBody Student student){
        return studentService.saveOrUpdateStudent(student);
    }

    @PutMapping("/edit")
    public Student editUser(@RequestBody Student student){
        return studentService.saveOrUpdateStudent(student);
    }

    @GetMapping("/{id}")
    public Student getById(@PathVariable long id){
        return studentService.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable long id){

        studentService.delete(id);
    }

    @GetMapping("/count")
    public double count(){
        return studentService.countAll();
    }
}
