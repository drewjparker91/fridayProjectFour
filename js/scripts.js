//BUSINESS LOGIC
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.getPrice = function() {
  let sizeCost = 0
  let toppingCost = this.toppings.length
  if (this.size === "Small") {
    sizeCost = 10;
  } else if (this.size === "Medium") {
    sizeCost = 15;
  } else {
    sizeCost = 20;
  }
  return toppingCost += sizeCost
}



//USER LOGIC
$(document).ready(function(){
  $("#pizzaForm").submit(function(event){
    event.preventDefault();
    let toppingsArray = [];
    $("input:checkbox[name=toppings]:checked").each(function(i) {
      toppingsArray[i] = $(this).val(); //[i] because i want the value to be the length of the index count?
    })

    let size = $("#size").val();
    console.log(size);


    let pizza = new Pizza (size, toppingsArray);
    let totalCost = pizza.getPrice();

    console.log(totalCost);

    $("#price").text(totalCost);
    $("#checkout").show();
  })
})

// gather size input
//gather price of size input
//gather topping input in an array
//gather price of topping input
//Add sizeCost and toppingCost to get totalCost