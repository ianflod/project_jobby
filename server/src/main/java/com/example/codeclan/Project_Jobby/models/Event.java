package com.example.codeclan.Project_Jobby.models;

import com.example.codeclan.Project_Jobby.enums.EventType;

import java.time.LocalDateTime;

public class Event {

    private long id;
    private EventType eventType;
    private String comments;
    private User user;
    private Job job;
    private LocalDateTime date;

    public Event(EventType eventType, String comments, User user, Job job) {
        this.eventType = eventType;
        this.comments = comments;
        this.user = user;
        this.job = job;
        this.date = LocalDateTime.now();
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
