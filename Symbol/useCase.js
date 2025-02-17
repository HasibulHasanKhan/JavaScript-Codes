class Product {
  constructor(title) {
    this.title = title;
  }

  [Symbol.search](string) {
    return string.indexOf(this.title) >= 0 ? "Found" : "Not Found";
  }
}

console.log("javascript".search("script"));
let laptop = new Product("laptop");
console.log("HP laptop".search(laptop));
