// Business Logic

function Pizza() {
  this.size;
  this.meats = [];
  this.toppings = [];
  this.price = 10;
  this.sauce = "";
  this.crust = "";
  this.order = "";
};

Pizza.prototype.priceCalculator = function () {
  if (this.size == "medium") {
    this.price += 2
  }
  else if (this.size == "large") {
    this.price += 4
  }
  else if (this.size == "godly") {
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

Pizza.prototype.formatOrder = function () {
  var formatSize = this.size.charAt(0).toUpperCase() + this.size.slice(1)
  var formatToppings = this.meats.join("").charAt(0).toUpperCase() + this.meats.join(", ").slice(1) + ", " + this.toppings.join(", ");
  var formatPrice = this.price.toFixed(2);
  $("#finalOrder").html("<img src='img/holypizza.png'> <br> Your Order: <br><strong> Size:</strong> " + formatSize + "<br><strong> Toppings:</strong> " + formatToppings + ", with " + this.sauce + " sauce, on a " + this.crust + " crust!" + "<br><strong> Price:</strong> $" + formatPrice)
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
    // console.log(pizza.size);
    // console.log(pizza.meats);
    // console.log(pizza.toppings);
    pizza.priceCalculator();
    pizza.isFormComplete();
    pizza.formatOrder();
    console.log(pizza.price);
    console.log(pizza.order);
    $("#finalOrder").append();
  })
})