var Letter = require("./letter");

var Word = function (string) {
    this.newLetters = [];
    var splitString = string.split("");
    for (var i = 0; i < splitString.length; i++){
        this.newLetters.push(new Letter(splitString[i]));       
    }
    this.lettersToString = function () {
        var wordString = "";
        for (let j = 0; j < this.newLetters.length; j++) {
            const letterObject = this.newLetters[j];
            wordString += letterObject.returnLetter();
        }
        console.log(wordString)
    };
    this.letterGuessed = function(input) {
        for (let k = 0; k < this.newLetters.length; k++){
            this.newLetters[k].guess(input);
        }
    }
}

// var testWord = new Word("Kendra");
// console.log(testWord.newLetters);
module.exports = Word;