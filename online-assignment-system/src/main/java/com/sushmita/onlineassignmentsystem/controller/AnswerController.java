package com.sushmita.onlineassignmentsystem.controller;

import com.sushmita.onlineassignmentsystem.model.Answer;
import com.sushmita.onlineassignmentsystem.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/answers")
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @GetMapping("/student/{id}")
    public List<Answer> getByStudentId(@PathVariable long id){
        return answerService.getByStudentId(id);
    }

    @GetMapping("/teacher/{id}")
    public List<Answer> getByTeacherId(@PathVariable long id){
        return answerService.getByTeacherId(id);
    }

    @PostMapping("/save")
    public Answer addAnswer(@RequestBody Answer answer){
        return answerService.saveOrUpdateAnswer(answer);
    }

    @PutMapping("/edit")
    public Answer editAnswer(@RequestBody Answer answer){
        return answerService.saveOrUpdateAnswer(answer);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable long id){
       answerService.delete(id);
    }

    @GetMapping("/count")
    public double count(){
        return answerService.countAll();
    }

    @GetMapping("/{id}")
    public Answer getById(@PathVariable long id){
        return answerService.findById(id);
    }
}