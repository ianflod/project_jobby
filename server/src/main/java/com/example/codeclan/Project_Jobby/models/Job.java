package com.example.codeclan.Project_Jobby.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="jobs")
public class Job implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="employer_name")
    private String employerName;
    @Column(name="job_title")
    private String jobTitle;
    @Column(name="location_name")
    private String locationName;
    @Column(name="min_salary")
    private int minimumSalary;
    @Column(name="max_salary")
    private int maximumSalary;
    @Column(name="date")
    private LocalDate date;
    @Column(name="job_desc", length=6064)
    private String jobDescription;
    @Column(name="no_of_applications")
    private int applications;
    @Column(name="job_url")
    private String jobUrl;
//    @Column(name="comments")
//    private String comments;
    @Column(name="favorite")
    private Boolean isFavorite;
    @Column(name="applied")
    private Boolean appliedFor;


    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "fave_jobs_users",
            joinColumns = {@JoinColumn(name = "job_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)}
    )
    private List<User> userFave;


    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    @JoinTable(
            name = "applied_jobs_users",
            joinColumns = {@JoinColumn(name = "job_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)}
    )
    private List<User> userApplied;

    @JsonIgnore
    @OneToMany(mappedBy = "job")
    private List<Event> events;


    public Job(String employerName, String jobTitle, String locationName, int minimumSalary, int maximumSalary,
      LocalDate date, String jobDescription, int applications, String jobUrl,  Boolean isFavorite, Boolean appliedFor) {
        this.employerName = employerName;
        this.jobTitle = jobTitle;
        this.locationName = locationName;
        this.minimumSalary = minimumSalary;
        this.maximumSalary = maximumSalary;
        this.date = date;
        this.jobDescription = jobDescription;
        this.applications = applications;
        this.jobUrl = jobUrl;
        this.isFavorite = isFavorite;
        this.appliedFor = appliedFor;
        // questions over events being here
        this.events = new ArrayList<>();
        this.userFave = new ArrayList<>();
        this.userApplied = new ArrayList<>();
    }

    public Job(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmployerName() {
        return employerName;
    }

    public void setEmployerName(String employerName) {
        this.employerName = employerName;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getLocationName() {
        return locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }

    public int getMinimumSalary() {
        return minimumSalary;
    }

    public void setMinimumSalary(int minimumSalary) {
        this.minimumSalary = minimumSalary;
    }

    public int getMaximumSalary() {
        return maximumSalary;
    }

    public void setMaximumSalary(int maximumSalary) {
        this.maximumSalary = maximumSalary;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public int getApplications() {
        return applications;
    }

    public void setApplications(int applications) {
        this.applications = applications;
    }

    public String getJobUrl() {
        return jobUrl;
    }

    public void setJobUrl(String jobUrl) {
        this.jobUrl = jobUrl;
    }

    public Boolean getFavorite() {
        return isFavorite;
    }

    public void setFavorite(Boolean favorite) {
        isFavorite = favorite;
    }

    public Boolean getAppliedFor() {
        return appliedFor;
    }

    public void setAppliedFor(Boolean appliedFor) {
        this.appliedFor = appliedFor;
    }

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }

    public void addEvent(Event event){
        this.events.add(event);
    }

    public List<User> getUserFave() {
        return userFave;
    }

    public void setUserFave(List<User> userFave) {
        this.userFave = userFave;
    }

    public List<User> getUserApplied() {
        return userApplied;
    }

    public void setUserApplied(List<User> userApplied) {
        this.userApplied = userApplied;
    }

    public void addUserFave(User userFave) {
        this.userFave.add(userFave);
    }

    public void addUserApplied(User userApplied) {
        this.userApplied.add(userApplied);
    }
}


