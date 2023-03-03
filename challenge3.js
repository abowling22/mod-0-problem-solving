//1. Given an array of strings, return only the words that begin with the letter "t".


var activities = ["trapeze", "surfing", "trampoline", "cooking"];

for (var i = 0; i < activities.length; i++) {
    var activity = activities[i];
    if (activity.startsWith("t"))  {
        console.log(activity)    
    }
//console.log(activity)
}

