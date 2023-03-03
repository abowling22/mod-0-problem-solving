//Given an array of strings, return only the strings that have exactly 4 characters.

var names = ["Jim", "Paul", "Nick", "Robert" ]

for (var i = 0; i < names.length; i++) {
    if (names[i].length === 4) {
        console.log(names[i])
    }

}


