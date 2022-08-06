package com.example.codeclan.Project_Jobby.components;


import com.example.codeclan.Project_Jobby.models.Job;
import com.example.codeclan.Project_Jobby.repositories.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    JobRepository jobRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args){
    Job job1 = new Job("FanDuel", "Junior Software Developer", "Glasgow", 28000, 32000, "2022-07-31", "Ace Job", 2, "https://www.reed.co.uk/jobs/software-developer-enterprise-software-junior-or-mid/47461682?source=searchResults&filter=%2fjobs%2fjunior-software-developer-jobs-in-glasgow%3fproximity%3d50", true, false );

    }

}