package com.example.codeclan.Project_Jobby.repositories;

import com.example.codeclan.Project_Jobby.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {



}