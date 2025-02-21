let uerRoles = new Map([
  ["admin", "Full Access"],
  ["editor", "Edit Content"],
  ["viewer", "Read Only"],
]);

uerRoles.set("name", "Hasib");
console.log(uerRoles);

let res = uerRoles.get("name");
console.log(res);

console.log(uerRoles.has("admin"));

console.log(uerRoles.delete("admin"));
console.log(uerRoles);
// console.log(uersRoles.clear(userRoles))
let s = uerRoles.size;
console.log(s);

// Iterating over map :
uerRoles.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// iterate using for of loop :
for (let key of uerRoles.keys()) {
  console.log(key);
}

//
for (let [key, value] of uerRoles) {
  console.log(`${key}: ${value}`);
}

// converting map to array :
let arr = Array.from(uerRoles);
console.log(arr);

// let arr2 = [...uerRoles]

// convert map to object :
let obj = Object.fromEntries(fruits);
console.log(obj);
// converting obj to map
let objToMap = new Map(Object.entries(obj));

console.log(objToMap);
