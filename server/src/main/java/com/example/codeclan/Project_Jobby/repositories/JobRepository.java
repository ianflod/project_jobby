package com.example.codeclan.Project_Jobby.repositories;

import com.example.codeclan.Project_Jobby.models.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {
  List<Job> findByIsFavorite(Boolean isFavorite);

  List<Job> findByAppliedFor(Boolean appliedFor);



}