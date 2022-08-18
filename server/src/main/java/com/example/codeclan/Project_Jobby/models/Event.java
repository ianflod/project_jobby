package com.example.codeclan.Project_Jobby.models;

import com.example.codeclan.Project_Jobby.enums.EventType;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "events")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    @Column(name = "event")
    private EventType eventType;
    @Column(name = "comments")
    private String comments;
    @JsonIgnoreProperties({"events"})
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    @JsonIgnoreProperties({"events"})
    @ManyToOne
    @JoinColumn(name = "job_id", nullable = false)
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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
