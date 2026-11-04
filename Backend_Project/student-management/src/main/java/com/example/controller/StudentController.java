package com.example.controller;

import com.example.entity.Student;
import com.example.service.StudentService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    // CREATE STUDENT
    @PostMapping
    public ResponseEntity<Student> createStudent(
            @Valid @RequestBody Student student) {

        Student savedStudent =
                studentService.createStudent(student);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedStudent);
    }

    // GET ALL STUDENTS
    @GetMapping
    public ResponseEntity<List<Student>> getAllStudents() {

        return ResponseEntity.ok(
                studentService.getAllStudents()
        );
    }

    // GET STUDENT BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                studentService.getStudentById(id)
        );
    }

    // UPDATE STUDENT
    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(
            @PathVariable Long id,
            @Valid @RequestBody Student student) {

        Student updatedStudent =
                studentService.updateStudent(id, student);

        return ResponseEntity.ok(updatedStudent);
    }

    // DELETE STUDENT
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(
            @PathVariable Long id) {

        studentService.deleteStudent(id);

        return ResponseEntity.noContent().build();
    }
}