//BUSINESS LOGIC
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.getPrice = function(size) {
  let sizeCost = 0
  let toppingCost = this.toppings.length
  if (this.size === "Small") {
    this.sizeCost = 10;
  } else if (this.size === "Medium") {
    this.sizeCost = 15
  } else {
    this.sizeCost = 20
  }
  return toppingCost += sizeCost
}

// Pizza.prototype.toppingCost = function() {
//   return toppingsArray.length; // cost of toppings is the length of the array because each topping is $1
// } 

// function toppings() {
//   let toppingsArray = [];
//   $("input:checkbox[name=toppings]:checked").each(function() {
//     toppingsArray[i] = ($(this).val()); //[i] because i want the value to be the length of the index count?
//   })
//   return toppingsArray; 
// }





//USER LOGIC
$(document).ready(function(){
  $("#pizzaForm").submit(function(event){
    event.preventDefault();
    let toppingsArray = [];
    console.log("dfddf")
    $("input:checkbox[name=toppings]:checked").each(function(i) {
      toppingsArray[i] = ($(this).val()); //[i] because i want the value to be the length of the index count?
      console.log("hi")
    })


    let check = $("#size").val();
    console.log(check);

    console.log(toppingsArray);


    let pizza = new Pizza (size, toppingsArray);
    let totalCost = pizza.sizeCost();
    $("#checkout").text();
    $("#checkout").show();
  })

})

// gather size input
//gather price of size input
//gather topping input in an array
//gather price of topping input
//Add sizeCost and toppingCost to get totalCost


// totalCost === this.toppings += this.size


// Pizza.prototype.toppingCost = 


// function toppingsArray()












// Pizza.prototype.totalCost = function() {
//   let totalCost = 0;
//   this.totalCost += this.toppingCost += this.sizeCost;
//   this.totalCost = totalCost;
// }