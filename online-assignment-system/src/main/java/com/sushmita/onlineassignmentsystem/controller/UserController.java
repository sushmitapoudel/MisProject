package com.sushmita.onlineassignmentsystem.controller;

import com.sushmita.onlineassignmentsystem.model.User;
import com.sushmita.onlineassignmentsystem.repository.UserRepository;
import com.sushmita.onlineassignmentsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;

@RestController
@RequestMapping
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Object login(@RequestBody User userJson) throws ServletException {
        if (userJson.getUsername() == null || userJson.getPassword() == null) {
            throw new ServletException("Please fill the username and password");
        }
        else {
          return userService.getByUsernameAndPassword(userJson.getUsername(), userJson.getPassword());
        }

        }

    }
