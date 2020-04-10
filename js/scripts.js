// Business Logic

function Pizza() {
  this.size = "";
  this.meats = [];
  this.toppings = [];
  this.price = 10
}

Pizza.prototype.priceCalculator() {
  if (this.size = "2") {
    this.price += 2
  }
  else if (this.size = "3") {
    this.price += 4
  }
  else if (this.size = "4") {
    this.price += 6
  }
}


// UI Logic