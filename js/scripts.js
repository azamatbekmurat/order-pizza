

pizzaPrice = 0;

function Pizza (name, numberOfToppings, size, toppingsList) {
  this.pizzaName = name;
  this.pizzaToppingNumber = numberOfToppings;
  this.pizzaSize = size;
  this.pizzaToppingsList = toppingsList;
}

Pizza.prototype.PizzaName = function() {
  return  this.pizzaSize + " " + this.pizzaName;
}

Pizza.prototype.getPrice = function() {
  if (this.pizzaSize==="small") {
    pizzaPrice = 10 + (this.pizzaToppingNumber*5);
  } else if (this.pizzaSize==="medium") {
    pizzaPrice = 15 + (this.pizzaToppingNumber*5);
  } else if (this.pizzaSize==="large") {
    pizzaPrice = 20 + (this.pizzaToppingNumber*5);
  } else if (this.pizzaSize==="extra-large") {
    pizzaPrice = 25 + (this.pizzaToppingNumber*5);
  } else {}
  return pizzaPrice;
}

function resetFields() {
    $("input#pizzaName").val("");
    $("input:checkbox[name=topping]").val("");
    $("#size-of-pizza").val("");
}

$(document).ready(function() {
  $("#pizzaOrder").submit(function(event) {
    event.preventDefault();

    var inputPizzaName = $("#pizzaName").val();
    var inputPizzaSize = $("#size-of-pizza").val();
    var inputNumberOfToppings = 0;
    var inputToppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      inputToppings.push($(this).val());
      inputNumberOfToppings++;
    });

    var newPizza = new Pizza(inputPizzaName,inputNumberOfToppings,inputPizzaSize,inputToppings);
    var calculatedPizzaPrice = newPizza.getPrice();

    $("ul#ordered-pizza-list").append("<li><span class='ordered-pizza'>" + newPizza.PizzaName() + "</span></li>");

    resetFields();

  });


});
