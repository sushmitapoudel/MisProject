package com.sushmita.onlineassignmentsystem.service;

import com.sushmita.onlineassignmentsystem.model.Answer;

import java.util.List;

public interface AnswerService {

    List<Answer> getByStudentId(long id);

    List<Answer> getByTeacherId(long id);

    Answer saveOrUpdateAnswer(Answer answer);

    void  delete(long id);

    double countAll();

    Answer findById(long id);
}
