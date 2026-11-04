package com.example.service;

import com.example.entity.Student;
import com.example.repository.StudentRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

import java.util.List;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;

    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    // CREATE
    @Override
    public Student createStudent(Student student) {
        student.setId(null);
        return studentRepository.save(student);
    }

    // READ ALL
    @Override
    @Transactional(readOnly = true)
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    // READ BY ID
    @Override
    @Transactional(readOnly = true)
    public Student getStudentById(Long id) {

        return studentRepository.findById(id)
                .orElseThrow(() ->
                        new ResponseStatusException(
                                HttpStatus.NOT_FOUND,
                                "Student not found with ID: " + id
                        ));
    }

    // UPDATE
    @Override
    public Student updateStudent(Long id, Student student) {

        Student existingStudent = getStudentById(id);

        existingStudent.setName(student.getName());
        existingStudent.setEmail(student.getEmail());
        existingStudent.setAge(student.getAge());
        existingStudent.setCourse(student.getCourse());

        return studentRepository.save(existingStudent);
    }

    // DELETE
    @Override
    public void deleteStudent(Long id) {

        Student student = getStudentById(id);

        studentRepository.delete(student);
    }
}