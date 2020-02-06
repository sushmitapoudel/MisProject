package com.sushmita.onlineassignmentsystem.service;

import com.sushmita.onlineassignmentsystem.model.Feedback;

import java.util.List;

public interface FeedbackService {

    List<Feedback> getAllFeedback();

    Feedback saveOrUpdateFeedback( Feedback feedback);

    Feedback getByAnswerId(long id);
}
