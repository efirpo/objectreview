// Business Logic

function Pizza() {
  this.size;
  this.meats = [];
  this.toppings = [];
  this.price = 10;
  this.sauce = "";
  this.crust = "";
};

Pizza.prototype.priceCalculator = function () {
  if (this.size == 2) {
    this.price += 2
  }
  else if (this.size == 3) {
    this.price += 4
  }
  else if (this.size == 4) {
    this.price += 6
  }

  if (this.meats.length > 1) {
    this.price += ((this.meats.length - 1) * 2)
  }

  if (this.meats.includes("lamb")) {
    this.price += 1
  }

  if (this.toppings.length > 2) {
    this.price += ((this.toppings.length - 2) * 1.5)
  }

  if (this.sauce == "squid") {
    this.price += 2
  }

  if (this.crust == "stuffed") {
    this.price += 1.75
  }
};

Pizza.prototype.isFormComplete = function () {
  if (this.crust == "blank" || this.sauce == "blank" || this.size == "blank") {
    $("#completeMe").fadeIn(600);
  } else {
    $("#finalOrder").fadeIn(600);
    $("#pizza").hide();
    $("#completeMe").hide();
  }
}


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
    pizza.sauce = $("#sauces").val();
    pizza.crust = $("#crust").val();
    console.log(pizza.size);
    console.log(pizza.meats);
    console.log(pizza.toppings);
    pizza.priceCalculator();
    pizza.isFormComplete();
    console.log(pizza.price);

  })
})