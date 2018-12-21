var Letter = function (character) {
    this.character = character;
    this.isGuessed = false;
    this.returnLetter = function () {
        if (this.isGuessed){
            return character.toString();
        }else{
            return "_";
        };
    };
    this.guess = function (input) {
        if (this.character === input){
            this.isGuessed = true;
        }
    }
};

// var testLetter = new Letter("a");
// console.log(testLetter);
module.exports = Letter;

