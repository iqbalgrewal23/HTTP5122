//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
var customer={
    lastname:"Singh",
    branchNumber:3,
    accountBalance:500.25,
    interestRate:1.03,
    multipleAccounts:true ,
//2. Add the required properties to your object.


//3. Add your first method and test it. Remember, the methods will change the properties of the object.
makeDeposit: function(amount) {
    customer.accountBalance =customer.accountBalance+ amount;
console.log("thankyou, your current balance is now $"+customer.accountBalance);
},
//4. Add your second method and test it.
makeWithdrawl: function(amount) {
    customer.accountBalance =customer.accountBalance- amount;
console.log("thankyou, your current balance is now $"+customer.accountBalance);
},
//third method for interest
addInterest:function(amount){

    if(customer.multipleAccounts===true){
        var newintr=0.005+customer.interestRate;
        
        customer.accountBalance=customer.accountBalance*newintr;
        console.log("thankyou, your current balance is now $"+customer.accountBalance)
        

    }
    else
    {customer.accountBalance=customer.accountBalance*customer.interestRate;
        console.log("thankyou, your current balance is now $"+customer.accountBalance);}

    }




};
//5. Create the required output to complete steps 6-10 of the lab.
console.log(customer.accountBalance);

console.log(customer.makeDeposit(200));
console.log(customer.makeWithdrawl(75));
console.log(customer.addInterest());
//6. Once everything is working, tackle the Stretch Goal!




