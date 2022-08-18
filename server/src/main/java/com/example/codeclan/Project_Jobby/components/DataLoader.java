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
      LocalDate date2 = LocalDate.of(2021, 7, 23);
      User user1 = new User("Josh", "McCormack", "joshmcc@gmail.com", "password123", dob);
      User user2 = new User("James", "Hood", "JHood@gmail.com", "password321", dob);
      userRepository.save(user1);
      userRepository.save(user2);
      Job job1 = new Job("Fanduel", "Junior Software Developer", "Glasgow", 28000, 32000, date1,"Description goes here",
        2, "www.abc.com",  true, false);
      jobRepository.save(job1);
      Job job2 = new Job("Energsys", "Graduate Software Engineer", "Edinburgh", 29000, 34000, date2, "Job description goes here v 2.0",
              5, "www.energsys.com", false, true);
      jobRepository.save(job2);
      Event event1 = new Event(EventType.VIRTUALINTERVIEW, "A virtual interview with bob about", user1, job1);
      eventRepository.save(event1);

      user1.addEvent(event1);
      userRepository.save(user1);
      user1.addFaveJob(job1);
      userRepository.save(user1);
      user2.addAppliedJob(job2);
      userRepository.save(user2);

      job1.addEvent(event1);
      jobRepository.save(job1);
      job1.addUserFave(user1);
      jobRepository.save(job1);
      job2.addUserApplied(user2);



    }

}