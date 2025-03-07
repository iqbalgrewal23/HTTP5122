var  userteam=prompt("please enter your team name. should be between 1-6");
var firstname;
if (userteam>6 || userteam=="" || isNaN(userteam)) //isNan checks is value is not a number
{
    alert("Access denied");
}
else {
   firstname=prompt("enter your first name");


   switch(userteam)
    {
    case "1":
        if(firstname.toLowerCase()==="jashan")
            {
                alert("welcome jashanpreet singh gill");
            }
        else
            {
                alert("access denied");
            }
    break;
    case "2":
        if(firstname.toLowerCase()==="ahmed")
            {
                alert("welcome Ahmed Yakoob");
            }
        else
            {
                alert("access denied");
            }    

    break;
    case "3":
        if(firstname.toLowerCase()==="iqbal")
            {
                alert("welcome Iqbal singh");
            }
        else
            {
                alert("access denied");
            } 
    break;
    case "4":
        if(firstname.toLowerCase()==="navraj")
            {
                alert("welcome Navraj singh");
            }
            else
            {
                alert("access denied");
            }     
    break;
    case "5":
        if(firstname.toLowerCase()==="sean")
            {
                alert("welcome Sean Doyle");
            }
        else
            {
                alert("access denied");
            }     
    break;
    case "6":
        if(firstname.toLowerCase()==="anjaney")
            {
                alert("welcome Anjaney bijnoey");
            }
            else
            {
                alert("access denied");
            }     
    break;
    default:
        alert("access denied");
        break;

    }
}