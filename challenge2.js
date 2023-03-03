//Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.

var names = ["Bob", "jim", "Timmy", "biLlY"]

for (i = 0; i < names.length; i++) {
    var namesRevised = names[i]
    console.log(namesRevised.toLowerCase());
}

