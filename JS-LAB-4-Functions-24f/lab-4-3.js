//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION


//This function will...
function checkTemp(currentTemp) {
    if (currentTemp > 30 || currentTemp < -10) {
        return false; 
    } else {
        return true; 
    }
}
//It expects to receive...
let currentTemperature = prompt("Please enter the current temperature:");
//It will return...

if (checkTemp(currentTemperature)) {
    alert("You're good, have a nice walk!");
} else {
    alert("Yikes! This is no weather for dog walking!");
}

