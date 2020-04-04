package com.example.quizgenerator.Components;

import com.example.quizgenerator.models.Player;
import com.example.quizgenerator.models.Question;
import com.example.quizgenerator.repositories.PlayerRepository;
import com.example.quizgenerator.repositories.QuestionRepository;
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
    QuestionRepository questionRepository;
    private Object List;

    public void run(ApplicationArguments args) throws Exception {

        ArrayList<String> wrongAnswers1 = new ArrayList<String>();
        wrongAnswers1.add("The Chicken Factory");
        wrongAnswers1.add("MCDonald's");
        wrongAnswers1.add("The Galafield");
        Question question1 = new Question("What do you call the play area in front of McLean Primary School", "Mugga", wrongAnswers1);
        questionRepository.save(question1);

        ArrayList<String> wrongAnswers2 = new ArrayList<String>();
        wrongAnswers2.add("Black");
        wrongAnswers2.add("Purple");
        wrongAnswers2.add("The Colour of Love");
        Question question2 = new Question("In karate, what is the next belt after white", "Orange & White", wrongAnswers2);
        questionRepository.save(question2);

        ArrayList<String> wrongAnswers3 = new ArrayList<String>();
        wrongAnswers3.add("Pigeoto");
        wrongAnswers3.add("Psyduck");
        wrongAnswers3.add("Harry Potter");
        Question question3 = new Question("Who does Pikachu evolve into", "Raichu", wrongAnswers3);
        questionRepository.save(question3);

        ArrayList<String> wrongAnswers4 = new ArrayList<String>();
        wrongAnswers4.add("Spiders");
        wrongAnswers4.add("Cows");
        wrongAnswers4.add("The Dark");
        Question question4 = new Question("In Minecraft what are Creepers scared of?", "Ocelots", wrongAnswers4);
        questionRepository.save(question4);

        ArrayList<String> wrongAnswers5 = new ArrayList<String>();
        wrongAnswers5.add("Blue");
        wrongAnswers5.add("Green");
        wrongAnswers5.add("Red");
        Question question5 = new Question("What is the colour of the least powerful weapons in Fortnite", "Grey", wrongAnswers5);
        questionRepository.save(question5);

        ArrayList<String> wrongAnswers6 = new ArrayList<String>();
        wrongAnswers6.add("Ronald McDonald");
        wrongAnswers6.add("Donald Trump");
        wrongAnswers6.add("Bart Simpson");
        Question question6 = new Question("What is the name of the person who donated Pittencreif Park to Dunfermline", "Andrew Carnegie", wrongAnswers6);
        questionRepository.save(question6);

        ArrayList<String> wrongAnswers7 = new ArrayList<String>();
        wrongAnswers7.add("Nike");
        wrongAnswers7.add("Nintendo");
        wrongAnswers7.add("Adidas");
        Question question7 = new Question("Which company makes the Playstation4", "Sony", wrongAnswers7);
        questionRepository.save(question7);

        ArrayList<String> wrongAnswers8 = new ArrayList<String>();
        wrongAnswers8.add("Hogwarts");
        wrongAnswers8.add("Fart High School");
        wrongAnswers8.add("Woodmill");
        Question question8 = new Question("What is the nearest High School to McLean Primary School", "Queen Anne High", wrongAnswers8);
        questionRepository.save(question8);

        ArrayList<String> wrongAnswers9 = new ArrayList<String>();
        wrongAnswers9.add("The Rig");
        wrongAnswers9.add("The Agency");
        wrongAnswers9.add("The Yacht");
        Question question9 = new Question("Which of these is not a base in Fortnite", "The Horse Shed", wrongAnswers9);
        questionRepository.save(question9);

        ArrayList<String> wrongAnswers10 = new ArrayList<String>();
        wrongAnswers10.add("Chargrilled Steak");
        wrongAnswers10.add("Karma-karma-karma-karma-karmachameleon");
        wrongAnswers10.add("A bunny rabbit");
        Question question10 = new Question("Who does Charmander evolve into", "Charmeleon", wrongAnswers10);
        questionRepository.save(question10);

    }

}
