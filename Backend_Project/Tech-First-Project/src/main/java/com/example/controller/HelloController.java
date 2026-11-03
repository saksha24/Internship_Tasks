package com.example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Student;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello World";
    }
    
    @GetMapping("/student")
    public Student getStudent() {

        Student student = new Student();

        student.setId(1);
        student.setName("Sakshi");
        student.setCourse("MCA");

        return student;
    }
}