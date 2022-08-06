package com.example.codeclan.Project_Jobby.models;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class User {

    private long id;
    private String firstName;
    private String LastName;
    private String email;
    private String password;
    private List<Job> faveJobs;
    private List<Job> appliedJobs;
    private List<Event> events;
    private LocalDate dob;
    // private boolean isAdmin;


    public User(String firstName, String lastName, String email, String password, LocalDate dob) {
        this.firstName = firstName;
        LastName = lastName;
        this.email = email;
        this.password = password;
        this.faveJobs = new ArrayList<>();
        this.appliedJobs = new ArrayList<>();
        this.events = new ArrayList<>();
        this.dob = dob;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Job> getFaveJobs() {
        return faveJobs;
    }

    public void setFaveJobs(List<Job> faveJobs) {
        this.faveJobs = faveJobs;
    }

    public List<Job> getAppliedJobs() {
        return appliedJobs;
    }

    public void setAppliedJobs(List<Job> appliedJobs) {
        this.appliedJobs = appliedJobs;
    }

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public void addFaveJob(Job job) {
        this.faveJobs.add(job);
    }

    public void addAppliedJob(Job job) {
        this.appliedJobs.add(job);
    }

    public void addEvent(Event event) {
        this.events.add(event);
    }
}
