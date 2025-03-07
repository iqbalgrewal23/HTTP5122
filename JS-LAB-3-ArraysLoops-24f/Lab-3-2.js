//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY

var ourteam=["iqbal","anjaney","ahmed","jashan","navraj"];
//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(ourteam);

//REMOVE LAST MEMBER
ourteam.pop();
console.log(ourteam);

//ADD SEAN TO FRONT OF ARRAY
ourteam.unshift("sean");
console.log(ourteam);
//REARRANGE THE ARRAY ALPHABETICALLY
var namesort=ourteam.sort();
console.log(namesort);

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log("we have "+ourteam.length+" people in our group");

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE
for(i=0;i<ourteam.length;i++){
    var teamno=i+1;
    console.log(ourteam[i]+" is #"+teamno);
}
