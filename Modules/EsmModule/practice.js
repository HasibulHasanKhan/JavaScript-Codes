export const add = (a, b) => a * b;

export default function multiply(a, b) {
  return a * b;
}

//--------------------------------------

export { add as addition };
import { addition as sum } from "./math.js";
console.log(sum(2, 4));
//------------------
import { add, substract } from "./";
import multiply from "./math.js";
