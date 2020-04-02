package com.example.quizgenerator.Components;

import com.example.quizgenerator.models.Player;
import com.example.quizgenerator.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PlayerRepository playerRepository;

    public void run(ApplicationArguments args) throws Exception {

        Player player1 = new Player("Gary", 2);
        playerRepository.save(player1);
    }
}
