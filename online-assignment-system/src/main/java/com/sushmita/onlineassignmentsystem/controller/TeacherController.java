package com.sushmita.onlineassignmentsystem.controller;

import com.sushmita.onlineassignmentsystem.model.Teacher;
import com.sushmita.onlineassignmentsystem.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teachers")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @GetMapping("/list")
    public List<Teacher> getAll(){
        return teacherService.getAllTeacher();
    }

    @PostMapping("/save")
    public Teacher addTeacher(@RequestBody Teacher teacher){
        return teacherService.saveOrUpdateTeacher(teacher);
    }

    @PutMapping("/edit")
    public Teacher
    editUser(@RequestBody Teacher teacher){
        return teacherService.saveOrUpdateTeacher(teacher);
    }

    @GetMapping("/{id}")
    public Teacher getById(@PathVariable long id){
        return teacherService.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable long id){

        teacherService.delete(id);
    }

    @GetMapping("/count")
    public double count(){
        return teacherService.countAll();
    }

}
