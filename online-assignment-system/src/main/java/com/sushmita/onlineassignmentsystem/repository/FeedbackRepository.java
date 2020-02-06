package com.sushmita.onlineassignmentsystem.repository;

import com.sushmita.onlineassignmentsystem.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FeedbackRepository extends JpaRepository<Feedback,Long> {

    Optional<Feedback> findByAnswer_Id(long id);
}
