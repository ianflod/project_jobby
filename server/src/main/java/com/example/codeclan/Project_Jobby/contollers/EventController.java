package com.example.codeclan.Project_Jobby.contollers;

import com.example.codeclan.Project_Jobby.models.Event;
import com.example.codeclan.Project_Jobby.repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EventController {

    @Autowired
    EventRepository eventRepository;

    // GET All
    @GetMapping(value = "/events")
    public ResponseEntity<List<Event>> getAllEvents(){
        return new ResponseEntity<>(eventRepository.findAll(), HttpStatus.OK);
    }

    // GET One
    @GetMapping(value = "/events/{id}")
    public ResponseEntity getEvents(@PathVariable Long id){
        return new ResponseEntity<>(eventRepository.findById(id), HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping(value = "/events")
    public ResponseEntity<Event> postEvent(@RequestBody Event event) {
        eventRepository.save(event);
        return new ResponseEntity<>(event, HttpStatus.OK);
    }

    @CrossOrigin
    @DeleteMapping(value = "/events/{id}")
    public ResponseEntity<Event> deleteEvent(@PathVariable Long id) {
        Event found = eventRepository.getOne(id);
        eventRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @CrossOrigin
    @PutMapping(value = "/events/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event event) {
        Event found = eventRepository.getOne(id);
        found.setJob(event.getJob());
        found.setUser(event.getUser());
        found.setDate(event.getDate());
        found.setComments(event.getComments());
        found.setEventType(event.getEventType());
        eventRepository.save(found);
        return new ResponseEntity<>(found, HttpStatus.OK);
    }

}
