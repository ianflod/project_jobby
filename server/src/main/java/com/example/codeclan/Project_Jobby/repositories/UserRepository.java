package com.example.codeclan.Project_Jobby.repositories;

import com.example.codeclan.Project_Jobby.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {



}