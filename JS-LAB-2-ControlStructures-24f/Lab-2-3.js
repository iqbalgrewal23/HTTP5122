//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var userChoice;
var useremail;



//==== LOGIC =============
userChoice=confirm("would you like to join mailing list");
console.log(userChoice);
if(userChoice===true)
{
    useremail=prompt("Enter your email","me@example.com");
}   
if(userChoice===false){
    alert("we will not bother you again");

}
else if (useremail===""||useremail==null||useremail==="me@example.com")
{
    alert ("thank you but your email is not valid");
}

else {
    alert("thank you our next new letter will be sent to"+useremail);
}


