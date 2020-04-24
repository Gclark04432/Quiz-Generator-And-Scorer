package com.example.quizgenerator.Components;

import com.example.quizgenerator.models.Player;
import com.example.quizgenerator.models.Question;
import com.example.quizgenerator.models.Round;
import com.example.quizgenerator.repositories.PlayerRepository;
import com.example.quizgenerator.repositories.QuestionRepository;
import com.example.quizgenerator.repositories.RoundRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    RoundRepository roundRepository;

    @Autowired
    QuestionRepository questionRepository;

    public void run(ApplicationArguments args) throws Exception {

//        Round round1 = new Round(1);
//        roundRepository.save(round1);
//
//        Round round2 = new Round(2 );
//        roundRepository.save(round2);
//
//        Round round3 = new Round(3);
//        roundRepository.save(round3);
//
//        Round round4 = new Round(4);
//        roundRepository.save(round4);
//
//        ArrayList<String> wrongAnswers1 = new ArrayList();
//        wrongAnswers1.add("100 V-Bucks");
//        wrongAnswers1.add("500 V-Bucks");
//        wrongAnswers1.add("AN arm and a leg");
//        Question question1 = new Question("How much does the battle pass cost in Fortnite chapter 2?", "950 V-Bucks", wrongAnswers1, round1);
//        questionRepository.save(question1);
//
//        ArrayList<String> wrongAnswers2 = new ArrayList<String>();
//        wrongAnswers2.add("Massive Bucket");
//        wrongAnswers2.add("Catch it in your teeth");
//        wrongAnswers2.add("Throw a Net");
//        Question question2 = new Question("You can catch fish in Fortnite using which of the following methods:", "A Fishing Rod", wrongAnswers2, round1);
//        questionRepository.save(question2);
//
//        ArrayList<String> wrongAnswers3 = new ArrayList<String>();
//        wrongAnswers3.add("Honolulu");
//        wrongAnswers3.add("Battle Island");
//        wrongAnswers3.add("Lama Island");
//        Question question3 = new Question("What is the name of the island in the middle of the Fortnite map?", "Eye Land", wrongAnswers3, round1);
//        questionRepository.save(question3);
//
//        ArrayList<String> wrongAnswers4 = new ArrayList<String>();
//        wrongAnswers4.add("12");
//        wrongAnswers4.add("9");
//        wrongAnswers4.add("8");
//        Question question4 = new Question("How many seasons of Fortnite have there been so far?", "10", wrongAnswers4, round1);
//        questionRepository.save(question4);
//
//        ArrayList<String> wrongAnswers5 = new ArrayList<String>();
//        wrongAnswers5.add("4");
//        wrongAnswers5.add("6");
//        wrongAnswers5.add("It Never Ends");
//        Question question5 = new Question("How many weeks does each Mario Kart Tour last", "2", wrongAnswers5, round2);
//        questionRepository.save(question5);
//
//        ArrayList<String> wrongAnswers6 = new ArrayList<String>();
//        wrongAnswers6.add("Quinky");
//        wrongAnswers6.add("Binky");
//        wrongAnswers6.add("Sharpy");
//        Question question6 = new Question("Which of these characters squirts ink at players?", "Blooper", wrongAnswers6, round2);
//        questionRepository.save(question6);
//
//        ArrayList<String> wrongAnswers7 = new ArrayList<String>();
//        wrongAnswers7.add("Petrol");
//        wrongAnswers7.add("Common Sense");
//        wrongAnswers7.add("Star");
//        Question question7 = new Question("Which of these Mario Kart bonuses make your kart go the fastest", "Golden Mushroom", wrongAnswers7, round2);
//        questionRepository.save(question7);
//
//        ArrayList<String> wrongAnswers8 = new ArrayList<String>();
//        wrongAnswers8.add("Inhale as many balloons as possible");
//        wrongAnswers8.add("Pop your own balloons");
//        wrongAnswers8.add("Make balloon animals");
//        Question question8 = new Question("How do you score points in Mario Kart Balloon Battles?", "Pop other players' ballons", wrongAnswers8, round2);
//        questionRepository.save(question8);
//
//        ArrayList<String> wrongAnswers9 = new ArrayList<String>();
//        wrongAnswers9.add("A pile of blocks");
//        wrongAnswers9.add("A group of pandas");
//        wrongAnswers9.add("A middleclass YOB");
//        Question question9 = new Question("In Minecraft what is a MOB?", "A moving character", wrongAnswers9, round3);
//        questionRepository.save(question9);
//
//        ArrayList<String> wrongAnswers10 = new ArrayList<String>();
//        wrongAnswers10.add("Creeper");
//        wrongAnswers10.add("Ghast");
//        wrongAnswers10.add("Zombie");
//        Question question10 = new Question("Which of these is NOT a hostile MOB", "Llama", wrongAnswers10, round3);
//        questionRepository.save(question10);
//
//        ArrayList<String> wrongAnswers11 = new ArrayList<String>();
//        wrongAnswers11.add("Dawn Gail Clark");
//        wrongAnswers11.add("Rabbit");
//        wrongAnswers11.add("Mooshroom");
//        Question question11 = new Question("Which of the following is a MOB that can see players through walls in Minecraft?", "Silverfish", wrongAnswers10, round3);
//        questionRepository.save(question11);
//
//        ArrayList<String> wrongAnswers12 = new ArrayList<String>();
//        wrongAnswers12.add("Pluto");
//        wrongAnswers12.add("The Moon");
//        wrongAnswers12.add("The Mugga");
//        Question question12 = new Question("Which one of the following is larger than the Earth?", "The Sun", wrongAnswers10, round3);
//        questionRepository.save(question12);
//
//        ArrayList<String> wrongAnswers13 = new ArrayList<String>();
//        wrongAnswers13.add("Steve");
//        wrongAnswers13.add("Eddie Murphy");
//        wrongAnswers13.add("Matilda");
//        Question question13 = new Question("What is the name of the talking Donkey in the Shrek movies?", "Donkey", wrongAnswers10, round4);
//        questionRepository.save(question13);
//
//
//        ArrayList<String> wrongAnswers14 = new ArrayList<String>();
//        wrongAnswers14.add("Margaret from number 43 on holidays in Benidorm");
//        wrongAnswers14.add("Killer Whale");
//        wrongAnswers14.add("Catfish");
//        Question question14 = new Question("What is the biggest animal in the sea?", "The Blue Whale", wrongAnswers10, round4);
//        questionRepository.save(question14);
//
//
//        ArrayList<String> wrongAnswers15 = new ArrayList<String>();
//        wrongAnswers15.add("Mars");
//        wrongAnswers15.add("Jupiter");
//        wrongAnswers15.add("Planet of the Apes");
//        Question question15 = new Question("Which planet in our Solar System is famous for it's massive rings?", "Saturn", wrongAnswers10, round4);
//        questionRepository.save(question15);
//
//
//        ArrayList<String> wrongAnswers16 = new ArrayList<String>();
//        wrongAnswers16.add("20");
//        wrongAnswers16.add("30");
//        wrongAnswers16.add("16");
//        Question question16 = new Question("How many letters are in the alphabet?", "26", wrongAnswers10, round4);
//        questionRepository.save(question16);

    }

}
