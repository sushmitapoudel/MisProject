package com.sushmita.onlineassignmentsystem.service.impl;

import com.sushmita.onlineassignmentsystem.model.Question;
import com.sushmita.onlineassignmentsystem.model.Teacher;
import com.sushmita.onlineassignmentsystem.repository.QuestionRepository;
import com.sushmita.onlineassignmentsystem.repository.TeacherRepository;
import com.sushmita.onlineassignmentsystem.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
@Service
@Transactional
public class QuestionServiceImpl implements QuestionService {
    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public List<Question> getAllQuestion(long teacherId) {
        return questionRepository.findAllByTeacher_Id(teacherId);
    }

    @Override
    public Question saveOrUpdateQuestion(Question question) {
        return questionRepository.save(question);
    }

    @Override
    public List<Question> getBySubjectAndClass(String subject, String grade) {
        return questionRepository.findAllBySubject_NameAndSubject_GradeAndDeadLineAfter(subject, grade, LocalDate.now());
    }

    @Override
    public void delete(long id) {
        questionRepository.deleteById(id);
    }

    @Override
    public double countAll() {
        return questionRepository.count();
    }

    @Override
    public List<Question> getAll() {
        return questionRepository.findAll();
    }

    @Override
    public List<Question> getAllQuestionForStudent(String grade, String faculty) {
        return questionRepository.findAllBySubject_GradeAndSubject_Faculty(grade, faculty);
    }
}
