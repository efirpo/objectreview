// Business Logic

function Pizza() {
  this.size = "";
  this.meats = [];
  this.toppings = [];
  this.price = 10
};

Pizza.prototype.priceCalculator = function () {
  if (this.size = "2") {
    this.price += 2
  }
  else if (this.size = "3") {
    this.price += 4
  }
  else if (this.size = "4") {
    this.price += 6
  }

  if (this.meats.length > 1) {
    this.price += ((this.meats.length - 1) * 2)
  }

  if (this.toppings.length > 2) {
    this.price += ((this.toppings.length - 2) * 1.5)
  }
};



// UI Logic

$(document).ready(function () {

  $("form#pizza").submit(function (event) {
    event.preventDefault();
    var pizza = new Pizza;
    pizza.size = $("#pizzasize").val();
    $("input:checkbox[name=meatchoice]:checked").each(function () {
      var meats = $(this).val();
      pizza.meats.push(meats);
    })
    $("input:checkbox[name=toppings]:checked").each(function () {
      var toppings = $(this).val();
      pizza.toppings.push(toppings);
    })
    console.log(pizza.size);
    console.log(pizza.meats);
    console.log(pizza.toppings);
    pizza.priceCalculator();
    console.log(pizza.price);

  })
})