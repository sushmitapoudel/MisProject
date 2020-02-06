package com.sushmita.onlineassignmentsystem.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "questionId")
    private Long id;
    @ManyToOne
    @JoinColumn(name = "subject_id")
    private Subject subject;
    private LocalDate deadLine;
    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;
    @Column(name = "name")
    private String name;

    public Question() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public LocalDate getDeadLine() {
        return deadLine;
    }

    public void setDeadLine(LocalDate deadline) {
        this.deadLine = deadline;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
