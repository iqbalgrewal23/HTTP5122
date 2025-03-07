// object for team real madrid

var team = {
    manager: "Ancelotti",
    titles: 35,
    cups: 14,
    players: 25,
    
    win: function() {
        this.titles = this.titles + 1;
        alert("We won! New total titles: " + this.titles);
    }
};

// output the intital value of objects properties
console.log(team);

// ask user for the name of nw manager
var userManager = prompt("Who is the new manager?", team.manager);
team.manager = userManager;

// ask user for the count of the teams player
var userPlayers = prompt("How many players now?", team.players);
team.players = userPlayers;

//call the function of object
team.win();

// output in console with updated values
console.log(team);