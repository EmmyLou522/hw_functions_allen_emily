//Declare the function.
function howdy() 
{
    //Get the user's name, assign it to a variable name. (Log it)
    var name = prompt("Please enter your full name","Your Full Name Here");
    //Add " says hi!" to the name
    //name = name + " says hi!";
    name += " says hi!";
    console.log(name);
}
//Call the function.
howdy();

//Create function expression numba
var numba=function(string)
{
    if (string.length < 7) {
    console.log("What a short little word!");
    }
    else if (string.length > 7) {
    console.log("I’m sorry, but that is too many to count!");
    }
    else {
    console.log("7!  What a perfect choice.");
    }
}
numba("7");
numba("seventy");
numba("university");

//Create inception function
function inception(callback, value)
{
callback(value);
}

inception(function logMovie(my_movie) { console.log(my_movie + " is a fantastic movie."); }, "Shrek");

