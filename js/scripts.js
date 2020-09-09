//BUSINESS LOGIC
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.totalPrice = 0
}

Pizza.prototype.setTotalPrice = function() {
  let sizeCost = 0
  let toppingCost = this.toppings.length
  if (this.size === "Small") {
    sizeCost = 10;
  } else if (this.size === "Medium") {
    sizeCost = 15;
  } else if (this.size === "Large") {
     sizeCost =20;
  }
  this.totalPrice = toppingCost + sizeCost
}

//USER LOGIC
$(document).ready(function(){
  $("#pizzaForm").submit(function(event){
    event.preventDefault();
    let toppingsArray = [];
    $("input:checkbox[name=toppings]:checked").each(function(i) {
      toppingsArray[i] = $(this).val();
    })

    let size = $("#size").val();

    let pizza = new Pizza (size, toppingsArray);
    pizza.setTotalPrice();

    $("#price").text(pizza.totalPrice);
    $("#checkout").show();
  })
})