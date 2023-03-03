//1. Given an array of strings, return only the words that begin with the letter "t".


var activities = ["type", "smell", "terrorize", "cry"];

for (var i = 0; i < activities.length; i++) {
    var activity = activities[i];
    if (activity.startsWith("t"))  {
        console.log(activity)    
    }
//console.log(activity)
}

