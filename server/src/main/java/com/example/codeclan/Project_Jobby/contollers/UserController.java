package com.example.codeclan.Project_Jobby.contollers;

import com.example.codeclan.Project_Jobby.models.User;
import com.example.codeclan.Project_Jobby.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping(value="/users")
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/users/{id}")
    public ResponseEntity getUsers(@PathVariable Long id){
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }
    @CrossOrigin
    @PostMapping(value = "/users")
    public ResponseEntity<User> postUser(@RequestBody User user) {
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }
    @CrossOrigin
    @DeleteMapping(value = "/users/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable Long id) {
        User found = userRepository.getOne(id);
        userRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
    @CrossOrigin
    @PutMapping(value = "/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        User found = userRepository.getOne(id);
        found.setFirstName(user.getFirstName());
        found.setLastName(user.getLastName());
        found.setEmail(user.getEmail());
        found.setPassword(user.getPassword());
        found.setDob(user.getDob());
        found.setEvents(user.getEvents());
        found.setAppliedJobs(user.getAppliedJobs());
        found.setFaveJobs(user.getFaveJobs());
        userRepository.save(found);
        return new ResponseEntity<>(found, HttpStatus.OK);
    }

}
