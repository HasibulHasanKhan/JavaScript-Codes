// Curried version of the price calculator
const curriedPriceCalculator =
  (price) =>
  (discount = 0.1) =>
  (tax = 0.2) => {
    return price - price * discount + price * tax;
  };

// Additional usage to demonstrate flexibility
const priceFor200 = curriedPriceCalculator(200);
// console.log(priceFor200());
// console.log(priceFor200(0.2));
console.log(priceFor200(0.2)(0.3));
