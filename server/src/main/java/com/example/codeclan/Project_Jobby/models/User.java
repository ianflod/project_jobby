package com.example.codeclan.Project_Jobby.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;


    @JsonIgnore
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "fave_job_users",
            joinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "job_id", nullable = false, updatable = false)}
    )
    private List<Job> faveJobs;

    @JsonIgnoreProperties({"userApplied"})
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "applied_job_users",
            joinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "job_id", nullable = false, updatable = false)}
    )
    private List<Job> appliedJobs;

    @JsonIgnore
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Event> events;
    @Column(name = "date_of_birth")
    private LocalDate dob;
    // @Column(name = "is_admin")
    // private boolean isAdmin;

    public User(String firstName, String lastName, String email, String password, LocalDate dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.faveJobs = new ArrayList<>();
        this.appliedJobs = new ArrayList<>();
        this.events = new ArrayList<>();
        this.dob = dob;
    }

    public User() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
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
