//BUSINESS LOGIC
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.sizeCost = function(size) {
  if (this.size === "Small") {
    this.sizeCost = 10;
  } else if (this.size === "Medium") {
    this.sizeCost = 15
  } else {
    this.sizeCost = 20
  }
  return this.totalCost += this.sizeCost
}

Pizza.prototype.toppingCost = function() {
  return toppingsArray.length; // cost of toppings is the length of the array because each topping is $1
} 

function toppings() {
  let toppingsArray = []
  $("input:checkbox[name=toppings]:checked").each(function() {
    toppingsArray[i] = ($(this).val()) //[i] because i want the value to be the length of the index count?
  })
  return toppingsArray
}




//USER LOGIC
$(document).ready(function(){
  $("#pizzaForm").submit(function(event){
    event.preventDefault();
    $("#")

  })

})



// totalCost === this.toppings += this.size


// Pizza.prototype.toppingCost = 


// function toppingsArray()






// gather size input
//gather price of size input
//gather topping input
//gather price of topping input
//Add sizeCost and toppingCost to get totalCost





// Pizza.prototype.totalCost = function() {
//   let totalCost = 0;
//   this.totalCost += this.toppingCost += this.sizeCost;
//   this.totalCost = totalCost;
// }