//BUSINESS LOGIC
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = []
}

Pizza.prototype.sizeCost = function(size) {
  let this.size
  if (this.size === "Small") {
    this.sizeCost = 10;
  } else if (this.size === "Medium") {
    this.sizeCost = 15
  } else {
    this.sizeCost = 20
  }
  return this.totalCost += this.sizeCost
}

Pizza.prototype.totaltoppings


function toppingsArray()

Pizza.prototype.toppingsArray = function(toppings) {
  let pizzaToppings=[]
  $("input:checkbox[name=topping]:checked").each(function(i) {
    pizzaToppings[i] = $(this).val();
  })
}

Pizza.prototype.totalCost = function() {
  let totalCost = 0;
  this.totalCost += this.toppingCost += this.sizeCost;
  this.totalCost = totalCost;
}












