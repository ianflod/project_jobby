package com.example.codeclan.Project_Jobby.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
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
    private Date date;
    @Column(name="job_desc")
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

    @JsonIgnoreProperties({"jobs"})
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @JsonIgnoreProperties
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE) // WHAT DOES THIS DO?
    @JoinTable(
            name="jobs_events",
            joinColumns = {@JoinColumn(name = "event_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "event_id", nullable = false, updatable = false)}
    )
    private List<Event> events;

    public Job(String employerName, String jobTitle, String locationName, int minimumSalary, int maximumSalary, Date date, String jobDescription, int applications, String jobUrl,  Boolean isFavorite, Boolean appliedFor) {
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
    }

    public Job(){

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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
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

}


