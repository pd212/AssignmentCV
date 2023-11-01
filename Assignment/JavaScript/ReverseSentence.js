
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ReverseSentence(sentence) {
    let word = '';
    let reversedSentence = '';

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ' ') {
            word = sentence[i] + word;
        } else {
            reversedSentence += word + ' ';
            word = '';
        }
    }

    reversedSentence += word;
    return reversedSentence;
}

rl.question("Enter a sentence: ", function(inputSentence) {
    const reversedSentence = ReverseSentence(inputSentence);
    console.log("Reversed Sentence: " + reversedSentence);
    rl.close();
});
