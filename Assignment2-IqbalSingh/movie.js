// declare and initialize 7 variables with movie names
var movie1 = "Avengers";
var movie2 = "Hitmans's Bodyguard";
var movie3 = "Deadpool";
var movie4 = "The Roadhouse";
var movie5 = "Black Panther";
var movie6 = "Ironman";
var movie7 = "Limitless";

// create an array to hold the movies
var movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

// ask the user for input and validate it
var userInput;
while (true) {
    userInput = prompt("Which top 7 movie would you like? Pick a number: 1-7");
    
    // Check if the input is valid (a number between 1 and 7)
    if (userInput >= 1 && userInput <= 7) {
        break;
    } else {
        alert("Please enter a number between 1 and 7!");
    }
}

// to display the output.
alert("Number " + userInput + " on the list is " + movies[userInput - 1]);




// output all movies to the console with their numbers

for (var i = 0; i < movies.length; i++) {
    console.log("Movie " + (i + 1) + ": " + movies[i]);
}