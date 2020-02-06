package com.sushmita.onlineassignmentsystem.controller;

import com.sushmita.onlineassignmentsystem.model.Question;
import com.sushmita.onlineassignmentsystem.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping("/list")
    public List<Question> getAll(@RequestParam long id){
        return questionService.getAllQuestion( id);
    }

    @GetMapping("/all")
    public List<Question> getList(){
        return questionService.getAll();
    }

    @PostMapping("/save")
    public Question addQuestion(@RequestBody Question question){
        return questionService.saveOrUpdateQuestion(question);
    }

    @PutMapping("/edit")
    public Question editQuestion(@RequestBody Question question){
        return questionService.saveOrUpdateQuestion(question);
    }

    @GetMapping("/grade/{grade}/subject/{subject}")
    public List<Question> getAll(@PathVariable String grade,@PathVariable String subject){
        return questionService.getBySubjectAndClass(subject, grade);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable long id){

        questionService.delete(id);
    }

    @GetMapping("/count")
    public double count(){
        return questionService.countAll();
    }

    @GetMapping("/grade/{grade}/faculty/{faculty}")
    public List<Question> getForStudent(@PathVariable String grade,@PathVariable String faculty){
        return questionService.getAllQuestionForStudent(grade, faculty);
    }
}
