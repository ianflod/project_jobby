package com.example.codeclan.Project_Jobby.models;

import com.example.codeclan.Project_Jobby.enums.EventType;
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "events")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "event")
    private EventType eventType;
    @Column(name = "comments")
    private String comments;
    @Column(name = "user")
    private User user;
    @Column(name = "job")
    private Job job;
    @Column(name = "date")
    private LocalDateTime date;

    public Event(EventType eventType, String comments, User user, Job job) {
        this.eventType = eventType;
        this.comments = comments;
        this.user = user;
        this.job = job;
        this.date = LocalDateTime.now();
    }

    public Event(){

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public EventType getEventType() {
        return eventType;
    }

    public void setEventType(EventType eventType) {
        this.eventType = eventType;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Job getJob() {
        return job;
    }

    public void setJob(Job job) {
        this.job = job;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}
