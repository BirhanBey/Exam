var rl = require("readline-sync");

function Oefening(sentence, size) {
  this.sentence = sentence;
  this.size = size;
}

Oefening.prototype.left = function () {
  return this.sentence.substr(0,this.size)
};
Oefening.prototype.right = function () {
    return this.sentence.substr(-this.size, this.sentence.length)
  };
Oefening.prototype.charCount = function () {
    return this.sentence.length;
  };
Oefening.prototype.wordCount = function () {
    return this.sentence.split(" ").length;
  };
Oefening.prototype.vowelCount = function () {
    const vowels = ['i',"a","e","u","o"];
    const vowelSplit = this.sentence.split('');
    let vowelsCount = 0;
    vowelSplit.forEach((el) => {
        for (let i = 0; i < vowels.length - 1; i++) {
            if (el === vowels[i]) {
                vowelsCount++;
            }
        }
    });
    return vowelsCount;
};
Oefening.prototype.capitalsCount = function () {
    let toUpperSize = 0;
    var parcalar = this.sentence.split(" ");
    for (let i = 0; i < parcalar.length - 1; i++) {
        if (parcalar[i].toUpperCase()) {
            toUpperSize++;
        }
    }
    return toUpperSize;
};
Oefening.prototype.rightAppend = function (x) {
    return this.sentence+x;
};
Oefening.prototype.leftAppend = function (x) {
    return x+this.sentence;
};
oneSentence = new Oefening(
  "This is a temporary sentence.",
  10
);

console.log(oneSentence.capitalsCount());


