package com.example.codeclan.Project_Jobby.components;


import com.example.codeclan.Project_Jobby.enums.EventType;
import com.example.codeclan.Project_Jobby.models.Event;
import com.example.codeclan.Project_Jobby.models.Job;
import com.example.codeclan.Project_Jobby.models.User;
import com.example.codeclan.Project_Jobby.repositories.EventRepository;
import com.example.codeclan.Project_Jobby.repositories.JobRepository;
import com.example.codeclan.Project_Jobby.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    JobRepository jobRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    EventRepository eventRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args){
      LocalDate date1 = LocalDate.of(2020, 6, 20);
      LocalDate dob = LocalDate.of(1995,4,26);
      User user1 = new User("Josh", "McCormack", "joshmcc@gmail.com", "password123", dob);
      userRepository.save(user1);
      Job job1 = new Job("Fanduel", "Junior Software Developer", "Glasgow", 28000, 32000, date1,"Description goes here",
        2, "www.abc.com",  true, false, user1);
      jobRepository.save(job1);
      Event event1 = new Event(EventType.VIRTUALINTERVIEW, "A virtual interview with bob about", user1, job1);
      eventRepository.save(event1);

      user1.addEvent(event1);
      user1.addAppliedJob(job1);
      userRepository.save(user1);

      job1.addEvent(event1);
      jobRepository.save(job1);

    }

}