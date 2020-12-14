
// write a function that splits the string into an array with an item for each word.
// console log this array
let sentence = "I am a sentence"

const splitSentence= function (str) {
    result = str.split(' ')
    console.log(result);
};

splitSentence(sentence);

// expected output = ["I", "am", "a", "sentence"]