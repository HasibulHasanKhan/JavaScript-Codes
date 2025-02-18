class MathUtils {
  static PI = 3.14;

  static circleArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtils.PI);
console.log(MathUtils.circleArea(3));
