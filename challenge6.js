//1. Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. For example, if you were given "Turing is the best", return "Turing Is The Best" instead!


// var sentence = "turing is the best"
// // charAt(0).to upper case

var mySentence = "turing is the best"
var words = mySentence.split(" ")

//console.log(words)

for (i = 0; i < words.length; i++) {
     words[i] = words[i][0].toUpperCase() + words[i].substr(1)
}

words.join(" ")

console.log(words.toString())

// this was the best i could get cant figure out a way to delete the commas