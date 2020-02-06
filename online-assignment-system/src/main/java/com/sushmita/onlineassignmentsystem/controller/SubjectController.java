package com.sushmita.onlineassignmentsystem.controller;

import com.sushmita.onlineassignmentsystem.model.Subject;
import com.sushmita.onlineassignmentsystem.repository.SubjectRepository;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/subjects")
public class SubjectController {

    @Autowired
    private SubjectRepository subjectRepository;

    @GetMapping("/list")
    public List<Subject> getAll(){
        return subjectRepository.findAll();
    }

    @PostMapping("/add")
    public Subject add(@RequestBody Subject subject){
       return subjectRepository.save(subject);
    }
    @GetMapping("/grade/{grade}")
    public List<Subject> getByGradeAndFaculty(@PathVariable String grade, @RequestParam String faculty){
        return subjectRepository.findByGradeAndFaculty(grade, faculty);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable long id){
        subjectRepository.deleteById(id);
    }

    @GetMapping("/count")
    public double count(){
        return subjectRepository.count();
    }
}
