var inquirer = require("inquirer");
var Word = require('./word');
var userGuesses = 10;
var userInput = "";
var wordBank = ["Leslie Knope", "Ron Swanson", "April Ludgate", "Andy Dwyer", "Ben Wyatt", "Donna Meagle"]

function pickWord () {
       
    for (var i = 0; i < wordBank.length; i++){
        var guessWord = new Word(wordBank[i]);
    }
        // console.log(guessWord);
    
}
function start () {
    pickWord(); 
    inquirer.prompt(
        {
            name: userInput,
            type: input,
            message: "Guess a letter!"
        }
    ).then(function(){
        userGuesses -= 1;
        console.log("Guesses remaining: " + userGuesses);
    })
};

start();
//run input through the word function to get lines