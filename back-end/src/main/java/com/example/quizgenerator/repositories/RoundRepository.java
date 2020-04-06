package com.example.quizgenerator.repositories;

import com.example.quizgenerator.models.Round;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface RoundRepository extends JpaRepository<Round, Long> {
}
