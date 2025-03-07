//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var cart=[];
var threshold=35;
var bill=0;
while(bill<=35){
    

	bill=parseInt(bill);
	//GET ITEM COST FROM USER

	var price=prompt("enter the price");
	

	//CONVERT USER INPUT TO A NUMBER

	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	bill=parseInt(price)+bill;
	
	//PUSH ITEM COST TO CART ARRAY
	
	
	cart.push(bill);	
	
}
//SEND POPUP MESSAGE TO USER
alert("your shipping for this order will be free");

//SEND OUTPUT TO CONSOLE
console.log("item prices:"+cart.join("|"));

