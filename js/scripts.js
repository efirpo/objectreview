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

  if (this.meats.length > 1) {
    this.price += ((this.meats.length - 1) * 2)
  }

  if (this.toppings.length > 2) {
    this.price += ((this.toppings - 2) * 1.5)
  }
}



// UI Logic