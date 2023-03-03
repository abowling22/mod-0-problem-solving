//1. Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!" 


var travel = ["Moscow", "Boise", "Paris", "Berlin"];
var place = travel.sort();
console.log(place)
for (var i = 0; i < place.length; i++) {
    
    console.log(`I'm going to  ${place[i]}`);

}
