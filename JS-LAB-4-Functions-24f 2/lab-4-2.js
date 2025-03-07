//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function average(num1,num2,num3,num4,num5)
{
  var avg=(num1+num2+num3+num4+num5)/5;
  return avg;  
}


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var totalAvg=average(5,10,15,20,25);
console.log(totalAvg);
var course1=88;
var course2=69;
var course3=91;
var course4=74;
var course5=70;


    var programAvg=average(course1,course2,course3,course4,course5);
    if (programAvg>=70)
        {
            alert("success your avg is "+programAvg);
        }
        else
        {
            alert("review required"+programAvg);
        }


programAvg();

