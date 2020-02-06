package com.sushmita.onlineassignmentsystem.service;

import com.sushmita.onlineassignmentsystem.model.User;

import java.util.List;

public interface UserService {
   Object getByUsernameAndPassword(String username, String password);

}
