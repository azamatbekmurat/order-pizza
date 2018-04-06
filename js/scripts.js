

pizzaPrice = 0;

function Pizza(name, numberOfToppings, size, toppingsList) {
  this.pizzaName = name;
  this.pizzaToppingNumber = numberOfToppings;
  this.pizzaSize = size;
  this.pizzaToppingsList = toppingsList;
  this.pizzaAddress = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Pizza.prototype.PizzaName = function() {
  return  this.pizzaSize + " " + this.pizzaName;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state;
}

Pizza.prototype.getPrice = function() {
  if (this.pizzaSize==="Small") {
    pizzaPrice = 10 + (this.pizzaToppingNumber*5);
  } else if (this.pizzaSize==="Medium") {
    pizzaPrice = 15 + (this.pizzaToppingNumber*5);
  } else if (this.pizzaSize==="Large") {
    pizzaPrice = 20 + (this.pizzaToppingNumber*5);
  } else if (this.pizzaSize==="Extra-large") {
    pizzaPrice = 25 + (this.pizzaToppingNumber*5);
  } else {}
  return pizzaPrice;
}

function resetFields() {
    $("input#pizzaName").val("");
    $("#size-of-pizza").val("small");
    $('input[type=checkbox]').each(function() {
        this.checked = false;
    });
    $("input.street").val("");
    $("input.city").val("");
    $("input.state").val("");
}

$(document).ready(function() {
  $("#pizzaOrder").submit(function(event) {
    event.preventDefault();

    var inputPizzaName = $("#pizzaName").val();
    var capitalizeFirstElement = inputPizzaName.charAt(0).toUpperCase() + inputPizzaName.slice(1);
    var inputPizzaSize = $("#size-of-pizza").val();
    var inputNumberOfToppings = 0;
    var inputToppings = [];
    $("input:checkbox[name=topping]:checked").each(function() {
      inputToppings.push($(this).val());
      inputNumberOfToppings++;
    });

    var newPizza = new Pizza(capitalizeFirstElement,inputNumberOfToppings,inputPizzaSize,inputToppings);
    var calculatedPizzaPrice = newPizza.getPrice();

    var inputStreet = $("input.street").val();
    var inputCity = $("input.city").val();
    var inputState = $("input.state").val();
    var newAddress = new Address(inputStreet, inputCity, inputState);
    newPizza.pizzaAddress.push(newAddress);

    $("ul#ordered-pizza-list").append("<li><span class='ordered-pizza'>" + newPizza.PizzaName() + ", " + calculatedPizzaPrice + "$" + "</span></li>");

    $(".ordered-pizza").last().click(function() {
      $("#pizza-details").show();
      $("#pizza-details h6").text(newPizza.PizzaName());
      $(".order-details").text(newPizza.PizzaName() + " with " + (newPizza.pizzaToppingsList).join(", "));
      $(".pizza-price").text(calculatedPizzaPrice);
      $(".delivery-address").text(newAddress.fullAddress());
    });


    resetFields();

  });

});
