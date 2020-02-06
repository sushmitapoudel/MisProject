package com.sushmita.onlineassignmentsystem.service.impl;

import com.sushmita.onlineassignmentsystem.model.Answer;
import com.sushmita.onlineassignmentsystem.model.Question;
import com.sushmita.onlineassignmentsystem.model.Student;
import com.sushmita.onlineassignmentsystem.repository.AnswerRepository;
import com.sushmita.onlineassignmentsystem.repository.QuestionRepository;
import com.sushmita.onlineassignmentsystem.repository.StudentRepository;
import com.sushmita.onlineassignmentsystem.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class AnswerServiceImpl implements AnswerService {
    @Autowired
    private AnswerRepository answerRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public List<Answer> getByStudentId(long id) {
        return answerRepository.findByStudent_Id(id);
    }

    @Override
    public List<Answer> getByTeacherId(long id) {
        return answerRepository.findAllByQuestion_Teacher_Id(id);
    }

    @Override
    public Answer saveOrUpdateAnswer(Answer answer) {
        Student student = studentRepository.save(answer.getStudent());
        answer.setStudent(student);

        Question question = questionRepository.save(answer.getQuestion());
        answer.setQuestion(question);

        return answerRepository.save(answer);
    }

    @Override
    public void delete(long id) {
        answerRepository.deleteById(id);
    }

    @Override
    public double countAll() {
       return answerRepository.count();
    }

    @Override
    public Answer findById(long id) {
        return answerRepository.findById(id).orElseThrow(() ->  new RuntimeException("Not Found"));
    }
}
