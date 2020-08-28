alert("hello")

//BUSINESS LOGIC
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
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

Pizza.prototype.toppingCost = fuction() {
  let numTopping = this.toppings.length;
  if(this.toppings.length !== 0){
  return numTopping;
  } else {
    alert ("If you want a cheese pizza go to Chuck-E-Cheese, pick some toppings.")
  }
}

function toppings(){
  let pizzaToppings = []
  $("input:checkbox[name=toppings]:checked").each(function(i){
    pizzaToppings[i] = $(this).val();
  })
  return pizzaToppings
}

Pizza.prototype.totalToppings = function(){
  this.toppings.forEach (function(){

  })
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

// Pizza.prototype.toppingsArray = function(toppings) {
//   let pizzaToppings=[]
//   $("input:checkbox[name=topping]:checked").each(function(i) {
//     pizzaToppings[i] = $(this).val();
//   })
// }

// Pizza.prototype.totalCost = function() {
//   let totalCost = 0;
//   this.totalCost += this.toppingCost += this.sizeCost;
//   this.totalCost = totalCost;
// }