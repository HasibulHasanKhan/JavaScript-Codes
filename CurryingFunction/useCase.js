function discount(disc) {
  return (price) => {
    return price - price * disc;
  };
}

let tenPercentDiscount = discount(0.1);
let twentyPercenDiscount = discount(0.2);

let customer1 = tenPercentDiscount(200);
let customer2 = twentyPercenDiscount(700);
console.log(customer1);
console.log(customer2);
