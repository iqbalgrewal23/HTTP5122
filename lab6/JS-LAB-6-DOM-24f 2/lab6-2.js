//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX
window.onload = pageReady
//LISTEN FOR load EVENT
//GET DOM ELEMENTS WE'LL NEED
function pageReady (){

var mysteryBox = document.getElementById("mysteryBox");
var buttonBox = document.getElementById("buttonBox")

//'WRAPPER' FUNCTION FOR DOM LOGIC
	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
function askUser () {
	var userResponse = confirm ("Do you want to see something?");
	if(userResponse ===true) { mysteryBox.style.display = "none" ;
		buttonBox.style.display = "block";
	}

	//FUNCTION TO CHANGE buttonBoxs
}
function changeButtonBox (){
    buttonBox.style.width = "600px";
	buttonBox.style.backgroundColor = "orange"
	buttonBox.innerHTML = "<h2><em>SURPRISE!!</em></h2>"
}

    







	//SETUP LISTENERS
	mysteryBox.onmouseover = askUser;
	buttonBox.onclick = changeButtonBox;


}//END onload FUNCTION