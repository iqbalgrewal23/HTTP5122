//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
	var username="dart";	// Correct user name
	var password="vader";	// Correct password
	var nameinput	// user name input
	var paswdinput	// password input



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
   nameinput=prompt("please enter your user name");
   console.log(nameinput);

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
alert("you entered "+nameinput);

//5. CREATE POPUP BOX FOR PASSWORD
paswdinput=prompt("please enter the password");
console.log(paswdinput);

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
alert("you entered "+paswdinput);

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if(username===nameinput && password===paswdinput){
	alert("welcome back "+ username);
	console.log("login succesfull");
}

//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE



//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
else{
	alert("Invalid username/passsword");
}